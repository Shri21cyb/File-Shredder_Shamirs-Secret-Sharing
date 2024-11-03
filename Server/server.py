from flask import Flask, request, jsonify
import os
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

UPLOAD_FOLDER = 'uploads/'  # Specify your upload folder
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

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

    # Call your encryption function here
    # For example: encrypt_files(saved_files)

    return jsonify({'message': 'Files uploaded successfully', 'files': saved_files}), 200

if __name__ == '__main__':
    app.run(debug=True)
