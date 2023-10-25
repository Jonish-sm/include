import { useEffect, useState } from "react";
import Video from "../../assets/video/Underwater.mp4";
import "./videoplayer.css";
function VideoPlayer() {
  const [control, setControl] = useState();
  useEffect(() => setControl(false), []);
  return (
    <div className="video-container">
      <video
        controls={control}
        autoPlay
        loop
        muted
        loading="lazy"
        className="video-element"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
