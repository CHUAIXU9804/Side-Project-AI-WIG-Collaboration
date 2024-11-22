import React from "react";
import LoginImage from "./Sign In Picture.jpg";
const Login: React.FC = () => {
  return (
    <>
      <div className="background"></div>

      <div className="background_picture">
        <img
          src={LoginImage}
          alt="Login Visual"
          className="background_picture"
        />
      </div>

      <form>
        <h3>Login</h3>

        <label>Username</label>
        <input type="text" placeholder="Username" id="username" />

        <label>Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>LOGIN</button>
        <div className="social">
          <div className="go">
            <i className="forgot-password"></i> Forgot Password?
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
