import os
import shutil
from PIL import Image

source_base = "/Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public/Employee Website Shoot"
input_dir = os.path.join(source_base, "Sorted_Employees")
output_dir = os.path.join(source_base, "Sorted_Employees_KMeans")

# Create output base directory if not exists
os.makedirs(output_dir, exist_ok=True)

# 1. Find all images recursively inside Sorted_Employees
valid_extensions = ('.png', '.jpg', '.jpeg')
image_files = []

for root, dirs, files in os.walk(input_dir):
    for f in files:
        if f.lower().endswith(valid_extensions):
            image_files.append(os.path.join(root, f))

# Sort to maintain a deterministic order
image_files.sort()
print(f"Found {len(image_files)} images to cluster.")

# 2. Extract RGB visual signatures (16x16 grid of R,G,B values)
image_signatures = []
for path in image_files:
    try:
        with Image.open(path) as img:
            # Resize and convert to RGB
            small_img = img.convert('RGB').resize((16, 16), Image.Resampling.LANCZOS)
            pixels = list(small_img.getdata()) # list of (R, G, B) tuples
            # Flatten to 1D vector of 768 elements (16*16*3)
            flat = []
            for p in pixels:
                flat.extend(p)
            image_signatures.append({
                'path': path,
                'name': os.path.basename(path),
                'ext': os.path.splitext(path)[1].lower(),
                'vector': flat
            })
    except Exception as e:
        print(f"Error loading {path}: {e}")

print(f"Loaded signatures for {len(image_signatures)} images.")

# 3. K-Means clustering algorithm
K = 20 # EXACTLY 20 employees!
N = len(image_signatures)
dim = len(image_signatures[0]['vector'])

# Initialize centroids using K-Means++ smart seeding
centroids = [image_signatures[0]['vector']]
for _ in range(1, K):
    distances = []
    for img in image_signatures:
        # Min distance from current image to any existing centroid
        min_dist = min(sum((a - b)**2 for a, b in zip(img['vector'], c)) for c in centroids)
        distances.append(min_dist)
    # Pick the furthest one as the next centroid seed
    max_idx = distances.index(max(distances))
    centroids.append(image_signatures[max_idx]['vector'])

print("Initialized K centroids successfully.")

# Run K-Means Iterations
for iteration in range(20):
    # Cluster assignment
    clusters = [[] for _ in range(K)]
    for img in image_signatures:
        min_dist = float('inf')
        best_idx = 0
        for idx, c in enumerate(centroids):
            dist = sum((a - b)**2 for a, b in zip(img['vector'], c))
            if dist < min_dist:
                min_dist = dist
                best_idx = idx
        clusters[best_idx].append(img)
        
    print(f"Iteration {iteration+1}: Cluster sizes {[len(c) for c in clusters]}")
    
    # Recalculate centroids
    for idx in range(K):
        if len(clusters[idx]) > 0:
            avg_vector = [0.0] * dim
            for img in clusters[idx]:
                for d in range(dim):
                    avg_vector[d] += img['vector'][d]
            for d in range(dim):
                avg_vector[d] /= len(clusters[idx])
            centroids[idx] = avg_vector

print("\nK-Means clustering completed.")

# 4. Move files to Sorted_Employees_KMeans
for idx, cluster in enumerate(clusters):
    if not cluster:
        continue
    group_folder = os.path.join(output_dir, f"Employee_{idx+1}")
    os.makedirs(group_folder, exist_ok=True)
    
    print(f"Writing Group {idx+1} ({len(cluster)} images) to {group_folder}...")
    for f_idx, img in enumerate(cluster):
        new_name = f"{f_idx + 1}{img['ext']}"
        dest_path = os.path.join(group_folder, new_name)
        shutil.move(img['path'], dest_path)

# 5. Clean up old empty input_dir
shutil.rmtree(input_dir, ignore_errors=True)

# 6. Rename Sorted_Employees_KMeans to Sorted_Employees
shutil.move(output_dir, input_dir)

print(f"\nSuccessfully clustered all matching images into exactly {K} folders!")
