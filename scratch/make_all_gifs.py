import os
import re
import subprocess

source_base = "/Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public/Employee Website Shoot/Sorted_Employees"

# Natural sorting helper
def natural_sort_key(s):
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r'(\d+)', s)]

# 1. Scan all directories in Sorted_Employees
subdirs = [d for d in os.listdir(source_base) if os.path.isdir(os.path.join(source_base, d))]
subdirs.sort()

print(f"Found {len(subdirs)} employee folders to generate GIFs for.")

for folder in subdirs:
    folder_path = os.path.join(source_base, folder)
    
    # Gather images
    valid_extensions = ('.png', '.jpg', '.jpeg')
    images = [f for f in os.listdir(folder_path) if f.lower().endswith(valid_extensions) and not f.startswith('.')]
    
    if len(images) < 2:
        print(f"Skipping {folder}: Needs at least 2 images (found {len(images)}).")
        continue
        
    # Sort chronologically/numerically
    images.sort(key=natural_sort_key)
    
    print(f"\nProcessing {folder} ({len(images)} frames)...")
    
    # 2. Build normal GIF (normal.gif)
    normal_gif_name = f"{folder}.gif"
    normal_dest = os.path.join(folder_path, normal_gif_name)
    
    cmd_normal = [
        "magick", "convert",
        "-delay", "25",
        "-loop", "0",
    ] + images + [
        "-auto-orient",
        "-resize", "450x600^",
        "-gravity", "center",
        "-extent", "450x600",
        "-dispose", "Background",
        normal_gif_name
    ]
    
    try:
        subprocess.run(cmd_normal, cwd=folder_path, check=True)
        print(f"  ✓ Generated normal GIF: {normal_gif_name}")
    except Exception as e:
        # Fallback to convert if magick isn't aliased directly
        try:
            cmd_normal_fallback = [
                "convert",
                "-delay", "25",
                "-loop", "0",
            ] + images + [
                "-auto-orient",
                "-resize", "450x600^",
                "-gravity", "center",
                "-extent", "450x600",
                "-dispose", "Background",
                normal_gif_name
            ]
            subprocess.run(cmd_normal_fallback, cwd=folder_path, check=True)
            print(f"  ✓ Generated normal GIF (fallback): {normal_gif_name}")
        except Exception as fallback_e:
            print(f"  ✗ Failed normal GIF: {fallback_e}")
            
    # 3. Build transparent GIF (transparent.gif)
    transparent_gif_name = f"{folder}_transparent.gif"
    transparent_dest = os.path.join(folder_path, transparent_gif_name)
    
    cmd_trans = [
        "magick", "convert",
        "-delay", "25",
        "-loop", "0",
    ] + images + [
        "-auto-orient",
        "-resize", "450x600^",
        "-gravity", "center",
        "-extent", "450x600",
        "-fuzz", "15%",
        "-transparent", "white",
        "-dispose", "Background",
        transparent_gif_name
    ]
    
    try:
        subprocess.run(cmd_trans, cwd=folder_path, check=True)
        print(f"  ✓ Generated transparent GIF: {transparent_gif_name}")
    except Exception as e:
        try:
            cmd_trans[0] = "convert"
            cmd_trans.pop(1)
            subprocess.run(cmd_trans, cwd=folder_path, check=True)
            print(f"  ✓ Generated transparent GIF (fallback): {transparent_gif_name}")
        except Exception as fallback_e:
            print(f"  ✗ Failed transparent GIF: {fallback_e}")

print("\nAll animated GIFs have been created successfully!")
