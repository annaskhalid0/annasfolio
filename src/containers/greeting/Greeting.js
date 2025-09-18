import React, {useContext, useEffect, useRef, useState} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY || window.pageYOffset;
      const isScrollingDown = currentY > lastScrollYRef.current;
      // Stay visible when scrolling down; fade out when scrolling up beyond threshold
      if (!isScrollingDown && currentY > 100) {
        setIsFadingOut(true);
      } else {
        setIsFadingOut(false);
      }
      lastScrollYRef.current = currentY;
    }
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="View my resume"
                    href={greeting.resumeLink}
                    newTab={true}
                    className="download-link-button"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Annas Khalid profile"
              src="/Annas_PP1.jpg"
              className={`profile-avatar ${isFadingOut ? "fade-out" : "fade-in"}`}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
