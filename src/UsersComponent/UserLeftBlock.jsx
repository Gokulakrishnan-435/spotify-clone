import React from 'react'
import Logo from '../Pages/HeaderComponent/Logo'
import { Link } from 'react-router-dom';


const UserLeftBlock = () => {
    return (
      <section className="userLeftBlock">
        <article>
          <ul>
            <li>
              <i class="fal fa-home" style={{ fontSize: "25px" }}></i>
              <Link to='/userhome/music-home'>Home</Link>
            </li>
            <li>
              <i class="fas fa-search" style={{ fontSize: "25px" }}></i>
              <Link href="#">Search</Link>
            </li>
            <li>
              <i class="fal fa-books" style={{ fontSize: "25px" }}></i>
              <Link href="#">Your Library</Link>
            </li>

            <li>
              <i class="fas fa-plus-square" style={{ fontSize: "25px" }}></i>
              <Link to="/userhome/create-play-list">Create Playlist</Link>
            </li>
            
            <li>
              <i class="fas fa-heart-square" style={{ fontSize: "25px" }}></i>
              <Link href="#">Liked songs</Link>
            </li>
          </ul>
          <div
            className="horizontalLine"
            style={{ position: "absolute", left: " 0px", top: "350px" }}
          >
            <hr />
          </div>
          <div className="install" style={{ marginTop: "500px" }}>
            <i
              class="fal fa-arrow-circle-down"
              style={{ fontSize: "25px" }}
            ></i>
            <Link href="#">Install</Link>
          </div>
        </article>
      </section>
    );
}

export default UserLeftBlock
