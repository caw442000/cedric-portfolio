import React from "react";

const Projects = ({ title, subtitle, dark, id }) => {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <div>
        <img />
        <p>{subtitle}</p>
        </div>
        
      </div>
    </div>
  );
}
export default Projects;
