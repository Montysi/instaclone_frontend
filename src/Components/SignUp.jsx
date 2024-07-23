import "./SignUp.css";
import { useState } from "react";
import { signUp } from "../utils/fetch";


const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e, signUp, username, email, password) => {
    e.preventDefault();
    try {
      const response = await signUp(username, email, password);

      console.log("Sign-up successful!", response);
    } catch (error) {
      
      console.error("Sign-up failed.", error);
    }
  };

  return (
    <div className="mainContainer">
      <form
        onSubmit={(e) => handleSubmit(e, signUp, username, email, password)}
        className="signUpForm"
      >
        <div className="signUpContainer">
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username"
            className="SignUpInput"
          />

          <input
            onChange={(e) => handleChange(e, setEmail)}
            type="text"
            placeholder="Email"
            className="SignUpInput"
          />

          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password"
            className="SignUpInput"
          />

          <button id="SignUpButton"> Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;


