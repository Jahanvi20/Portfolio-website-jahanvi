import React, {useContext,useState} from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import {themeContext} from '../../Context';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0u4akrp', 'template_6ynk5e5', form.current, 'ifqFrrRHPEApoJIoo')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return(
        <div className="contact-form" id="contact">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color:darkMode? 'white': ''}}>Get in Touch</span>
                    <span>Contact Me</span>
                    <div 
                        className="blur s-blur1"
                        style={{background:"#ABF1FF94"}}>
                    </div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user-name" className="user" placeholder="Name" />
                    <input type="email" name="user-email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" className="button" value="Send" />
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div 
                        className="blur c-blur1"
                        style={{background:"var(--purple)"}}>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;