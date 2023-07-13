import React, {useContext} from "react";
import { themeContext } from "../../Context";
import './Experience.css'

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="experience" id="experience">
            <div className="heading">
                <span style={{color: darkMode?'white':''}}>My</span>
                <span> Experience</span>
            </div>
            
            <div className="r-experience">
                <div className="achievement">
                    <span>Web Developer Intern</span>
                    <span>Ode To Clouds</span>
                    <span>1 dec 2022 – 30 dec 2022</span>
                    <span>Worked with: C#, .net, MySql, MVC, Visual Studio</span>
                    <span style={{color: darkMode?'white':''}}>Worked on .net development and also learned MySql with C#
                          language. Also helped them regarding css error.</span>
                </div>
                <div className="achievement">
                    <span>Web Developer Intern</span>
                    <span>Infinity Ventures</span>
                    <span>7 jan 2022 – 30 June 2022</span>
                    <span>Worked with: html, css, javascript, rest api</span>
                    <span style={{color: darkMode?'white':''}}>Worked as frontend developer for a shopping website and later on
                          developed a house renting application.</span>
                </div>
                <div className="achievement">
                    <span>Web Developer Intern</span>
                    <span>The Sparks Foundation</span>
                    <span>1 sep 2021 - 31 sep 2021</span>
                    <span>Worked with: html, css, javascript, razorpay</span>
                    <span style={{color: darkMode?'white':''}}>A simple website made for payments using payment gateway razorpay 
                          and also connected it with email sending facility.</span>
                </div>
                <div className="achievement">
                    <span>Web Developer Intern</span>
                    <span>Peace Solutions</span>
                    <span>23 aug 2021 – 23 sep 2021</span>
                    <span>Worked with: Pug, css, javascrip, mongodb</span>
                    <span style={{color: darkMode?'white':''}}>Developed my own portfolio website for giving references and also
                          connected it to mongodb for the the contact form.</span>
                </div>
                <div className="achievement">
                    <span>Sales & Marketing Intern</span>
                    <span>Unschool</span>
                    <span>19 apr 2021 – 19 june 2021</span>
                    <span>Worked with: Sales, Communication</span>
                    <span style={{color: darkMode?'white':''}}>Assisting in advertising and promotional efforts & bringing in 
                          new sales. Helped me with communication and persuasive skills</span>
                </div>
            </div>
        </div>
    )
}

export default Experience