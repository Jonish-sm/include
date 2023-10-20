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
          <div className="card_container" key={item.id}>
            <div className="card">
              <img
                className="cardImg"
                loading="lazy"
                src={item.img}
                alt="sea"
              />
              <h3>{item.title}</h3>
              <p>{item.sub}</p>
              <div className="love-icon">
                <FavoriteBorderIcon />
              </div>
              <div class="vertical-line"></div>
              <div className="distance">
                <img src={LocationOnOutlinedIcon} alt="location" />
                <span>Distance 15 Km</span>
              </div>
              <div className="time">
                <img src={TimerOutlinedIcon} alt="watch" />
                <span>Top Dive Time 40-50 Min</span>
              </div>
              <div class="vertical-line1"></div>
              <div className="star">
                <div className="allstart">
                  <AiFillStar color="yellow" />
                  <span>4</span>
                </div>
                <p>Ratings</p>
              </div>
              <div className="arrow">
                <img src={Arrow} alt="" />
                <span>3-30M</span>
              </div>
              <div className="therometer">
                <img src={Thero} alt="therometer" />
                <span>23-28 ℃</span>
              </div>
              <div className="eye">
                <img src={Eye} alt="eyeicon" />
                <span>30M</span>
              </div>
              <div className="arrow-right">
                <img src={Curvarrow} alt="curvarrow" />
                <span>Mild</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
