import React from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import img from "../assets/google.png";

const Login = () => {
  return (
    <>
      <header>
        <figure>
          <img src={logo} alt="Reachinbox Logo" />
        </figure>
      </header>
      <article className="login-container">
        <main className="login-box">
          <h2>Create a new account</h2>
          <div className="google-button">
            <img
                src={img}
              alt="Google"
            />
            <span>Sign Up with Google</span>
          </div>
          <button className="create-account-button">Create an Account</button>
          <p>
            Already have an account? <a href="#">Sign In</a>
          </p>
        </main>
      </article>
      <footer>
          <p>&copy; 2023 Reachinbox. All rights reserved.</p>
        </footer>
    </>
  );
};

export default Login;
