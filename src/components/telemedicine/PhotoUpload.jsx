import React, { useState } from "react";

const PhotoUpload = () => {

  const [image, setImage] = useState(null);

  const handleUpload = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    setImage(preview);

  };

  return (

    <div
      style={{
        marginTop: "15px",
        borderTop: "1px solid #e5e7eb",
        paddingTop: "10px"
      }}
    >

      <h4>Upload Patient Image</h4>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {image && (

        <div style={{ marginTop: "10px" }}>

          <img
            src={image}
            alt="Patient upload"
            style={{
              maxWidth: "200px",
              borderRadius: "8px",
              border: "1px solid #ddd"
            }}
          />

        </div>

      )}

    </div>

  );

};

export default PhotoUpload;
