import React from 'react'
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import "./HeaderComponent.css"

const Navbar = () => {
    return (
        <header id="spotify-headerBlock">
            <nav>
        <div className="spotifyLogo"><Logo/> </div>
        <div className="spotifyMenu"><HeaderMenu/> </div>
        </nav>
      </header>
    );
}

export default Navbar
