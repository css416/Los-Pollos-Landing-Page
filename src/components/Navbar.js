import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

// components
import headerLogo from '../assets/images/logo.png'
import headerVideo from '../assets/videos/header_vid.mp4'

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(true);
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    },[])

    //navbar scroll changeBackground function
    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >=300) {
            // console.log('scrolled!')
            setNavbar(true)
        } else {
            setNavbar(false)
        }
       
    }

    return (
        <header>
            <div className="header-container">
                <nav className={navbar ? "navbar active" : "navbar"}>
                    <div className="navbar-logo">
                        <Link to="/"><img src={headerLogo} alt="" /></Link>
                    </div>
                    <div className={`nav-toggle ${isOpen ? "open" : "closed"}`} onClick={() => setIsOpen(!isOpen)}>
                                <i><FontAwesomeIcon icon={ isOpen === false ? faBars : faXmark } /></i>
                    </div>
                    <div className={navbar ? `navbar-links ${isOpen && "open"} active` : `navbar-links ${isOpen && "open"}`}>
                    {/* <div className={`navbar-links ${isOpen && "open"}`}> */}
                        <ul>
                            {/* <li><Link to="/">Home</Link></li> */}
                            <li><a href="#header-video">Home</a></li>
                            {/*<li><Link to="/">Menu</Link></li>
                            <li><Link to="/">Gallery</Link></li>
                            <li><Link to="/">Contact Us</Link></li> */}
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
               
                </nav>
                <div className="header-video" id="header-video">
                    <video src={headerVideo} autoPlay loop muted />
                    {/* <Link to="/" className="menu-link">Check Our Menu</Link> */}
                </div>
                <div className="menu-link">
                    {/* <Link to="/">Check Our Menu</Link> */}
                    <a href="#menu">Check Our Menu</a>
                </div>
                
            </div>
        </header>
    );
}
 
export default Navbar;