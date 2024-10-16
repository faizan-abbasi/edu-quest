import "./VideoPlayer.css";
import video from "../../assets/collage-video.mp4";
import { useRef } from "react";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target == player.current) {
      setPlayState(false);
    }
  };
  return (
    <>
      <div
        className={`video-player ${playState ? "" : "hide"}`}
        ref={player}
        onClick={closePlayer}
      >
        <video src={video} autoPlay muted controls></video>
      </div>
    </>
  );
};

VideoPlayer.propTypes = {
  playState: "",
  setPlayState: "",
};

export default VideoPlayer;
