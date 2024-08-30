import "../css/login.css";
import React, { useState } from "react";
import logo from "../assets/images/X_logo.png";
import google from "../assets/svg/google.svg";
import apple from "../assets/svg/apple.svg";
import Createacc from "../components/createacc";
const login = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Createacc setOpen={setOpen} />}
      <div className="login-pg">
        <div className="login">
          <div className="left-side">
            <div className="left-img">
              <img src={logo} alt="twitter-logo" />
            </div>
          </div>
          <div className="right-side">
            <h1>Happening now</h1>
            <h3>Join today.</h3>
            <button className="button">
              <img src={google} />
              Sign up with Google
            </button>
            <button className="button">
              <img src={apple} />
              Sign up with Apple
            </button>
            <div className="or">
              <hr />
              <p>or</p>
              <hr />
            </div>
            <button
              className="button2"
              onClick={() => {
                setOpen(true);
              }}
            >
              Create account
            </button>
            <div className="condition">
              <p>
                By signing up, you agree to the <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>, including{" "}
                <a href="#">Cookie Use.</a>
              </p>
            </div>
            <div className="sign-in">
              <h4>Already have an account?</h4>
              <button className="button">Sign in</button>
            </div>
          </div>
        </div>
        <footer>
          <p>About</p>
          <p>Download the X app</p>
          <p>Help Center</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Accessibility</p>
          <p>Ads info</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Brand Resources</p>
          <p>Advertising</p>
          <p>Marketing</p>
          <p>X for Business</p>
          <p>Developers</p>
          <p>Directory</p>
          <p>Settings</p>
        </footer>
      </div>
    </>
  );
};

export default login;
