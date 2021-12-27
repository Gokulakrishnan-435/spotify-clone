import React from 'react'
import ReactDOM from 'react-dom';
const MyFirstPortal = () => {
    return ReactDOM.createPortal(<div>
        <h1>My first portal</h1>
        <p>Outside DOM tree</p>
    </div>,document.getElementById('root1'))
}

export default MyFirstPortal;
