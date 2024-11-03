import React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./App.css";

function App() {
  const uploadFiles = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]); // Append each file to the form data
      }

      try {
        const response = await fetch("http://localhost:5000/upload", {
          // Replace with your server's URL
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Files uploaded successfully:", result);
        } else {
          console.error("Error uploading files:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    }
  };
  return (
    <>
      <div className="heading">
        <h1>
          File Shredder <br></br> using Shameer's Secret Sharing
        </h1>
      </div>
      <div className="button-enc">
        <Button
          variant="contained"
          component="label"
          startIcon={<CloudUploadIcon />}
          sx={{
            backgroundColor: "#4CAF50", // Customize as needed
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#45a049",
            },
          }}
        >
          Upload Files
          <input type="file" onChange={uploadFiles} multiple hidden />
        </Button>
      </div>
    </>
  );
}

export default App;
