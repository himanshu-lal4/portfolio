import React, { memo } from "react";

import IconGithub from "../assets/svg/github";
import IconLinkedIn from "../assets/svg/in";
import IconTwitter from "../assets/svg/twitter";
import IconInstagram from "../assets/svg/instagram";
import IconCodepen from "../assets/svg/codepen";
import IconCodewars from "../assets/svg/codewars";

const SocialIconLinks = ({ iconClasses }) => {
  return (
    <>
      <a
        href="https://github.com/lal-himanshu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile">
        <IconGithub classes={iconClasses} />
      </a>
      <a
        href="https://www.linkedin.com/in/himanshulal4/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile">
        <IconLinkedIn classes={iconClasses} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
        <IconTwitter classes={iconClasses} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
        <IconInstagram classes={iconClasses} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Codepen Profile">
        <IconCodepen classes={iconClasses} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Codewars Profile">
        <IconCodewars classes={iconClasses} />
      </a>
    </>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(SocialIconLinks);
