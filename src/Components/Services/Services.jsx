import React from "react";
import './Services.css'
import Card from "../Card/Card";
import develop from "../../img/develop.jpg"
import uiux from "../../img/uiux.jpg"
import Resume from './Resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="services" id="Service">
            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>services</span>
                <span style={{ color: darkMode ? "white" : "" }}>Proficient in full-stack web development, including front-end design, back-end programming, database<br/> management, and API integration, ensuring the delivery of robust and scalable web solutions.
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <div style={{left: '24rem'}}>
                <Card 
                emoji={uiux}
                heading={'Design'}
                detail={"Figma & UI/UX"}/>
                </div>
            

                <div style={{left:"5rem"}}>
                    <Card
                    emoji={develop}
                    heading={'Developer'}
                    detail={'Front & Backend'}
                    />
                </div>

                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services