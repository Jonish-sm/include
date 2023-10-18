import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./herosection.css";

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
              The ultimate diving guide <br /> to the Red Sea
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Inventore quis numquam molestias hic nostrum est at ipsa
              <br />
              dolores, voluptas ut? Laudantium aliquam atque corporis.
            </p>
            <button>
              <span>Discover </span> &nbsp; &#8594;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
