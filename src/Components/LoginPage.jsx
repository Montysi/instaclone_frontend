import './LoginPage.css';

const LoginPage = ({}) => {

    return (
      <div class="mainContainer">
        <div class="loginContainer">
          <div class="loginInputContainer">
            <input type="text" placeholder="Username" class="loginInput" />

            <input type="text" placeholder="Password" class="loginInput" />

            <button id="loginButton"> Log In</button>
          </div>
        </div>

        <div class="signUpQueryContainer">
            <h1>Don't have an account? Sign Up</h1>
        </div>
      </div>
    );
}


export default LoginPage;