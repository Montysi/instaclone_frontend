import { useState } from 'react'
import './App.css'
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUp';
import ImageContainer from './Components/ImageContainer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);

  const logOrSignSetters = {
    isLoggedIn,
    setIsLoggedIn,
    loggedUser,
    setLoggedUser,
  };

  return (
    <div className="flex flex-column container">
      <Layout loggedUser={loggedUser}>
        {isLoggedIn ? (
          <ImageContainer isLoggedIn={isLoggedIn} />
        ) : (
          <LoginPage />
        )}
      </Layout>
    </div>
  );
}

export default App;
