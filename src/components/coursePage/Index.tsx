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
import { useSession } from "next-auth/react";
import { Session } from "inspector";
import Link from "next/link";
import UnauthorizedPage from "../unauthorized/UnauthorizedPage";

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
  const [res, setRes] = useState();
  const session = useSession();
  const user = session.data?.user;
  const isAuth = session.status === "authenticated" ? true : false;
  const [ loading ,setLoading ] = useState(true)

  useEffect(() => {
    if (PlayingVideo._id && user) {
      SendData(
        "MERN",
        {
          PlayingVideo: PlayingVideo,
          user: user?.id,
          toDo: "AddWatchedVideos",
        },
        (res: any) => {}
      );
    }
  }, [PlayingVideo, user]);

  useEffect(() => {
    GetData("admin", setData);
  }, [num]);

  useEffect(() => {
    if (Data.videos && Data.videos.length > 0) {
      setPlayingVideo(Data.videos[0]);
    }
  }, [Data]);

  function chosenVideo(e: any) {
    const clickedVideo = Data.videos.find((video: any) => video.videoId === e);
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

  useEffect(()=>{
    if(Data.videos && Data.sections && user && isAuth ){
      setLoading(false)
    }
  },[Data,user,isAuth])
  useEffect(()=>{
    setTimeout(()=>{
      if(!loading){
        setLoading(false)
      }
    },60000)
  },[])

  const isVip = Data.users?.find((use: any) => use._id === user?.id).plan?true:false;

 

 

  return (
    <div
      className={`course-lighter-bg-color max-[1000px]:h-full ${
        Data.videos && Data.sections ? "" : "h-screen"
      }`}
    >
      {!loading? (
        <>
          <NavBar
            showSignIn={() => {}}
            showSignUp={() => {}}
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
                isVip
              ]}
            >
              <VideosBar IsVideosBar={IsVideosBar} />
              <ContentBar />
            </FakeVideoContext.Provider>
          </div>
        </>
      ) : loading? (
        <div className="grid place-items-center h-full ">
          <LoadingScreen />
        </div>
      ) : !loading && !isAuth?(
        <UnauthorizedPage/>
      ):null}
    </div>
  );
}

export default Index;
