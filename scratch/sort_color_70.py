import os
import shutil
from PIL import Image
from PIL.ExifTags import TAGS

source_base = "/Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public/Employee Website Shoot"
input_dir = os.path.join(source_base, "Sorted_Employees")
output_dir = os.path.join(source_base, "Sorted_Employees_70")

# Create output base directory if not exists
os.makedirs(output_dir, exist_ok=True)

# 1. Find all images recursively inside Sorted_Employees
valid_extensions = ('.png', '.jpg', '.jpeg')
image_paths = []

for root, dirs, files in os.walk(input_dir):
    for f in files:
        if f.lower().endswith(valid_extensions):
            image_paths.append(os.path.join(root, f))

print(f"Found {len(image_paths)} images to sort by 70% color similarity.")

# Get chronological time (EXIF shoot time, fallback to file mtime)
def get_shoot_time(path):
    try:
        with Image.open(path) as img:
            exif = img.getexif()
            if exif:
                for tag, value in exif.items():
                    decoded = TAGS.get(tag, tag)
                    if decoded in ('DateTimeOriginal', 'DateTime'):
                        return value
    except Exception:
        pass
    return os.path.getmtime(path)

# Extract signatures and chronological times
image_data = []
for path in image_paths:
    try:
        time_key = get_shoot_time(path)
        with Image.open(path) as img:
            # Resize to 16x16 and convert to RGB
            small_img = img.convert('RGB').resize((16, 16), Image.Resampling.LANCZOS)
            pixels = list(small_img.getdata()) # list of (R, G, B) tuples
            image_data.append({
                'path': path,
                'time': time_key,
                'pixels': pixels,
                'ext': os.path.splitext(path)[1].lower()
            })
    except Exception as e:
        print(f"Error loading {path}: {e}")

# Sort all images chronologically by actual shoot time
image_data.sort(key=lambda x: x['time'])
print("Sorted images chronologically.")

# 2. 70% Color Matching Logic ignoring white background
def is_white(p):
    # Studio white / light gray background threshold
    return p[0] > 220 and p[1] > 220 and p[2] > 220

def compare_images(img1, img2):
    pixels1 = img1['pixels']
    pixels2 = img2['pixels']
    
    total_non_white = 0
    matched_non_white = 0
    
    for p1, p2 in zip(pixels1, pixels2):
        w1 = is_white(p1)
        w2 = is_white(p2)
        
        # If both are white, ignore
        if w1 and w2:
            continue
            
        total_non_white += 1
        
        # If one is white and other is not, it's a mismatch
        if w1 or w2:
            continue
            
        # Compare colors: match if average absolute channel diff is < 25 (L1 < 75)
        if abs(p1[0] - p2[0]) + abs(p1[1] - p2[1]) + abs(p1[2] - p2[2]) < 75:
            matched_non_white += 1
            
    if total_non_white == 0:
        return 1.0 # both completely white
        
    return matched_non_white / total_non_white

# 3. Burst segmentation and adjacent merging
# If two consecutive images have >= 70% non-white color match, they belong to the same burst
bursts = []
current_burst = []

for img in image_data:
    if not current_burst:
        current_burst.append(img)
    else:
        ref = current_burst[-1]
        similarity = compare_images(img, ref)
        
        # 70% color match!
        if similarity >= 0.70:
            current_burst.append(img)
        else:
            bursts.append(current_burst)
            current_burst = [img]

if current_burst:
    bursts.append(current_burst)

print(f"Initially segmented into {len(bursts)} bursts.")

# Helper to merge bursts by comparing representative images
# We keep merging the most similar adjacent bursts until we have EXACTLY 20 employee folders!
K_TARGET = 20

print(f"Merging adjacent sequences down to exactly {K_TARGET} groups using 70% color rule...")
while len(bursts) > K_TARGET:
    max_sim = -1.0
    best_idx = -1
    
    for idx in range(len(bursts) - 1):
        ref1 = bursts[idx][0]
        ref2 = bursts[idx+1][0]
        sim = compare_images(ref1, ref2)
        
        if sim > max_sim:
            max_sim = sim
            best_idx = idx
            
    # Merge bursts[best_idx] and bursts[best_idx+1]
    bursts[best_idx].extend(bursts[best_idx+1])
    bursts.pop(best_idx+1)

print(f"Successfully clustered down to exactly {len(bursts)} employee folders!")

# 4. Move files to Sorted_Employees_70
for idx, burst in enumerate(bursts):
    # Re-sort the burst chronologically to keep correct frame order
    burst.sort(key=lambda x: x['time'])
    
    group_folder = os.path.join(output_dir, f"Employee_{idx+1}")
    os.makedirs(group_folder, exist_ok=True)
    
    print(f"Writing Group {idx+1} ({len(burst)} images) to {group_folder}...")
    for f_idx, img in enumerate(burst):
        new_name = f"{f_idx + 1}{img['ext']}"
        dest_path = os.path.join(group_folder, new_name)
        shutil.move(img['path'], dest_path)

# 5. Clean up old empty input_dir
shutil.rmtree(input_dir, ignore_errors=True)

# 6. Rename Sorted_Employees_70 to Sorted_Employees
shutil.move(output_dir, input_dir)

print(f"\nSuccessfully sorted all photos chronologically into EXACTLY {K_TARGET} folders!")
