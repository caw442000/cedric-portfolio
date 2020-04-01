import React from "react";
import Typography from "@material-ui/core/Typography";

import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = ({ title, subtitle, dark, id }) => {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>

        <Typography className="icons">
          <Link
            href="https://github.com/caw442000"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon color="action" fontSize="large" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/cedric-winbush-8b2aa23a/"
            target="_blank"
            rel="noreferrer"
            alt="Cedric Winbush Linkedin Profile"
          >
            <LinkedInIcon color="action" fontSize="large" />
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default Contact;
