import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import jahanvi from "../../img/jahanvi.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";

const Intro = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Jahanvi Jain</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Full Stack developer with good knowledge and expertise, procuding
            the quality work
          </span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        {/* <button className="button i-button">
          <a href="#contact">Hire me</a>
        </button> */}

        <div className="i-icons">
          <a href="https://github.com/Jahanvi20">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/jahanvi-jain-982a51200/">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/jahanvi_.20/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={jahanvi} alt="" />
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv img={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Enthusiastic" txt2="Passionate" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
