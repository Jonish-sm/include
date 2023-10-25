import "./card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "../../assets/icons/location.png";
import TimerOutlinedIcon from "../../assets/icons/stopwatch.png";
import Arrow from "../../assets/icons/arrowdown.png";
import Thero from "../../assets/icons/thermo.png";
import Eye from "../../assets/icons/eye.png";
import Curvarrow from "../../assets/icons/arrowcurv.png";
import { AiFillStar } from "react-icons/ai";
import { datas } from "../../Datas/datas";

const Card = () => {
  return (
    <>
      <div className="main">
        {datas.map((item) => (
          <div className="card" key={item.id}>
            <img className="cardImg" loading="lazy" src={item.img} alt="sea" />
            <h3>{item.title}</h3>
            <p>{item.sub}</p>
            <div className="love-icon">
              <FavoriteBorderIcon />
            </div>
            <div className="vertical-line"></div>
            <div className="distance">
              <img src={LocationOnOutlinedIcon} alt="location" />
              <span>Distance &nbsp; 15 Km</span>
            </div>
            <div className="time">
              <img src={TimerOutlinedIcon} alt="watch" />
              <span>Top Dive Time &nbsp;&nbsp; 45-60 Mn</span>
            </div>
            <div className="vertical-line1"></div>
            <div className="star">
              <div className="allstart">
                <AiFillStar className="yellow" />
                <span>4</span>
              </div>
              <p>Ratings</p>
            </div>
            <div className="arrow">
              <img src={Arrow} alt="" />
              <span>150-452 M</span>
            </div>
            <div className="therometer">
              <img src={Thero} alt="therometer" />
              <span>254-332°C</span>
            </div>
            <div className="eye">
              <img src={Eye} alt="eyeicon" />
              <span>654+ 542M</span>
            </div>
            <div className="arrow-right">
              <img src={Curvarrow} alt="curvarrow" />
              <span>MILD</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
