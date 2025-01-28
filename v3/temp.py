import os
import shutil

# Define the directory containing the markdown files
source_dir = 'data/blog/reviews'

# Iterate over all files in the source directory
for filename in os.listdir(source_dir):
    if filename.endswith('.md'):
        # Create a new folder name by removing the file extension
        folder_name = os.path.splitext(filename)[0]
        new_folder_path = os.path.join(source_dir, folder_name)
        
        # Create the new folder
        os.makedirs(new_folder_path, exist_ok=True)
        
        # Define the source file path and the new file path
        source_file_path = os.path.join(source_dir, filename)
        new_file_path = os.path.join(new_folder_path, 'index.md')
        
        # Move the file to the new folder and rename it
        shutil.move(source_file_path, new_file_path)

print("Files have been moved and renamed successfully.")