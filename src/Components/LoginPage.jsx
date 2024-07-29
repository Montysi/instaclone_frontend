import './LoginPage.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from '../utils/fetch';

const LoginPage = ({ logOrSignSetters}) => {
  const { setIsLoggedIn, setLoggedUser } = logOrSignSetters;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e, login, username, email, password) => {
    e.preventDefault();
    try {
      const response = await login(username, email, password);

      console.log("login successful!", response);
      setIsLoggedIn(true);
      setLoggedUser({username});
    } catch (error) {
      console.error("login failed.", error);
    }
  };

    return (
      <div className="mainContainer">
        <form
          onSubmit={(e) => handleSubmit(e, login, username, password)}
          className="loginForm"
        >
          <div className="loginContainer">
            <h2>Instagram</h2>
            <div className="loginInputContainer">
              <input
                onChange={(e) => handleChange(e, setUsername)}
                type="text"
                placeholder="Username"
                className="loginInput"
              />

              <input
                onChange={(e) => handleChange(e, setPassword)}
                type="text"
                placeholder="Password"
                className="loginInput"
              />

              <button id="loginButton"> Log In</button>
            </div>
          </div>
        </form>

        <div className="signUpQueryContainer">
          <h1>Don't have an account? <Link to="/signup">Sign Up</Link></h1>
        </div>
      </div>
    );

    
}


export default LoginPage;