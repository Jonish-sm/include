import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./herosection.css";
import Play from "../../assets/icons/play.svg";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="videoDiv">
          <VideoPlayer />
        </div>
        <div className="hero_text">
          <div className="hero_text_container">
            <h1>
              The ultimate diving <br />
              guide to the northern <br />
              red sea.
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br /> industry. Lorem Ipsum has been the industry's standard
              dummy <br /> text ever since the 1500s
            </p>
            <button>
              <span>Discover </span> &nbsp; &#8594;
            </button>
            <div className="play">
              <img src={Play} alt="play" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
