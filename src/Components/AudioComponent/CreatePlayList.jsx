import React from 'react'
import { Fragment } from 'react';
import "./audio.css"
import firebase from "../../firebase"
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OTPAuth from './OTPAuth';

let genre=["Blues","Classical","Country","Disco","HipHop","Jazz","Metal","Pop","Rock"]
const CreatePlayList = () => {
    let [state, setstate] = useState({
        audio_title:"",
        audio_artist:"",
        audio_lamguage:"",
        audio_category:"",
        audio_details:"",
        loading: false,
        barStatus: false,
        progress:0,
    })

    let { audio_title, audio_artist, audio_language, audio_category, loading, audio_details, barStatus, progress } = state;
    
    let [Poster, setPoster] = useState("")
    let [AudioFile, setAudioFile] = useState("")
    
    let handleChange = e => {
        let { name, value } = e.target;
        setstate({...state, [name]:value})
    }

    let handlePoster = e => {
        setPoster({[e.target.name]:e.target.files[0]})
    }

    let handleAudioFile = e => {
        let { name } = e.target;
        setAudioFile({[name]:e.target.files[0]})
    }
    let handleSubmit = e => {
        e.preventDefault();
        try {
            setstate({ loading: true });
            console.log(state);
            console.log(Poster);
            console.log(AudioFile);
            let AUDIO_POSTER = Poster.audio_poster.name;
            let AUDIO_FILE = AudioFile.audio_file.name;
            let audio_storage = firebase.storage().ref(`/music-poster/${AUDIO_POSTER}`).put(Poster.audio_poster);
            let Mp3_storage = firebase.storage().ref(`/music-file/${AUDIO_FILE}`).put(AudioFile.audio_file);
            // console.log(audio_storage);
            // console.log(Mp3_storage)
            Mp3_storage.on("state_changed", (snapshot) => {
              //progress bar
              let progressbar =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setstate({
                loading: true,
                barStatus: true,
                progress: progressbar,
              });
            }, (error) => { throw error },
                async () => {
                    // completion of task
                    let DownloadPoster = await firebase
                        .storage()
                        .ref("music-poster")
                        .child(AUDIO_POSTER)
                        .getDownloadURL();
                    setPoster(DownloadPoster);
                    let DownloadMp3 = await firebase
                        .storage()
                        .ref("music-file")
                        .child(AUDIO_FILE)
                        .getDownloadURL();
                    setAudioFile(DownloadMp3);
                    firebase.database().ref("audio_library").push({ ...state, DownloadMp3, DownloadPoster });
                    toast.success("successfully audio file is uploaded")
                }
            );

        }
        catch (error) {
            toast.error(error.message);
        }
        setstate({ loading: false });
    }
    let ProgressTemplate = () => {
      return (
        <progress value={progress} min={0} max={100}>
          {progress}
        </progress>
      );
    };
    return (
      <section id="AudioSection">
        <h2>Create Playlist</h2>
        <article>
          {
            <section id="progressSection">
              <article>
                {barStatus === true ? (
                  <>
                    <span>
                      <ProgressTemplate />
                    </span>
                    <span>{Math.round(progress) + "%"}</span>
                  </>
                ) : (
                  ""
                )}
              </article>
            </section>
          }

          <form onSubmit={handleSubmit}>
            {/*Zencoding: div.form-group*6>label+input.form-control */}

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter audio title"
                name="audio_title"
                required
                value={audio_title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="artist">artist</label>
              <input
                type="text"
                className="form-control"
                name="audio_artist"
                required
                value={audio_artist}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="language">language</label>
              <input
                type="text"
                className="form-control"
                name="audio_language"
                required
                value={audio_language}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Audio category</label>
              <select
                name="audio_category"
                value={audio_category}
                onChange={handleChange}
              >
                {genre.map((val, index) => (
                  <Fragment key={index}>
                    <option value={val} defaultvalue={val[0]}>
                      {val}
                    </option>
                  </Fragment>
                ))}
              </select>
            </div>
            <div className="form-group audio_details">
              <label htmlFor="audio_details"></label>
              <textarea
                name="audio_details"
                cols="50"
                rows="6"
                value={audio_details}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="audio_poster">Poster</label>
              <input
                type="file"
                className="form-control"
                name="audio_poster"
                onChange={handlePoster}
              />
            </div>
            <div className="form-group">
              <label htmlFor="audio_file">Upload Audio file</label>
              <input
                type="file"
                className="form-control"
                name="audio_file"
                onChange={handleAudioFile}
              />
              <div className="form-group  btn-group  btn-block">
                <button>{loading ? "uploading" : "upload"}</button>
              </div>
            </div>
          </form>
        </article>
      </section>
    );
}

export default CreatePlayList

