import React from "react";

const AudioItem = (props) => {
    return(
          <div className="col-3" onClick={()=>props.handleSelect(props.audio)} >
            <figure>
              <img src={props.audio.poster} alt={props.audio.title} />
            </figure>
            <h1>{props.audio.title}</h1>
            </div>
 )
};

export default AudioItem;
