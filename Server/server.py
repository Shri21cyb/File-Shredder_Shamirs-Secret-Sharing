from flask import Flask, request, jsonify
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

UPLOAD_FOLDER = 'uploads/'  # Specify your upload folder
ENCRYPTED_FOLDER = 'encrypted/'  # Folder for encrypted files
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ENCRYPTED_FOLDER, exist_ok=True)

def encrypt_files(file_paths):
    # Placeholder encryption logic
    # Implement your actual encryption algorithm here
    encrypted_files = []
    for file_name in file_paths:
        file_path = os.path.join(UPLOAD_FOLDER, file_name)
        encrypted_file_path = os.path.join(ENCRYPTED_FOLDER, f"encrypted_{file_name}")
        
        # Simulate encryption by renaming or modifying the file (replace with real encryption)
        with open(file_path, 'rb') as f_in, open(encrypted_file_path, 'wb') as f_out:
            data = f_in.read()
            f_out.write(data[::-1])  # Example: Reverse content as "encryption"
        
        encrypted_files.append(f"encrypted_{file_name}")
    
    return encrypted_files

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'files' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    files = request.files.getlist('files')  # Get list of files
    saved_files = []
    
    for file in files:
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        
        # Save the file to the specified folder
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        saved_files.append(file.filename)

    return jsonify({'message': 'Files uploaded successfully', 'files': saved_files}), 200

@app.route('/encrypt', methods=['POST'])
def encrypt_endpoint():
    # Fetch files from the upload folder for encryption
    uploaded_files = os.listdir(UPLOAD_FOLDER)
    
    if not uploaded_files:
        return jsonify({'error': 'No files available for encryption'}), 400

    # Call the encryption function
    encrypted_files = encrypt_files(uploaded_files)
    
    return jsonify({'message': 'Files encrypted successfully', 'encrypted_files': encrypted_files}), 200

if __name__ == '__main__':
    app.run(debug=True)
