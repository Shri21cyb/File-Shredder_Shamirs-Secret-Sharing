import React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./App.css";
import UploadButton from "/home/saahil/Desktop/File-Shredder_Shamirs-Secret-Sharing/User Interface/searchButton.jsx";

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
        {/* <Button
          variant="contained"
          component="label"
          startIcon={<CloudUploadIcon />}
          sx={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
            "&:hover": {
              backgroundColor: "#45a049",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              background:
                "conic-gradient(from 180deg at 50% 50%, transparent, #4caf50, #4caf50, transparent)",
              animation: "rotateGlow 4s linear infinite",
              zIndex: 1,
              opacity: 0.8,
            },
            "&:hover::before": {
              opacity: 1,
            },
          }}
        >
          Upload Files
          <input type="file" onChange={uploadFiles} multiple hidden />
        </Button> */}
<UploadButton></UploadButton>
        {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <Input/> */}
      </div>
    </>
  );
}

export default App;
