import React from 'react';
import './Skills.css';
import CSS from '../../img/CSS.png';
import Java from '../../img/Java.png';
import Javascript from '../../img/Javascript.png';
import NET from '../../img/net.png';
import HTML from '../../img/HTML.png';
import Git from '../../img/Git.png';
import ReactJs from '../../img/ReactJs.png';
import NodeJs from '../../img/NodeJs.png';
import MySQL from '../../img/MySQL.png';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Skills = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='skills' id='skills'>
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Reliable</span>
                <span>Skills</span>
                <span style={{color: darkMode? 'white': ''}}>Proficient in HTML, CSS, JavaScript, and other web development technologies, with a strong understanding<br/> of front-end frameworks and libraries.
                    <br/>
                    <br/>
                    Experienced in building dynamic and interactive websites, implementing responsive design, and utilizing <br/>version control systems for efficient development workflow.
                </span>
                
                <div className="blur s-blur3" style={{background: "#ABF1FF82"}}></div>
            </div>
            {/* right side */}
            <div className='r-awesome'>
                    <div className='r-maincircle'>
                        <div className='r-secondarycircle'>
                            <img src={MySQL} alt=''/>
                            <h6 style={{ color: darkMode ? "white" : "" }}>MySQL</h6>
                        </div>
                        <div className='r-secondarycircle'>
                            <img src={CSS} alt=''/>
                            <h6>CSS</h6>
                        </div>
                        <div className='r-secondarycircle'>
                            <img src={Java} alt=''/>
                            <h6 style={{ color: darkMode ? "white" : "" }}>Java</h6>
                        </div>
                        <div className='r-secondarycircle'>
                            <img src={Javascript} alt=''/>
                            <h6 style={{ color: darkMode ? "white" : "" }}>Javascript</h6>
                        </div>
                        <div className='r-secondarycircle'>
                            <img src={NET} alt=''/>
                            <h6>.Net</h6>
                        </div>
                        <div className='r-secondarycircle'>
                            <img src={HTML} alt=''/>
                            <h6 style={{ color: darkMode ? "white" : "" }}>HTML</h6>
                        </div>
                        <div className='r-secondarycircle'>
                            <img src={Git} alt=''/>
                            <h6>Git</h6>
                        </div>
                        <div className='r-secondarycircle'>
                            <img src={ReactJs} alt=''/>
                            <h6 style={{ color: darkMode ? "white" : "" }}>ReactJS</h6>
                        </div>
                        <div className='r-secondarycircle'>
                            <img src={NodeJs} alt=''/>
                            <h6 style={{ color: darkMode ? "white" : "" }}>NodeJs</h6>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Skills;
