import React from "react";
import Typography from '@material-ui/core/Typography';


const About = ({ title, subtitle, dark, id }) => {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <Typography className="section-content" id={id}>
        <h1>{title}</h1>
        <p>Web Development is my passion</p>
      </Typography>
    </div>
  );
}
export default About;
