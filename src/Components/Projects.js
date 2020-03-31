import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from '@material-ui/core/Typography';

import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import HttpIcon from "@material-ui/icons/Http";

const Projects = ({ title, subtitle, dark, id }) => {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <div className="project-wrapper">
          <h2 className="project-title">Weight Lifting Journal</h2>

          <div className="project-content">
            <div>
              <img
                className="project-image"
                src={require("../images/workout.jpg")}
                alt="Workout"
              />
              <Typography className="icons">
                <Link
                  href="https://github.com/BW-Weight-Lifting-Journal-6/Marketing-Page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon color="action" fontSize="large" />
                </Link>
                <Link
                  href="https://marketing-weightlifting.netlify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HttpIcon color="action" fontSize="large" />
                </Link>
              </Typography>
            </div>
            <Typography>
              <p className="project-text">{subtitle}</p>
            </Typography>
          </div>
        </div>

        <div className="project-wrapper">
          <h2 className="project-title"> Chore Tracker</h2>

          <div className="project-content">
            <div>
              <img
                className="project-image"
                src={require("../images/washing-dishes.jpg")}
                alt="Workout"
              />
              <Typography className="icons">
                <Link
                  href="https://github.com/Build-Week-Home-Chore-Tracker-2020/Front-End"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon color="action" fontSize="large" />
                </Link>
                <Link
                  href="https://front-end-psi.now.sh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HttpIcon color="action" fontSize="large" />
                </Link>
              </Typography>
            </div>
            <div>
              <p className="project-text">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="project-wrapper">
          <h2 className="project-title">Better Professor</h2>

          <div className="project-content">
            <div>
              <img
                className="project-image"
                src={require("../images/teaching.jpg")}
                alt="Workout"
              />
              <Typography className="icons">
                <Link
                  href="https://github.com/BW-A-Better-Professor-App/Better-Professor-FE/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon color="action" fontSize="large" />
                </Link>
                <Link
                  href="https://better-professor-one.now.sh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HttpIcon color="action" fontSize="large" />
                </Link>
              </Typography>
            </div>
            <div>
              <p className="project-text">{subtitle}</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};
export default Projects;
