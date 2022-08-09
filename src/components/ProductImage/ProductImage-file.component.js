import React, { useState } from "react";
import './ProductImage.css';



const ProductImage = () => {
  const [selectedImages, setSelectedImages] = useState([]);
   
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));


    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <div>
    <section>
      <label className="Add-File-Btn">
         Add File
        <br />
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />  

      <input type="file" multiple />

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="140" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  delete image
                </button>
              </div>
            );
          })}
      </div>
    </section>
    {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
             {selectedImages.length} Add
            {selectedImages.length === 1 ? "" : "s"}
          </button>
        ))}
    </div>
  );
};

export default ProductImage;
