import os
import shutil
from PIL import Image
from PIL.ExifTags import TAGS

source_base = "/Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public/Employee Website Shoot"
input_dir = os.path.join(source_base, "Sorted_Employees")
output_dir = os.path.join(source_base, "Sorted_Employees_Sequential")

# Create output base directory if not exists
os.makedirs(output_dir, exist_ok=True)

# 1. Find all images recursively inside Sorted_Employees
valid_extensions = ('.png', '.jpg', '.jpeg')
image_paths = []

for root, dirs, files in os.walk(input_dir):
    for f in files:
        if f.lower().endswith(valid_extensions):
            image_paths.append(os.path.join(root, f))

print(f"Found {len(image_paths)} images to sort chronologically.")

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

# Sort all images chronologically by their actual shoot time!
image_data.sort(key=lambda x: x['time'])
print("Sorted images chronologically.")

# 2. Sequential burst boundary detection
# We compare consecutive images. When difference is high, it's a boundary change.
threshold = 28.0
bursts = []
current_burst = []

for i, img in enumerate(image_data):
    if not current_burst:
        current_burst.append(img)
    else:
        ref = current_burst[-1]
        # Compare with previous image in sequence
        diff = sum(
            abs(p1[0] - p2[0]) + abs(p1[1] - p2[1]) + abs(p1[2] - p2[2]) 
            for p1, p2 in zip(img['pixels'], ref['pixels'])
        ) / (len(img['pixels']) * 3.0)
        
        if diff < threshold:
            current_burst.append(img)
        else:
            bursts.append(current_burst)
            current_burst = [img]

if current_burst:
    bursts.append(current_burst)

print(f"Initially segmented into {len(bursts)} sequential bursts.")

# Filter out or merge single-image outliers to get to the main employee shoots
# Main shoots always have multiple photos (usually 5 to 45 photos per employee)
main_bursts = []
outliers = []

for b in bursts:
    if len(b) >= 2:
        main_bursts.append(b)
    else:
        outliers.append(b[0])

print(f"Found {len(main_bursts)} main employee shoots (>= 2 images) and {len(outliers)} single-shot outliers.")

# Re-group/assign outliers to their closest main burst chronologically (so no images are lost!)
for outlier in outliers:
    # Find the main burst closest in index/time
    best_burst = None
    min_time_diff = float('inf')
    
    # Simple strategy: find the burst whose first/last image shoot time is closest to outlier
    for b in main_bursts:
        ref_img = b[0]
        # Compute time difference
        try:
            # If string timestamp, parse or compare; fallback to index distance
            diff = abs(image_data.index(outlier) - image_data.index(ref_img))
        except Exception:
            diff = 9999
        if diff < min_time_diff:
            min_time_diff = diff
            best_burst = b
            
    if best_burst is not None:
        best_burst.append(outlier)

# Re-sort each burst chronologically after merging outliers
for b in main_bursts:
    b.sort(key=lambda x: x['time'])

print(f"\nFinalized into {len(main_bursts)} beautifully grouped employee shoots!")

# 3. Move files to Sorted_Employees_Sequential
for idx, burst in enumerate(main_bursts):
    group_folder = os.path.join(output_dir, f"Employee_{idx+1}")
    os.makedirs(group_folder, exist_ok=True)
    
    print(f"Writing Group {idx+1} ({len(burst)} images) to {group_folder}...")
    for f_idx, img in enumerate(burst):
        new_name = f"{f_idx + 1}{img['ext']}"
        dest_path = os.path.join(group_folder, new_name)
        shutil.move(img['path'], dest_path)

# 4. Clean up old empty input_dir
shutil.rmtree(input_dir, ignore_errors=True)

# 5. Rename Sorted_Employees_Sequential to Sorted_Employees
shutil.move(output_dir, input_dir)

print(f"\nSuccessfully sorted all photos chronologically into {len(main_bursts)} employee folders!")
