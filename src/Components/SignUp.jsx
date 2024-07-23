import "./SignUp.css";
import { useState } from "react";
import { signUp } from "../utils/fetch";



const SignUpPage = ({ handleChange, handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


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


