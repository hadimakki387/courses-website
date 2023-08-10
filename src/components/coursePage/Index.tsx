"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import VideosBar from "./VideosBar";
import ContentBar from "./ContentBar";
import SideBarDiv from "../Landing Page/SideBarDiv";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import LoadingScreen from "../loading/LoadingScreen";
import GetData from "@/Queries/GetData";
import SendData from "@/Queries/SendData";

function Index() {
  const [Data, setData]: any = useState([]);
  const [num, setNum] = useState(0);
  const [SideBar, setSideBar] = useState(false);
  const [PlayingVideo, setPlayingVideo]: any = useState({
    _id: "",
    title: "",
    url: "",
    duration: { mins: 0, secs: 0 },
    sectionID: "",
    videoId: 1,
    __v: { $numberInt: "0" },
  });
  const [IsVideosBar, setIsVideosBar] = useState(false);
  const user = {
    _id: "64d3f9de67e40d586b1b1626",
    name: "hadi mk",
    email: "hmakki389@gmail.com",
    password: "$2b$10$KPnz9WWzqmoOpJWPYI8tfOxWm0f8x9jQeoTtaWpIE/I/XCFsezSyy",
    image: "",
    watchedVideos: [
      "64d48bb83f6a2c064f164942",
      "64d48bb83f6a2c064f164942",
      "64d48bb83f6a2c064f164942",
      "64d48bb83f6a2c064f164942",
    ],
    created_at: "1691575323046",
    plan: "",
    __v: { $numberInt: "0" },
  };

  useEffect(() => {
    if (PlayingVideo._id) {
      SendData(
        "MERN",
        {
          PlayingVideo: PlayingVideo,
          user: user,
          toDo: "AddWatchedVideos",
        },
        (res: any) => {}
      );
      console.log(PlayingVideo);
    }
  }, [PlayingVideo]);

  useEffect(() => {
    GetData("admin", setData);
  }, [num]);

  useEffect(() => {
    if (Data.videos && Data.videos.length > 0) {
      setPlayingVideo(Data.videos[0]);
    }
    console.log("data fetced");
  }, [Data]);

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
