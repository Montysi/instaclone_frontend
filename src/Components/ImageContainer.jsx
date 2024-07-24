import { useEffect, useState } from "react";
import "./ImageContainer.css";

const ImageContainer = ({ isLoggedIn }) => {
  const [images, setImages] = useState([]);


    useEffect(() => {
      if (isLoggedIn) {
        async function fetchImages() {
          const data = await imageUseEffect();
          console.log(data);
          setImages(data.images);
        }

        fetchImages();
      }
    }, [isLoggedIn]);

    const imageUseEffect = () => {
        console.log("useEffect in ImageContainer working");
        return {
          images: [
            { id: 1, image: "This is a cat" },
            { id: 2, image: "This is a dog" },
            { id: 3, image: "This is a duck" },
            { id: 4, image: "This is a monkey" },
            { id: 5, image: "This is a hedgehog" },
            { id: 6, image: "This is a badger" },
          ],
        };
    };

    return (
      <div className="image-column-container">
        <div className="image-row-container">
          {images.map((img) => (
            <div key={img.id} className="image-item">
              {img.image}
            </div>
          ))}
        </div>
      </div>
    );

};

export default ImageContainer;