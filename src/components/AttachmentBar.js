import React, { useState } from 'react';
// import './AttachmentBar.css';

function AttachmentBar({ onFileSelect }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    onFileSelect(e.target.files[0]);
  };

  const handleFileUpload = () => {
    // Logic to upload the file
    console.log(selectedFile);
    // Reset the selected file
    setSelectedFile(null);
  };

  return (
    <div className="attachment-bar">
      <input
        type="file"
        id="file-input"
        onChange={handleFileChange}
        style={{ display: 'none' }} // Hide the default input
      />
      <label htmlFor="file-input" className="attach-btn">
        Attach File
      </label>
      {selectedFile && (
        <button onClick={handleFileUpload} className="upload-btn">
          Upload
        </button>
      )}
    </div>
  );
}

export default AttachmentBar;
