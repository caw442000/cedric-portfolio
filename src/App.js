import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
// import Section from "./Components/Section";
import dummyText from "./DummyText";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About
          title="About"
          // subtitle={false}
          dark={true}
          id="about"
        />
        <Projects
          title="Projects"
          subtitle={dummyText}
          dark={false}
          id="projects"
        />
        <Contact
          title="Contact"
          subtitle={dummyText}
          dark={true}
          id="contact"
        />

      </div>
    );
  }
}

export default App;
