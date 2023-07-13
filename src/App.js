import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import './App.css';
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer"
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
