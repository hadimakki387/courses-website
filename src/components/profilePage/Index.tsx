"use client";

import React, { useState } from "react";
import SideBarDiv from "../Landing Page/SideBarDiv";
import NavBar from "../NavBar";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import Footer from "../Landing Page/footer/Footer";
import Image from "next/image";
import ProfileCard from "./profile components/ProfileCard";
import ProfileAndName from "./profile components/ProfileAndName";
import ProfileActivity from "./profile components/ProfileActivity";

function Index() {
  const [SideBar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!SideBar);
  };

  return (
    <div className="course-lighter-bg-color h-full text-white bg-red-700 profilePage">
      <SideBarDiv SideBar={SideBar} setSideBar={setSideBar} />
      <NavBar
        showSignIn={() => {
          console.log("hello");
        }}
        showSignUp={() => {
          console.log("hello");
        }}
        showSideBar={showSideBar}
      />
      <div className=" w-[60%] m-auto mb-4">
        <div className="flex justify-between items-center">
          <ProfileAndName name="studentsxpertbot" time={6} img="user.png" />

          <div className="flex gap-4">
            <ProfileCard
              text="Lessons completed"
              number={100}
              img="xp-lesson.svg"
            />
            <ProfileCard
              text="Total experience"
              number={1453}
              img="xp-level.svg"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">

          <h2 className="text-2xl text-center leading-loose ">My Activity</h2>
          <ProfileActivity title="Title of the Lesson" />
          <ProfileActivity title="Title of the Lesson" />
          <ProfileActivity title="Title of the Lesson" />
          <ProfileActivity title="Title of the Lesson" />
          <ProfileActivity title="Title of the Lesson" />
          <ProfileActivity title="Title of the Lesson" />

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Index;
