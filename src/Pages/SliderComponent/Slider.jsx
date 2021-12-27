import React from 'react'
import "./sliderComponent.css"
const Slider = () => {
    return (
      <section id="slider-block">
        <article>
          <div className="sliderLeft">
            <h4>SPOTIFY PREMIUM</h4>
            <h1>Get 3 months of Premium for free</h1>
            <p className="enjoy">
              Enjoy ad-free music listening, offline playback, and more. <br/>Cancel anytime.
            </p>
            <button>Get 3 months free </button>
            <p className="copyWrite">
              Individual plan only. ₹119/month after. Terms and conditions
              apply. Open only to users who haven't already tried Premium. Offer
              ends 31 December 2021.
            </p>
          </div>
                <div className="sliderRight">
                    <figure></figure>
          </div>
         
        </article>
      </section>
    );
}

export default Slider
