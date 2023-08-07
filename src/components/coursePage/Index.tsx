"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import VideosBar from "./VideosBar";
import ContentBar from "./ContentBar";
import SideBarDiv from "../Landing Page/SideBarDiv";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import Videos from "@/fake data/Videos";
import Sections from "@/fake data/Sections";
import GetData from "@/Queries/GetData"

function Index() {
  const videos = Videos;
  const sections = Sections;

  const Data = GetData("MERN")
  console.log(Data)

  const [SideBar, setSideBar] = useState(false);
  const [PlayingVideo, setPlayingVideo] = useState(videos[0]);
  const [IsVideosBar, setIsVideosBar] = useState(false);

  function chosenVideo(e: any) {
    const clickedVideo = videos.find((video) => video.video_id === e);
    if (clickedVideo) {
      setPlayingVideo(clickedVideo);
    }
    setIsVideosBar(!IsVideosBar);
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
    <div className="course-lighter-bg-color max-[1000px]:h-full">
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
            videos,
            PlayingVideo,
            sections,
            chosenVideo,
            SideBar,
            showVideosBar,
            setPlayingVideo,
            showSideBar
          ]}
        >
          <VideosBar IsVideosBar={IsVideosBar} />
          <ContentBar />
        </FakeVideoContext.Provider>
      </div>
    </div>
  );
}

export default Index;
