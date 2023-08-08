import { FakeVideoContext } from "@/context/FakeVideosContext";
import React, { useContext, useEffect } from "react";

function Video() {
  const [videos, PlayingVideo, sections, chosenVideo] =
    useContext(FakeVideoContext);

  return (
    
    <iframe
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
      src={`https://www.youtube.com/embed/${PlayingVideo.url}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
      allowFullScreen
    ></iframe>
  );
}

export default Video;
