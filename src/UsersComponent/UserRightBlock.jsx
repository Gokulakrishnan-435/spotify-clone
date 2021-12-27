import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

import Profile from "./ProfileComponents/Profile";
import ProfileUpload from "./ProfileComponents/ProfileUpload";
import MusicHome from './../Components/AudioComponent/MusicHome';
//import AudioList from "../Components/AudioComponent/AudioList";
import Audiodetails from './../Components/AudioComponent/Audiodetails';
import CreatePlayList from './../Components/AudioComponent/CreatePlayList';
const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <Fragment>
      <div className="userRightBlock">
        {id === "profile" && <Profile />}
        {id === "photo_upload" && <ProfileUpload />}
        {id === "create-play-list" && <CreatePlayList />}
        {id === "music-home" && <MusicHome />}
        <footer>  <Audiodetails /></footer>
      </div>
    </Fragment>
  );
};

export default UserRightBlock;
