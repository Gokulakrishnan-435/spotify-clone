import React, { useState, useEffect, createContext } from "react";
import firebase from '../firebase';
export let AudioContextApi = createContext();
let AudioContextProvider = ({ children }) => {
    let [selectSong,setSelectSong]=useState('')
    let [state, setState] = useState([]);
    let handleSelect = (audio) => {
        setSelectSong(audio);
    }
    useEffect(() => {
        let fetchAudio = async () => {
            // fetch data from datbase
            let audioList = firebase.database().ref('audio_library');
        
            // firebase event to fetch
            audioList.on('value', callback => {
                let SpotifyMusics = [];
                callback.forEach(audio => {
                    let {
                        DownloadMp3,
                        DownloadPoster,
                        audio_artist,
                        audio_category,
                        audio_details,
                        audio_language,
                        audio_title,
                    } = audio.val();
                    SpotifyMusics.push({
                        id: audio.key,
                        title: audio_title,
                        artist: audio_artist,
                        language: audio_language,
                        category: audio_category,
                        details: audio_details,
                        poster: DownloadPoster,
                        src:DownloadMp3,
                    })
                })
                setState(SpotifyMusics)
            })
        }
        fetchAudio();
    },[state.AUDIOS])
    return (
        <AudioContextApi.Provider value={{ state, handleSelect, selectSong }}>
            {children}
        </AudioContextApi.Provider>
    )
}
export default AudioContextProvider