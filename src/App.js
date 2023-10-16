import "./App.css";
import google from "./assets/images/login/Google-Logo.png";
import facebook from "./assets/images/login/Facebook-Logo.png";

function App() {
  return (
    <form className="Login-Container">
      <div className="Login-to-your-account">Login to Your Account</div>
      <div className="login-Box">
        <button className="Google-Button">
          <img src={google} className="Google-Logo" alt="Google-Logo"></img>
          <div>Login with Google</div>
        </button>

        <button className="Facebook-Button">
          <img
            src={facebook}
            className="Facebook-Logo"
            alt="Facebook-Logo"
          ></img>
          <div className="Login-with-Facebook">Login with Facebook</div>
        </button>
        <div className="OR">OR</div>
        <input type="text" placeholder="Email or Phone" id="Email-or-Phone" />
        <input type="text" placeholder="Password" id="Password" />
        <div className="Remember-Forgot">
          <input type="checkbox" name="Remember Me" id="Remember-Me" />
          <label for="Remember-Me" className="Remember-Me">
            Remember Me
          </label>
          <a className="Forgot-Password">Forgot Password?</a>
        </div>
        <button className="Login-Button">Login</button>
        <box className="Not-a-Member-Sign-Up">
          <div className="Not-a-Member">Not a Member?</div>
          <div className="Sign-Up"> Sign Up</div>
        </box>
      </div>
    </form>
  );
}

export default App;
