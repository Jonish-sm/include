import "./readcard.css";
import IMG from "../../assets/img/16903803783702.jpg";
import { BsArrowRightCircle } from "react-icons/bs";

function ReadCard() {
  return (
    <div className="read_main">
      <div className="readsee">
        <div className="left">
          <h2>Reads</h2>
        </div>
        <div className="right">
          <span>See all</span>
          <BsArrowRightCircle />
        </div>
      </div>
      <div className="readcard">
        <div className="grid1">
          <img src={IMG} alt="" />
          <h3 className="hu3">
            The Fight <br />
            Against Plastic
          </h3>
        </div>
        <div className="grid2">
          <img src={IMG} alt="" />
          <h3 className="hu3">
            The Fight <br />
            Against Plastic
          </h3>
        </div>
        <div className="grid3">
          <img src={IMG} alt="" />
          <h3 className="hu3">
            The Fight <br />
            Against Plastic
          </h3>
        </div>
        <div className="grid4">
          <img src={IMG} alt="" />
          <h3 className="hu3">
            The Fight <br />
            Against Plastic
          </h3>
        </div>
        <div className="grid5">
          <img src={IMG} alt="" />
          <h3 className="hu3">
            The Fight <br />
            Against Plastic
          </h3>
        </div>
        <div className="grid6">
          <img src={IMG} alt="" />
          <h3 className="hu3">
            The Fight <br />
            Against Plastic
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ReadCard;
