import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About"
          subtitle={false}
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
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
