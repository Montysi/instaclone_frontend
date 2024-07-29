import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUp';
import ImageContainer from './Components/ImageContainer';
import WebsiteLayout from './Components/layout/WebsiteLayout';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/?page=1&limit=6&client_id=${
          import.meta.env.VITE_UNSPLASH_CLIENT_ID
        }`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      const sortedImages = data.map((image) => ({
        id: image.id,
        imageUrls: {
          small: image.urls.small,
        },
        likes: image.likes,
        photographer_name: image.user.username,
      }));
      setImages(sortedImages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();  // CSS Issue - when images are dusplayed, header/login message does not show
    }
  }, [isLoggedIn]);

  const logOrSignSetters = {
    isLoggedIn,
    setIsLoggedIn,
    loggedUser,
    setLoggedUser,
  };

  return (
    <Router>
      <div className="flex flex-column container">
        <WebsiteLayout loggedUser={loggedUser}>
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <ImageContainer isLoggedIn={isLoggedIn} images={images} />
                ) : (
                  <LoginPage logOrSignSetters={logOrSignSetters} />
                )
              }
            />
            <Route
              path="/signup"
              element={<SignUpPage logOrSignSetters={logOrSignSetters} />}
            />
            <Route 
              path="/login"
              element={<LoginPage logOrSignSetters={logOrSignSetters} />}
              />
          </Routes>
        </WebsiteLayout>
      </div>
    </Router>
  );
}

export default App;
