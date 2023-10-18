import "./footer.css";
import SVG from "../SVG/footersvg";
import mobilepic from "../../assets/footer/app-img-english.webp";
import playstore from "../../assets/footer/googleplay.webp";
import iosstore from "../../assets/footer/appstore.webp";
import flag from "../../assets/footer/moc-logo-new.png";
import federation from "../../assets/footer/en-swsdf.png";
import exploration from "../../assets/footer/explorer.png";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer_main_container">
      <div className="front">
        <div className="top">
          <div className="left1">
            <div className="text_content">
              <h3 className="heading">Download and Start Your Exploration</h3>
              <h6 className="sub_text">
                Start your journey by exploring new places <br /> easily with
                BlueKingdom
              </h6>
            </div>
            <div className="store_container">
              <img alt="kuchv" src={playstore} />
              <img alt="kuchv" src={iosstore} />
            </div>
          </div>
          <div className="right1">
            <img alt="kuchv" src={mobilepic} className="mobile" />
          </div>
        </div>
        <div className="bottom">
          <div className="left2">
            <img alt="kuchv" src={flag} className="flag" />
            <img alt="kuchv" src={federation} className="federation" />
            <img alt="kuchv" src={exploration} className="flag" />
          </div>
          <div className="mid">
            <ul>
              <li>
                <a href="/">© 2023 Blue Kingdom</a>
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
          <div className="right2">
            <RiFacebookFill className="icons" />
            <RiInstagramLine className="icons" />
            <AiOutlineTwitter className="icons" />
            <BiLogoLinkedin className="icons" />
          </div>
        </div>
      </div>
      <div className="back">
        <SVG />
      </div>
    </div>
  );
}

export default Footer;
