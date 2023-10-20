import "./readcard.css";
import one from "../../assets/img/rectangle-112@2x.png";
import two from "../../assets/img/rectangle-1125@2x.png";
import three from "../../assets/img/rectangle-1124@2x.png";
import four from "../../assets/img/rectangle-1123@2x.png";
import five from "../../assets/img/rectangle-1121@2x.png";
import six from "../../assets/img/rectangle-1122@2x.png";

import BsArrowRightCircle from "../../assets/icons/catarrow.png";

function ReadCard() {
  return (
    <div className="read_main">
      <div className="readsee">
        <div className="left">
          <h2>Reads</h2>
        </div>
        <div className="right">
          <span>View all</span>
          <img src={BsArrowRightCircle} alt="arrow" />
        </div>
      </div>
      <div className="readcard">
        <div className="grid1">
          <img src={one} alt="" />
          <h3 className="hu3">
            The Fight <br />
            Against Plastic
          </h3>
        </div>
        <div className="grid2">
          <img src={two} alt="" />
          <h3 className="hu3">
            SCUBA Diving…my <br /> rebirth!
          </h3>
        </div>
        <div className="grid3">
          <img src={five} alt="" />
          <h3 className="hu3">
            Free Diving. Did you <br /> know that…
          </h3>
        </div>
        <div className="grid4">
          <img src={three} alt="" />
          <h3 className="hu3">
            My own…Deep <br /> Blue Sea
          </h3>
        </div>
        <div className="grid5">
          <img src={four} alt="" />
          <h3 className="hu3">
            Divemaster <br /> Rocks
          </h3>
        </div>
        <div className="grid6">
          <img src={six} alt="" />
          <h3 className="hu3">
            Find the <br /> courage!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ReadCard;
