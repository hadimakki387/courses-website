"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import VideosBar from "./VideosBar";
import ContentBar from "./ContentBar";
import SideBarDiv from "../Landing Page/SideBarDiv";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import LoadingScreen from "../loading/LoadingScreen";
import UnauthorizedPage from "../unauthorized/UnauthorizedPage";
import {
  useAdminQueryMutation,

  useGetAdminDataQuery,

  useGetUserQuery,
  useMernQueryMutation,
} from "@/api/apiSlice";
import Cookies from "js-cookie";
import { getIdFromCookie } from "@/utils/globalFunctions/global-functions";

function Index() {
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
 

  const {data:user,error:userError} = useGetUserQuery({id:getIdFromCookie()})


  
  const isAuth = true 
  const {
    data: adminData,
    isLoading: getLoading,
    isSuccess: getSuccess,
    isError: getIsError,
    error: getError,
    refetch,
  } = useGetAdminDataQuery({});
  const [mernQuery, { data: postData, isSuccess, isError, isLoading, error }] =
    useMernQueryMutation();

  useEffect(() => {
    if (adminData?.videos && adminData?.videos.length > 0) {
      setPlayingVideo(adminData.videos[0]);
    }
  }, [adminData]);

  function chosenVideo(e: any) {
    const clickedVideo = adminData.videos.find((video: any) => video.videoId === e);
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

  const isPlanFound = adminData?.plans.find((plan:any)=>plan._id ===user?.plan)

  const isVip = user?.plan && isPlanFound ?true:false
  console.log(user)

  useEffect(() => {
    
    if (PlayingVideo._id && user  ) {
      
      if(PlayingVideo.isFree || isVip){
        mernQuery({
        PlayingVideo: PlayingVideo,
        user: user?._id,
      });
      }
      
    }
  }, [PlayingVideo, user]);



  return (
    <div
      className={`course-lighter-bg-color max-[1000px]:h-full ${
        getSuccess ? "" : "h-screen"
      }`}
    >
      {!getLoading && adminData ? (
        <>
          <div className="fixed z-30 w-full course-lighter-bg-color">
            <NavBar
              showSignIn={() => {}}
              showSignUp={() => {}}
              showSideBar={showSideBar}
            />
          </div>

          <div className="flex h-full pt-16 ">
            <SideBarDiv setSideBar={setSideBar} SideBar={SideBar} />

            <FakeVideoContext.Provider
              value={[
                adminData.videos,
                PlayingVideo,
                adminData.sections,
                chosenVideo,
                SideBar,
                showVideosBar,
                setPlayingVideo,
                showSideBar,
                isVip,
              ]}
            >
              <VideosBar IsVideosBar={IsVideosBar} />
              <ContentBar />
            </FakeVideoContext.Provider>
          </div>
        </>
      ) : getLoading ? (
        <div className="grid place-items-center h-full ">
          <LoadingScreen />
        </div>
      ) : null}
    </div>
  );
}

export default Index;
