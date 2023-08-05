"use client";

import React, { useEffect, useState } from "react";
import SideBarDiv from "../Landing Page/SideBarDiv";
import NavBar from "../NavBar";
import Footer from "../Landing Page/footer/Footer";
import ProfileActivity from "./profile components/ProfileActivity";
import ProfileHeader from "./profile components/ProfileHeader";
import ProfileeditInfoSection from "./profile components/ProfileeditInfoSection";
import { ProfileContext } from "@/context/ProfileContext";

function Index() {
  const [SideBar, setSideBar] = useState(false);
  const [IsEditInfo,setIsEditInfo] = useState(false)
  const [editPersonalInfo,seteditPersonalInfo] =useState({}) //this is the data for the editProfile
  const [plan,setPlan] = useState({})//this is the data for the subscriptions

  const showSideBar = () => {
    setSideBar(!SideBar);
  };
  const ShowEditInfo = ()=>{
      setIsEditInfo(!IsEditInfo)
  }
  const editProfile = (e:object)=>{
    seteditPersonalInfo(e)
  }
  const planSettings = (e:any)=>{
      setPlan(e)
  }
  useEffect(() => {
    // Check if the user is on a Windows platform
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
  }, [ SideBar]);

  return (
    <div className="course-lighter-bg-color text-white bg-red-700 profilePage ">
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
        <ProfileContext.Provider value={[ShowEditInfo,editProfile,planSettings]}>

          <ProfileHeader />

          {IsEditInfo&&<ProfileeditInfoSection />}
          

          {/* This is the activity section */}
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-2xl text-center leading-loose ">My Activity</h2>
            <ProfileActivity title="Title of the Lesson" />
            <ProfileActivity title="Title of the Lesson" />
            <ProfileActivity title="Title of the Lesson" />
            <ProfileActivity title="Title of the Lesson" />
            <ProfileActivity title="Title of the Lesson" />
            <ProfileActivity title="Title of the Lesson" />
          </div>
          {/* This is the activity section */}
        </ProfileContext.Provider>
      </div>
      <div>
         <Footer />
      </div>
     
    </div>
  );
}

export default Index;
