import React from "react";
import Logo from "../../Pages/HeaderComponent/Logo";
import "./auth.css";
import Signupform from './Signupform';

const Signup = () => {
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <div className="authContent">
          <h1>Sign up for free to start listening.</h1>
                  <button className="btn1">Sign up with FaceBook</button>
                  <p className="orBlock">
                      <strong>or</strong>
                  </p>
        </div>
        <div className="formContent"><Signupform/></div>
      </article>
    </section>
  );
};

export default Signup;
