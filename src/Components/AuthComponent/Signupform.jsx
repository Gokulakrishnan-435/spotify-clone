import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
import firebase from "../../firebase";
import { toast } from "react-toastify";
const Signupform = ({ history }) => {
  let [state, setstate] = useState({
    email: "",
    password: "",
    email1: "",
    gender: "",
    profile_Name: "",
    month: "",
    dd: "",
    yy: "",
    loading: false,
  });
  let {
    email,
    email1,
    password,
    gender,
    profile_Name,
    month,
    dd,
    yy,
    loading,
  } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setstate({ loading: true });
      if (email === email1) {
        let USER_DATA = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        let confirmMessage = `A verification message has been sent to ${email} and verify and login`;
        USER_DATA.user.sendEmailVerification();
        toast.info(confirmMessage);

        USER_DATA.user.updateProfile({
          displayName: profile_Name,
          photoURL:
            "https://png.pngitem.com/pimgs/s/24-248226_computer-icons-user-profile-clip-art-login-user.png",
        });
        history.push("./login");
        // console.log(USER_DATA);
        // toast.success("sucessfully user registered");
      } else {
        // console.log("confirm your email is not matching");
        toast.error("confirm your email is not matching");
      }
    } catch (error) {
      toast.error(error.message);
    }

    setstate({ loading: false });
  };
  return (
    <div className="addform">
      <h2>Sign up with your email address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">What's your email?</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="enter your email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email1">Confirm your email?</label>
          <input
            type="email"
            className="form-control"
            name="email1"
            placeholder="enter your email again"
            value={email1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create a Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="create a password"
            required
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profile_name">What should we call you</label>
          <input
            type="text"
            className="form-control"
            name="profile_Name"
            id="profile_Name"
            placeholder="Enter a profile name"
            value={profile_Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">What's your date of birth</label>
          <div className="dateBlock">
            <input
              type="text"
              className="form-control"
              name="month"
              placeholder="Month"
              required
              value={month}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control"
              name="dd"
              placeholder="DD"
              required
              value={dd}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control"
              name="yy"
              placeholder="YYYY"
              required
              value={yy}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">What's your gender</label>
          <main className="genderBlock" value={gender} onChange={handleChange}>
            <span>
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="male"
              />
              Male
            </span>
            <span>
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="Female"
              />
              Female
            </span>
            <span>
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="non-binary"
              />
              Non-binary
            </span>
          </main>
        </div>
        <div className="form-group">
          <input type="checkbox" />
          <span className="checkboxContent">
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>
        <div className="form-group">
          <p className="copyWriteText">
            By clicking on sign-up, you agree to Spotify's Terms and Conditions
            of Use.
          </p>
          <p>
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see Spotify's Privacy Policy.
          </p>
        </div>
        <div className="form-group btn-group">
          <button> {loading === true ? "loading..." : "Sign up"}</button>
        </div>
        <div className="form-group">
          <p className="endBlock">
            Have an account? <Link to="./login">Log in.</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Signupform);
