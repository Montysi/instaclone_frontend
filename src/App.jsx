import { useState } from 'react'
import './App.css'
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUp';
import ImageContainer from './Components/ImageContainer';
import Layout from './Components/layout/Layout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");

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
          <LoginPage logOrSignSetters={logOrSignSetters}/>
        )}
      </Layout>
    </div>
  );
}

export default App;
