import React, {useContext, useEffect, useRef, useState} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY || window.pageYOffset;
      const isScrollingDown = currentY > lastScrollYRef.current;
      if (isScrollingDown && currentY > 100) {
        setIsCompact(true);
      } else if (!isScrollingDown && currentY < 80) {
        // near top, expand back
        setIsCompact(false);
      } else if (!isScrollingDown) {
        // scrolling up away from top, expand
        setIsCompact(false);
      }
      lastScrollYRef.current = currentY;
    }
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;

    return (
    <header className={(isDark ? "dark-menu header" : "header") + (isCompact ? " compact" : "") }>
      <a href="/" className={"logo" + (isCompact ? " logo-centered" : "") }>
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </a>
      {!isCompact && (
        <>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{color: "white"}}
          >
            <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
          </label>
        </>
      )}
      <ul className={(isDark ? "dark-menu menu" : "menu") + (isCompact ? " menu-hidden" : "") }>
        {viewSkills && (
          <li>
            <a href="#skills">Skills</a>
          </li>
        )}
        {viewExperience && (
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
        )}
        {viewOpenSource && (
          <li>
            <a href="#opensource">Open Source</a>
          </li>
        )}
        {viewAchievement && (
          <li>
            <a href="#achievements">Achievements</a>
          </li>
        )}
        
        {viewResume && (
          <li>
            <a href="#resume">Resume</a>
          </li>
        )}
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <ToggleSwitch />
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
