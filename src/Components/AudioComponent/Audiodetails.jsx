import React from 'react'
import { useContext } from 'react';
import { AudioContextApi } from './../../Apis/AudioContext';

const Audiodetails = () => {
    let currentSong = useContext(AudioContextApi)
    let playSong = currentSong.selectSong;
    console.log(playSong);
    return (
        <section className='audioplayer'>
            <article>
                {currentSong == null ? ("loading") : (<div className='_contentBlock'>
                    <header>
                        <h2>{playSong.title}</h2>
                        <p>
                            <img src={playSong.poster} alt={playSong.title}/>
                        </p>

                    </header>
                        <main>
                            <audio src={playSong.src} autoplay="true" controls></audio>
                        </main>
                   
                </div>)}
            </article>
      </section>
    )
}

export default Audiodetails
