import React from "react";
import './Navbar.css'
import Toogle from "../Toogle/Toogle";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Jahanvi</div>
                <Toogle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                    <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                        Home
                    </Link>
                    <Link to="Service" spy={true} smooth={true}>
                        Service
                    </Link>
                    <Link to="experience" spy={true} smooth={true}>
                        Experience
                    </Link>
                    <Link to="skills" spy={true} smooth={true}>
                        Skills
                    </Link>
                    <Link to="portfolio" spy={true} smooth={true}>
                        Portfolio
                    </Link>
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;