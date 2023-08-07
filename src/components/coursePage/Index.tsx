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
 
  
  const Data:any = GetData("MERN")

  const [SideBar, setSideBar] = useState(false);
  const [PlayingVideo, setPlayingVideo] = useState([]);
  const [IsVideosBar, setIsVideosBar] = useState(false);

  useEffect(()=>{
    if(Data.videos){
      setPlayingVideo(Data.videos[0])
    }
  },[Data])

  function chosenVideo(e: any) {
    const clickedVideo = Data.videos.find((video:any) => video.videoId === e);
    if (clickedVideo) {
      setPlayingVideo(clickedVideo);
    }
    setIsVideosBar(!IsVideosBar);
    console.log(e)
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
      {Data.videos && Data.sections ?<>
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
            showSideBar
          ]}
        >
          <VideosBar IsVideosBar={IsVideosBar} />
          <ContentBar />
        </FakeVideoContext.Provider>
      </div>
      </>:<div>Loading</div>}
      
    </div>
  );
}

export default Index;
