import "./SignUp.css";

const SignUpPage = ({}) => {
  return (
    <div class="mainContainer">
      <input type="text" placeholder="Username" class="SignUpInput" />

      <input type="text" placeholder="Email" class="SignUpInput" />

      <input type="text" placeholder="Password" class="SignUpInput" />

      <button id="SignUpButton"> Sign Up</button>
    </div>
  );
};

export default SignUpPage;
