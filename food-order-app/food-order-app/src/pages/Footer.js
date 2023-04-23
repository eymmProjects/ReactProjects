import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="socialMedia">
        <TwitterIcon />
        <FacebookIcon />
        <Instagram />
        <LinkedIn />
      </div>
    </div>
  );
}

export default Footer;
