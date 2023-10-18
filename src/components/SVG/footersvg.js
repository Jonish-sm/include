import React from "react"; // Don't forget to import React

import "./footersvg.css";

function Footersvg() {
  return (
    <svg viewBox="0 0 120 28" className="footer-wave__svg">
      <defs>
        <mask id="xxx">
          <circle cx="7" cy="12" r="40" fill="#fff"></circle>
        </mask>

        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="2"
            result="blur"
          ></feGaussianBlur>

          <feColorMatrix
            type="matrix"
            values=" 1.000  0.000  0.000  0.000  0.000
                    0.000  1.000  0.000  0.000  0.000
                    0.000  0.000  1.000  0.000  0.000
                    0.000  0.000  0.000  1.000  0.000"
          ></feColorMatrix>
          <feBlend in="SourceGraphic" in2="goo"></feBlend>
        </filter>
        <path
          id="wave"
          d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 58 h -240 z"
        ></path>
      </defs>
      <use id="wave5" className="wave" xlinkHref="#wave" x="0" y="-12" />
      <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="5"></use>
      <use id="wave0" className="wave" xlinkHref="#wave" x="0" y="-9"></use>
      <use id="wave4" className="wave" xlinkHref="#wave" x="0" y="15"></use>
    </svg>
  );
}

export default Footersvg; // Component name should start with an uppercase letter
