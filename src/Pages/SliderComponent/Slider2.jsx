import React from 'react'
import "./Slider2.css"
import { Link } from 'react-router-dom';
const Slider2 = () => {
    return (
      <section id="sliderBlock">
        <article>
          <div className="sliderLeft">
            <h4>SPOTIFY PREMIUM</h4>
            <h1>
              2021 Wrapped is <br />
              ready.
            </h1>
            <p className="enjoy">
              But it’s only available in the Spotify app. <br />
              Download it now to discover more.
            </p>
            <div className="imgBlock">
              <img
                src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg"
                alt="playstore"
                height="60px"
              />
              <img
                src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg"
                alt="google"
                height="100px"
                width="200px"
              />
            </div>
            <Link to="">Listen to 2021 highlights here.</Link>
          </div>
          <div className="slider-Right">
            <figure></figure>
          </div>
        </article>
      </section>
    );
}

export default Slider2
