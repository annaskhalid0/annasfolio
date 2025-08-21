import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Portfolio template modified and customized by ")}
          <a
            href="https://github.com/annaskhalid0"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'inherit', textDecoration: 'underline' }}
          >
            Annas Khalid
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Original theme by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
