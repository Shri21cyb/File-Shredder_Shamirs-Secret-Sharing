import React, { useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LockIcon from "@mui/icons-material/Lock";
import "./App.css";

function App() {
  const [isUploaded, setIsUploaded] = useState(false);

  const uploadFiles = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }

      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Files uploaded successfully");
          setIsUploaded(true);
        } else {
          console.error("Upload failed");
        }
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    }
  };

  const handleEncrypt = () => {
    console.log("Encrypting files...");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>File Shredder using Shamir's Secret Sharing</h1>
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
        style={{ margin: "10px" }}
      >
        Upload Files
        <input type="file" onChange={uploadFiles} multiple hidden />
      </Button>

      {isUploaded && (
        <Button
          variant="contained"
          startIcon={<LockIcon />}
          onClick={handleEncrypt}
          style={{ margin: "10px", backgroundColor: "#FF5722", color: "#fff" }}
        >
          Encrypt Files
        </Button>
      )}
    </div>
  );
}

export default App;
