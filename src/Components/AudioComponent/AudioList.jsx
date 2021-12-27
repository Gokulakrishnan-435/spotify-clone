import React from 'react'
import AudioItem from './AudioItem';

const AudioList = (props) => {
    let { audio , handleSelect} = props;
    return (
        <section id="musicHome">
            <article>
                {audio.map(x => {
                    return (
                      <AudioItem
                        key={x.id}
                        audio={x}
                        handleSelect={handleSelect}
                      />
                    );
                })}
            </article>
        </section>
    )
}

export default AudioList;
