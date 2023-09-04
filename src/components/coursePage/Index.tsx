"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import VideosBar from "./VideosBar";
import ContentBar from "./ContentBar";
import SideBarDiv from "../Landing Page/SideBarDiv";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import LoadingScreen from "../loading/LoadingScreen";
import { useSession } from "next-auth/react";
import UnauthorizedPage from "../unauthorized/UnauthorizedPage";
import {
  useAdminQueryMutation,
  useGetAdminDataQuery,
  useMernQueryMutation,
} from "@/api/apiSlice";

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
  const session = useSession();
  const user = session.data?.user;
  const isAuth = session.status === "authenticated" ? true : false;
  const {
    data: Data,
    isLoading: getLoading,
    isSuccess: getSuccess,
    isError: getIsError,
    error: getError,
    refetch,
  } = useGetAdminDataQuery({});
  const [mernQuery, { data: postData, isSuccess, isError, isLoading, error }] =
    useMernQueryMutation();

  useEffect(() => {
    if (Data?.videos && Data?.videos.length > 0) {
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

  const isVip = Data?.users.find((use: any) => use._id === user?.id).plan
    ? true
    : false;

  useEffect(() => {
    if (PlayingVideo._id && user  ) {
      if(PlayingVideo.isFree || isVip){
        mernQuery({
        PlayingVideo: PlayingVideo,
        user: user?.id,
        toDo: "AddWatchedVideos",
      });
      }
      
    }
  }, [PlayingVideo, user]);

  console.log(getLoading)
  console.log(Data)
  console.log(isAuth)

  return (
    <div
      className={`course-lighter-bg-color max-[1000px]:h-full ${
        getSuccess ? "" : "h-screen"
      }`}
    >
      {!getLoading && Data ? (
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
                Data.videos,
                PlayingVideo,
                Data.sections,
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
      ) : !getLoading && !isAuth ? (
        <UnauthorizedPage />
      ) : null}
    </div>
  );
}

export default Index;
