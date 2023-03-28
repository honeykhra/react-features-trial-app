import { CloudinaryContext, Image } from "cloudinary-react";
import { v4 as uuidv4 } from "uuid";
import { Cloudinary } from "cloudinary-core";
import { useState } from "react";
const cloudinary = new Cloudinary({
  cloud_name: "dfshf22du",
  secure: true,
});

const MultipleImageUpload = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  function handleFileUpload(event) {
    const files = event.target.files;
    const uploadedImages = [];
    console.log(cloudinary.uploader);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const publicId = uuidv4(); // Generate a unique ID for each uploaded image
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "bestbuddy");
      formData.append("public_id", publicId);

      cloudinary.uploader.upload(formData, (error, result) => {
        if (error) {
          console.error(error);
        } else {
          uploadedImages.push(result.public_id);
          setUploadedImages(uploadedImages);
        }
      });
    }
  }

  return (
    <div>
      <h1>Multiple Image Uploader</h1>
      <input type="file" multiple onChange={handleFileUpload} />
      <CloudinaryContext
        cloudName="dfshf22du"
        apiKey="781653888434493"
        apiSecret="KypKgE_78wyE5k25Juk_7xRY7gg"
      >
        {uploadedImages.map((publicId) => (
          <Image key={publicId} publicId={publicId} />
        ))}
      </CloudinaryContext>
    </div>
  );
};

export default MultipleImageUpload;
