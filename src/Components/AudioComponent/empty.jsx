import id from 'faker/lib/locales/id_ID';
import React from 'react'
import { useContext } from 'react';
import Spinner from '../../Pages/Spinner/Spinner';
import { AudioContextApi } from '../../Apis/AudioContext';
import "./audio.css"
import { useRef } from 'react';
import { useState } from 'react';
import MusicChild from './AudioList';
import "./audio.css"

const MusicHome = () => {
    let AUDIO = useContext(AudioContextApi);

    return (
      <section id="musicHome">
        <article>
        
            {AUDIO.map(audio => {
             return <MusicChild key={audio.id} {...audio} />;
            })}
    
        </article>
      </section>
    );
    }
export default MusicHome


// Music child

import React from 'react'
import { useState,useRef } from 'react';

const MusicChild = (audio) => {
    
      let [play, setplay] = useState(false);
      let audioRef = useRef(false);
      let playorpause = () => {
        setplay(!play);
          if (play)
              audioRef.current.play();
        else {
          audioRef.current.pause();
        }
      };
  let { id, title, artist, language, category, details, poster, src } = audio;
    return (
    
          <div className="col-3" key={id}>
            <figure onClick={playorpause}>
              <img src={poster} alt={title} />
            </figure>
            <h2>{title}</h2>

            <audio src={src} ref={audioRef} controls></audio>
          </div>
        
    );
            
}

export default MusicChild






