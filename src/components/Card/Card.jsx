import "./card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { ImArrowDown } from "react-icons/im";
import { FaThermometerFull } from "react-icons/fa";
import { CiWavePulse1 } from "react-icons/ci";
import { BsFillEyeFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { datas } from "../../Datas/datas";

const Card = () => {
  return (
    <>
      <div className="main">
        {datas.map((item) => (
          <div className="card_container" key={item.id}>
            <div className="card">
              <img loading="lazy" src={item.img} alt="sea" />
              <h3>{item.title}</h3>
              <p>{item.sub}</p>
              <div className="love-icon">
                <FavoriteBorderIcon />
              </div>
              <div class="vertical-line"></div>
              <div className="distance">
                <LocationOnOutlinedIcon />
                <span>Distance 0 Km</span>
              </div>
              <div className="time">
                <TimerOutlinedIcon /> <span>Top Dive Time 40-50 Min</span>
              </div>
              <div class="vertical-line1"></div>
              <div className="star">
                <div className="allstart">
                  <AiFillStar />
                  <span>4</span>
                </div>
                <span>Ratings</span>
              </div>
              <div className="arrow">
                <CiWavePulse1 />
                <ImArrowDown />
                <span>3-30M</span>
              </div>
              <div className="therometer">
                <CiWavePulse1 />
                <FaThermometerFull />
                <span>23-28 ℃</span>
              </div>
              <div className="eye">
                <CiWavePulse1 />
                <BsFillEyeFill />
                <span>30M</span>
              </div>
              <div className="arrow-right">
                <CiWavePulse1 />
                <GiReturnArrow />
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
