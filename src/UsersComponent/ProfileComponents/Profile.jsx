import React, { useContext } from "react";
import "./Profile.css"; 
import { AuthContextApi } from "../../Apis/AuthContent"; 
import { Link } from 'react-router-dom';
const Profile = () => {
  let { displayName, photoURL } = useContext(AuthContextApi);
  return (
    <section id="profileBlock">
      <article>
        <header>
          <figure>
            <Link to="/userhome/photo_upload">
              <span className="_editIcon">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                choose photo
              </span>
              <img id="imager" src={photoURL} alt={displayName} />
            </Link>
          </figure>
          <aside>
            <h5>profile</h5>
            <h1>{displayName}</h1>
          </aside>
        </header>
        <main></main>
      </article>
    </section>
  );
};

export default Profile;
