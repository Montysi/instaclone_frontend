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

// useEffect(() => {
  //   if (isLoggedIn) {
  //     async function fetchImages() {
  //       const data = await imageUseEffect();
  //       console.log(data);
  //       setImages(data.images);
  //     }

  //     fetchImages();
  //   }
  // }, [isLoggedIn]);

  // const imageUseEffect = () => {
  //   console.log("useEffect in ImageContainer working");
  //   return {
  //     images: [
  //       {
  //         id: 1,
  //         image: <img src={bulldog} className="bulldog-img" />,
  //       },
  //       {
  //         id: 2,
  //         image: <img src={kitten} className="kitten-img" />,
  //       },
  //       {
  //         id: 3,
  //         image: <img src={bulldog} className="bulldog-img" />,
  //       },
  //       {
  //         id: 4,
  //         image: <img src={kitten} className="kitten-img" />,
  //       },
  //       {
  //         id: 5,
  //         image: <img src={bulldog} className="bulldog-img" />,
  //       },
  //       {
  //         id: 6,
  //         image: <img src={kitten} className="kitten-img" />,
  //       },
  //     ],
  //   };
  // };

//   return (
//     <div className="image-column-container">
//       <div className="image-row-container">
//         {images.map((img) => (
//           <div key={img.id} className="image-item">
//             {img.image}
//             <h2>Hello</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };