import os
import shutil
from PIL import Image
from PIL.ExifTags import TAGS

source_base = "/Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public/Employee Website Shoot"
input_dir = os.path.join(source_base, "Sorted_Employees")
output_dir = os.path.join(source_base, "Sorted_Employees_Merged")

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

# Sort all images chronologically by actual shoot time
image_data.sort(key=lambda x: x['time'])
print("Sorted images chronologically.")

# 2. Segment into initial sequential bursts using a very conservative threshold
threshold = 12.0 # highly sensitive to start with many small, ultra-clean bursts
bursts = []
current_burst = []

for img in image_data:
    if not current_burst:
        current_burst.append(img)
    else:
        ref = current_burst[-1]
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

print(f"Initially segmented into {len(bursts)} bursts.")

# Helper to calculate average color vector of a burst for comparison
def get_burst_vector(burst):
    dim = len(burst[0]['pixels']) * 3
    avg = [0.0] * dim
    for img in burst:
        flat = []
        for p in img['pixels']:
            flat.extend(p)
        for d in range(dim):
            avg[d] += flat[d]
    for d in range(dim):
        avg[d] /= len(burst)
    return avg

# 3. Constrained Agglomerative Hierarchical Clustering:
# Merge adjacent bursts chronologically until we have EXACTLY 20 employee folders!
K_TARGET = 20

print(f"Merging adjacent shoot sequences down to exactly {K_TARGET} groups...")
while len(bursts) > K_TARGET:
    min_dist = float('inf')
    best_idx = -1
    
    for idx in range(len(bursts) - 1):
        v1 = get_burst_vector(bursts[idx])
        v2 = get_burst_vector(bursts[idx+1])
        # Calculate Mean Absolute Difference between adjacent bursts
        dist = sum(abs(a - b) for a, b in zip(v1, v2)) / len(v1)
        if dist < min_dist:
            min_dist = dist
            best_idx = idx
            
    # Merge bursts[best_idx] and bursts[best_idx+1]
    bursts[best_idx].extend(bursts[best_idx+1])
    bursts.pop(best_idx+1)

print(f"Successfully clustered down to exactly {len(bursts)} employee folders!")

# 4. Move files to Sorted_Employees_Merged
for idx, burst in enumerate(bursts):
    # Re-sort the burst chronologically after merges to keep correct order of frames
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

# 6. Rename Sorted_Employees_Merged to Sorted_Employees
shutil.move(output_dir, input_dir)

print(f"\nSuccessfully sorted all photos chronologically into EXACTLY {K_TARGET} folders!")
