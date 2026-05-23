import os
import subprocess

def make_combined_gif():
    base_dir = "/Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public/Employee Website Shoot/Sorted_Employees"
    output_dir = base_dir
    output_gif_name = "combined_employees.gif"
    output_path = os.path.join(output_dir, output_gif_name)
    
    # 1. Gather all subfolders
    folders = [f for f in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, f))]
    folders.sort()
    
    selected_images = []
    print(f"Found {len(folders)} total folders.")
    
    # 2. Iterate through folders and pick 4 frames from everyone except 'aditya nayak'
    for folder in folders:
        if folder.lower().strip() == 'aditya nayak':
            print(f"Skipping folder: {folder} (excluded)")
            continue
            
        folder_path = os.path.join(base_dir, folder)
        
        # Find images in this folder
        valid_extensions = ('.jpg', '.jpeg', '.png')
        images = [
            os.path.join(folder_path, f)
            for f in os.listdir(folder_path)
            if f.lower().endswith(valid_extensions) and not f.endswith('.gif')
        ]
        images.sort()
        
        if not images:
            print(f"No images in: {folder}")
            continue
            
        # Take a small part (first 4 frames) of this employee
        subset = images[:4]
        selected_images.extend(subset)
        print(f"Added {len(subset)} frames from: {folder}")
        
    if not selected_images:
        print("Error: No images selected to combine.")
        return
        
    print(f"\nStitching a total of {len(selected_images)} frames into one master portrait GIF...")
    
    # 3. Compile the master animated GIF with auto-orientation, cropping, and vertical portrait size
    cmd = [
        "magick", "convert",
        "-delay", "25",
        "-loop", "0",
    ] + selected_images + [
        "-auto-orient",
        "-resize", "450x600^",
        "-gravity", "center",
        "-extent", "450x600",
        "-dispose", "Background",
        output_path
    ]
    
    try:
        subprocess.run(cmd, check=True)
        print(f"\n🎉 MASTER COMBINED GIF GENERATED SUCCESSFULLY!")
        print(f"Saved to: {output_path}")
    except Exception as e:
        # Fallback to standard convert command
        print(f"magick failed, attempting fallback to convert: {e}")
        try:
            cmd_fallback = [
                "convert",
                "-delay", "25",
                "-loop", "0",
            ] + selected_images + [
                "-auto-orient",
                "-resize", "450x600^",
                "-gravity", "center",
                "-extent", "450x600",
                "-dispose", "Background",
                output_path
            ]
            subprocess.run(cmd_fallback, check=True)
            print(f"\n🎉 MASTER COMBINED GIF GENERATED SUCCESSFULLY (fallback)!")
            print(f"Saved to: {output_path}")
        except Exception as fallback_e:
            print(f"✗ Master GIF generation failed: {fallback_e}")

if __name__ == "__main__":
    make_combined_gif()
