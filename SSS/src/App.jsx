import React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./App.css";

function App() {
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
          <input
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
            hidden
          />
        </Button>
      </div>
    </>
  );
}

export default App;
