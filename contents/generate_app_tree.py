import os

# Define target directories
TARGET_DIRS = [
    r"C:\Users\shop\vnr-final\app",
    r"C:\Users\shop\vnr-final\components",
    r"C:\Users\shop\vnr-final\data"
]

# Output path
OUTPUT_PATH = r"C:\Users\shop\vnr-final\contents\app_tree.txt"

# Extensions to include in content merge
INCLUDE_EXTENSIONS = (".js", ".jsx", ".ts", ".tsx", ".json")

def write_tree_and_contents(base_dirs, output_file):
    with open(output_file, "w", encoding="utf-8") as f:
        for base_dir in base_dirs:
            f.write(f"\n\n📁 Directory: {base_dir}\n")
            for root, dirs, files in os.walk(base_dir):
                level = root.replace(base_dir, '').count(os.sep)
                indent = '    ' * level
                f.write(f"{indent}- {os.path.basename(root)}/\n")
                sub_indent = '    ' * (level + 1)
                for file in files:
                    path = os.path.join(root, file)
                    f.write(f"{sub_indent}- {file}\n")
                    
                    if file.endswith(INCLUDE_EXTENSIONS):
                        try:
                            with open(path, "r", encoding="utf-8") as content_file:
                                content = content_file.read()
                            f.write(f"\n----- START FILE: {path} -----\n")
                            f.write(content)
                            f.write(f"\n----- END FILE: {path} -----\n\n")
                        except Exception as e:
                            f.write(f"\n[ERROR READING FILE: {path}] - {e}\n\n")

if __name__ == "__main__":
    write_tree_and_contents(TARGET_DIRS, OUTPUT_PATH)
    print(f"\n✅ Tree and content saved to:\n{OUTPUT_PATH}")
