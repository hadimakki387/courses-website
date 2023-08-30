import React, { useState, useContext } from "react";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import YouTube from "react-youtube";

function Video() {
  const [
    videos,
    PlayingVideo,
    sections,
    chosenVideo,
    SideBar,
    showVideosBar,
    setPlayingVideo,
  ] = useContext(FakeVideoContext);

  const [showNextVideoDialog, setShowNextVideoDialog] = useState(false); // Add state for the dialog

  const nextVideo = () => {
    const currentIndex = videos.findIndex(
      (video: any) => video.videoId === PlayingVideo.videoId
    );
    const nextIndex = (currentIndex + 1) % videos.length;
    setPlayingVideo(videos[nextIndex]);
  };



  const handleVideoEnd = () => {
    setShowNextVideoDialog(true);
  };

  const handleNextVideoYes = () => {
    nextVideo();
    setShowNextVideoDialog(false);
  };

  const handleNextVideoNo = () => {
    setShowNextVideoDialog(false);
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  console.log(PlayingVideo)

  return (
    <>
      <div
        className={` scale-0 ${
          showNextVideoDialog && "scale-100"
        }  absolute course-page-bg rounded-md w-[50%] h-[50%] py-12 z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-bold flex flex-col justify-center items-center gap-8 transition-all duration-200 max-[780px]:w-[80%] max-[780px]:h-[80%] max-[460px]:text-xl`}
      >
        <div>next Video?</div>
        <div className="flex justify-center item-center gap-8 text-xl max-[460px]:text-sm">
        <button
            onClick={handleNextVideoNo}
            className="course-lighter-bg-divs px-6 py-3 rounded-md "
          >
            No
          </button>
          <button
            onClick={handleNextVideoYes}
            className="course-lighter-bg-divs px-6 py-3 rounded-md"
          >
            Next
          </button>

        </div>
      </div>

      {!PlayingVideo.type?<YouTube
        videoId={PlayingVideo.url}
        opts={opts}
        onEnd={handleVideoEnd}
        iframeClassName={"video-container"}
      />:<iframe src={`https://www.dailymotion.com/embed/video/${PlayingVideo.url}`} className="video-container"  allowFullScreen></iframe>
}
    </>
  );
}

export default Video;
