"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import VideosBar from "./VideosBar";
import ContentBar from "./ContentBar";
import SideBarDiv from "../Landing Page/SideBarDiv";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import VideosDB from "@/Queries/VideosDB";
import sectionsDB from "@/Queries/sectionsDB";

function Index() {
  const videos = VideosDB();
  const sections = sectionsDB();
  const [SideBar, setSideBar] = useState(false);
  const [PlayingVideo, setPlayingVideo] = useState();
  const [IsVideosBar, setIsVideosBar] = useState(false);

  useEffect(() => {
    if (videos !== "isLoading") {
      setPlayingVideo(videos[0]);
    }
  }, [videos]);

  function chosenVideo(e: any) {
    if (videos !== "isLoading") {
      const clickedVideo = videos.find((video: any) => video.id === e);
      if (clickedVideo) {
        setPlayingVideo(clickedVideo);
      }
      setIsVideosBar(!IsVideosBar);
    }
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
      {videos !== "isLoading" || sections !== "isLoading" ? (
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
                videos,
                PlayingVideo,
                sections,
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
        <div>isLoading</div>
      )}
    </div>
  );
}

export default Index;
