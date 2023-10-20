import "./footer.css";
import SVG from "../SVG/footersvg";
import mobilepic from "../../assets/footer/mobile.png";
import playstore from "../../assets/footer/googleplay.webp";
import iosstore from "../../assets/footer/appstore.webp";
import disney from "../../assets/footer/disney.png";
import exploration from "../../assets/footer/explorer.png";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

function Footer() {
  return (
    <div className="main_footer">
      <div className="front">
        <div className="footer_top">
          <div className="footer_left">
            <div className="head">
              <h3 className="heading">
                Download and <br /> Start Your Exploration
              </h3>
            </div>
            <div className="para">
              <p>
                Start your journey by exploring new places <br /> easily with
                BlueKingdom
              </p>
            </div>
            <div className="storeimg">
              <img alt="kuchv" src={playstore} />
              <img alt="kuchv" src={iosstore} />
            </div>
          </div>
          <div className="footer_right">
            <div className="mobiimg">
              <img alt="mobile" src={mobilepic} className="mobile" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="footer_bot_left">
          <img alt="kuchv" src={disney} className="federation" />
          <img alt="kuchv" src={exploration} className="flag" />
        </div>
        <div className="footer_bot_middle">
          <ul>
            <li>
              <a href="/">© 2022 Hasinclu.de</a>
              <span className="vl"></span>
            </li>
            <li>
              <a href="/">About Us</a>
              <span className="vl"></span>
            </li>
            <li>
              <a href="/">Contact Us</a>
              <span className="vl"></span>
            </li>
            <li>
              <a href="/">Privacy</a>
              <span className="vl"></span>
            </li>
            <li>
              <a href="/">Terms</a>
              <span className="vl"></span>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer_bot_right">
          <RiFacebookFill className="icons" />
          <RiInstagramLine className="icons" />
          <AiOutlineTwitter className="icons" />
          <BiLogoLinkedin className="icons" />
        </div>
      </div>
      <div className="back">
        <SVG />
      </div>
    </div>
  );
}

export default Footer;
