import { useEffect, useState } from "react";
import "./ImageContainer.css";
import bulldog from "../assets/bulldog-1047518_1280.jpg";
import kitten from "../assets/kitty-cat-kitten-pet-45201.jpeg"



const ImageContainer = ({ isLoggedIn, images }) => {

  return (
    <div className="image-column-container">
      <div className="image-row-container">
        {images.map((img) => (
          <div key={img.id} className="image-item">
            <img src={img.imageUrls.small} alt={img.photographer_name} />
            <h2>{img.photographer_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

  

export default ImageContainer;

