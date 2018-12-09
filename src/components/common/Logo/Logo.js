import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GitHubLogo } from "./github-icon.svg";

const Logo = () => {
  return (
    <React.Fragment>
      <GitHubLogo width={24} height={24} />
      <Link to="/">GitHub User Finder</Link>
    </React.Fragment>
  );
};

export default Logo;
