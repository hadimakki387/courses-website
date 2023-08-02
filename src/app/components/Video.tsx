import React, { useContext,useEffect } from "react";
import { FakeVideoContext } from "../context/FakeVideosContext";

function Video() {
  const [videos,PlayingVideo, sections, chosenVideo] =useContext(FakeVideoContext);
  
  return (
    <iframe
      src={PlayingVideo}
      allow="autoplay; encrypted-media"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></iframe>
  );
}

export default Video;
