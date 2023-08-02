"use client";
import React from "react";
import VideosBar from "../components/coursePage/VideosBar";
import NavBar from "../components/NavBar";
import ContentBar from "../components/coursePage/ContentBar";
import { FakeVideoContext } from "../context/FakeVideosContext";

function page() {
  const videos = [
    {
      video_id: 1,
      title: "Introduction to MERN Stack",
      url: "https://example.com/mern_intro.mp4",
      section_id: 1,
    },
    {
      video_id: 2,
      title: "Setting Up MongoDB",
      url: "https://example.com/mongodb_setup.mp4",
      section_id: 2,
    },
    {
      video_id: 3,
      title: "React Components",
      url: "https://example.com/react_components.mp4",
      section_id: 1,
    },
    {
      video_id: 4,
      title: "Express Routing",
      url: "https://example.com/express_routing.mp4",
      section_id: 3,
    },
  ];

  const sections = [
    {
      section_id: 1,
      section_name: "Introduction To HTML",
    },
    {
      section_id: 2,
      section_name: "Intermediat HTML",
    },
    {
      section_id: 3,
      section_name: "Introduction To Css",
    },
  ];
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
        <FakeVideoContext.Provider value={[videos, sections]}>
          <VideosBar />
          <ContentBar />
        </FakeVideoContext.Provider>
      </div>
    </div>
  );
}

export default page;
