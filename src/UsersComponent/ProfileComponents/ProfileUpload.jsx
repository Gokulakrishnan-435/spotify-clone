import React, { useContext ,useState } from "react";

import firebase from "firebase";

import { AuthContextApi } from './../../Apis/AuthContent';
import { toast } from 'react-toastify';

const ProfileUpload = () => {
  let AUTH = useContext(AuthContextApi);

  let [state, setState] = useState({
    profile_photo: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });
  let { loading, profile_photo,barStatus,progress } = state;
  let handlechanges = e => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };
  let handleSubmit = e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let { name } = profile_photo;
      let uploadTask = firebase
        .storage()
        .ref(`user-photo/${name}`)
        .put(profile_photo);
      uploadTask.on(
        "state-changed",
        snapshot => {
          let progressBar = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setState({loading:true,progress:progressBar,barStatus:true})
        },
        error => {
          toast.error(error.message);
        },
        async () => {
          let DownloadUrl = await firebase
            .storage()
            .ref("user-photo")
            .child(name)
            .getDownloadURL();
          AUTH.updateProfile({
            photoURL: DownloadUrl,
          });
          window.location.assign("/userhome/profile");
        }
      );
      toast.success("sucessfully photo uploaded")
    } catch (error) {
    //   toast.error(error.message)
    }
  };
  let ProgressTemplate = () => {
    return (<progress value={progress} min={0} max={100}>
      {progress}
    </progress>);
}
  return (
    <section id="photo_upload_block">
      {
        <div id="progressSection">
     
            {barStatus === true ? (<>
              <span>
                <ProgressTemplate /></span>
              <span>{ Math.round(progress)+'%'}</span></>):('')}
        
        </div>
      }
      <article>
        <div className="_block">
          <h2>upload photo</h2>

          <form onSubmit={handleSubmit}>
            <input type="file" name="profile_photo" onChange={handlechanges} />
            <button>
              {loading === true ? <i className="fas fa-spinner"></i> : "upload"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ProfileUpload;
