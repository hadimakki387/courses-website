"use client";

import React, { useState } from "react";
import NavBar from "../NavBar";
import { FakeVideoContext } from "@/app/context/FakeVideosContext";
import VideosBar from "./VideosBar";
import ContentBar from "./ContentBar";

function Index() {
  const videos = [
    {
      video_id: 1,
      title: "Introduction to HTML",
      url: "https://drive.google.com/file/d/1MnFN26OMJ8MzvAQctAbZGK9ohUNvs2rQ/preview",
      section_id: 1,
    },
    {
      video_id: 2,
      title: "The Anatomy of an HTML Tag",
      url: "https://drive.google.com/file/d/1XZZuPr9T5bQ6I5ak8MChXkkLEJ0_xTgs/preview",
      section_id: 1,
    },
    {
      video_id: 3,
      title: "What we're building - HTML Personal Site",
      url: "https://drive.google.com/file/d/1bB5Km3Um7LLp-3zOHaVHBsfVsP1utYMz/preview",
      section_id: 1,
    },
    {
      video_id: 4,
      title: "What is The HTML Boilerplate",
      url: "https://drive.google.com/file/d/1dzklYz32xY3lxVUMh-Jf2a9mX1uOvY5M/preview",
      section_id: 1,
    },
  ];

  const sections = [
    {
      section_id: 1,
      section_name: "Introduction To HTML",
    },
  ];

  const [PlayingVideo, setPlayingVideo] = useState(
    "https://drive.google.com/file/d/1MnFN26OMJ8MzvAQctAbZGK9ohUNvs2rQ/preview"
  );

  function chosenVideo(e: any) {
    const clickedVideo = videos.find((video) => video.video_id === e);
    if (clickedVideo) {
      setPlayingVideo(clickedVideo.url);
    }
  }


  return (
    <div className="bg-[#0d131d] ">
      <NavBar
        showSignIn={() => {
          console.log("hello");
        }}
        showSignUp={() => {
          console.log("hello");
        }}
        showSideBar={() => {
          console.log("hello");
        }}
      />
      <div className="flex">
        <FakeVideoContext.Provider value={[videos,PlayingVideo, sections, chosenVideo]}>
          <VideosBar />
          <ContentBar />
        </FakeVideoContext.Provider>
      </div>
    </div>
  );
}

export default Index;
