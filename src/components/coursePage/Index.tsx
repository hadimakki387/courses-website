"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import VideosBar from "./VideosBar";
import ContentBar from "./ContentBar";
import SideBarDiv from "../Landing Page/SideBarDiv";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import LoadingScreen from "../loading/LoadingScreen";
import GetData from "@/Queries/GetData";

function Index() {
  const [Data, setData]: any = useState([]);
  const [num, setNum] = useState(0);
  const [SideBar, setSideBar] = useState(false);
  const [PlayingVideo, setPlayingVideo]: any = useState({
    _id: { $oid: "64d17875da06a52d0b00c485" },
    title: "1 Introduction to HTML",
    url: "Dw_tj65FGf0",
    duration: { mins: 10, secs: 54 },
    sectionID: "a64c6d9b-108f-4de6-8130-5caf8b129ac5",
    videoId: 1,
    __v: { $numberInt: "0" },
  });

  const [IsVideosBar, setIsVideosBar] = useState(false);

  useEffect(() => {
    GetData("admin", setData);
  }, [num]);

  function chosenVideo(e: any) {
    const clickedVideo = Data.videos.find((video: any) => video.videoId === e);
    if (clickedVideo) {
      setPlayingVideo(clickedVideo);
    }
    setIsVideosBar(!IsVideosBar);
    console.log(e);
  }

  const showSideBar = () => {
    setSideBar(!SideBar);
  };

  const showVideosBar = () => {
    setIsVideosBar(!IsVideosBar);
  };

  useEffect(() => {
    const isWindows = navigator.platform.includes("Win");

    if (SideBar) {
      document.body.classList.add("overflow-hidden");
      if (isWindows) {
        document.body.classList.add("pr-[17px]");
      }
    } else {
      document.body.classList.remove("overflow-hidden");
      if (isWindows) {
        document.body.classList.remove("pr-[17px]");
      }
    }
  }, [SideBar]);

  return (
    <div
      className={`course-lighter-bg-color max-[1000px]:h-full ${
        Data.videos && Data.sections ? "" : "h-screen"
      }`}
    >
      {Data.videos && Data.sections ? (
        <>
          <NavBar
            showSignIn={() => {
              console.log("hello");
            }}
            showSignUp={() => {
              console.log("hello");
            }}
            showSideBar={showSideBar}
          />
          <div className="flex h-full ">
            <SideBarDiv setSideBar={setSideBar} SideBar={SideBar} />

            <FakeVideoContext.Provider
              value={[
                Data.videos,
                PlayingVideo,
                Data.sections,
                chosenVideo,
                SideBar,
                showVideosBar,
                setPlayingVideo,
                showSideBar,
              ]}
            >
              <VideosBar IsVideosBar={IsVideosBar} />
              <ContentBar />
            </FakeVideoContext.Provider>
          </div>
        </>
      ) : (
        <div className="grid place-items-center h-full ">
          <LoadingScreen />
        </div>
      )}
    </div>
  );
}

export default Index;
