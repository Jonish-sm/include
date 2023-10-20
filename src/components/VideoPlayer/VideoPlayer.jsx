import Video from "../../assets/video/Underwater.mp4";
import "./videoplayer.css";
function VideoPlayer() {
  return (
    <div className="video-container">
      <video no-controls autoPlay loop loading="lazy" className="video-element">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
