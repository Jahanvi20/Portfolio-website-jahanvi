import React from "react";
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width:'100%'}}/>
            <div className="f-content">
                <span>jahanvijain20@gmail.com</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/jahanvi_.20/">
                    <Insta color="white" size="3rem" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100011173831792&mibextid=ZbWKwL">
                    <Facebook color='white' size={'3rem'}/>
                    </a>
                    <a href="https://github.com/Jahanvi20">
                    <Github color='white' size={'3rem'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;