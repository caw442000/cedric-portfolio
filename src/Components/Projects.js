import React from "react";
// import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from '@material-ui/core/Typography';

import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import HttpIcon from "@material-ui/icons/Http";

const Projects = ({ title, subtitle, dark, id }) => {


  const weightLiftingText = `I was tasked with utilizing my knowledge of HTML CSS and LESS to generate a multipage marketing page for a group project in school `;
  const betterProfessorText = `Utilized my skills with React.js ContextAPI and CRUD to develop a frontend dashboard to tie into our backend API so a professor can keep track of their students deadlines.`;

  const choreTrackerText = `Used Formik and Material UI with React.js to generate a view and functionality for a frontend dashboard to allow a parent to add their children and assign chores to each child.`;

  
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
              <p className="project-text">{weightLiftingText}</p>
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
              <p className="project-text">{choreTrackerText}</p>
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
              <p className="project-text">{betterProfessorText}</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};
export default Projects;
