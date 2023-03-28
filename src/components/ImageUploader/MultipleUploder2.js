import React, { useState, useEffect } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileInput = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    console.log(selectedFiles);

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const publicId = uuidv4();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "bestbuddy");
      formData.append("public_id", publicId);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dfshf22du/image/upload`,
        formData
      );
      const url = await response.data.secure_url.toString();
      console.log("url", url);
      setUploadedImages((prev) => [...prev, url]);
    }
  };
  console.log("uploaded", uploadedImages);
  return (
    <>
      <form onSubmit={handleFileUpload}>
        <input type="file" multiple onChange={handleFileInput} />
        <button type="submit">Upload</button>
      </form>
      {/* <CloudinaryContext
        cloudName="dfshf22du"
        apiKey="781653888434493"
        apiSecret="KypKgE_78wyE5k25Juk_7xRY7gg"
      > */}
      {uploadedImages.map((item, index) => (
        <img alt={item} src={item} key={`${item}--${index}`} />
      ))}
      {/* </CloudinaryContext> */}
    </>
  );
}

export default FileUpload;
