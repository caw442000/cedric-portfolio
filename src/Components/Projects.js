import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import HttpIcon from "@material-ui/icons/Http";

const Projects = ({ title, subtitle, dark, id }) => {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <div className="project-content">
          <div>
            <img
              className="project-image"
              src={require("../images/workout.jpg")}
              alt="Workout"
            />
            <div className="icons">
              <Link
                href="https://github.com/BW-Weight-Lifting-Journal-6/Marketing-Page"
                target="_blank"
              >
                <GitHubIcon color="action" fontSize="large" />
              </Link>
              <Link href="https://marketing-weightlifting.netlify.com/"
                target="_blank">
                <HttpIcon color="action" fontSize="large" />
              </Link>
            </div>
          </div>
          <div>
            <p className="project-text">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
