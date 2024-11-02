import React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>File Shredder</h1>
      </div>
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
      <div className="card">
        <button>count</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
