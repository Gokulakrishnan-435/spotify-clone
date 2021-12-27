import React from 'react'
import { useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { AudioContextApi } from './../../Apis/AudioContext';
import "./audio.css"
import AudioList from './AudioList';

const MusicHome = () => {
    let AUDIO= useContext(AudioContextApi)
    return (
      <Fragment>
        {AUDIO.state.length >= 0 && (
          <AudioList audio={AUDIO.state} handleSelect={AUDIO.handleSelect} />
        )}
      </Fragment>
    );
}

export default MusicHome
