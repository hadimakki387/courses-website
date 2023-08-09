"use client";

import React, { useEffect, useState } from "react";
import SideBarDiv from "../Landing Page/SideBarDiv";
import NavBar from "../NavBar";
import Footer from "../Landing Page/footer/Footer";
import ProfileActivity from "./profile components/ProfileActivity";
import ProfileHeader from "./profile components/ProfileHeader";
import ProfileeditInfoSection from "./profile components/ProfileeditInfoSection";
import { ProfileContext } from "@/context/ProfileContext";
import fetchData from "@/Queries/GetData";
import LoadingScreen from "../loading/LoadingScreen";

function Index() {
  const [SideBar, setSideBar] = useState(false);
  const [IsEditInfo, setIsEditInfo] = useState(false);
  const [editPersonalInfo, seteditPersonalInfo] = useState({}); //this is the data for the editProfile
  const [data, setData]: any = useState();

  useEffect(() => {
    fetchData("profile", setData);
  }, []);

  const showSideBar = () => {
    setSideBar(!SideBar);
  };
  const ShowEditInfo = () => {
    setIsEditInfo(!IsEditInfo);
  };
  const editProfile = (e: object) => {
    seteditPersonalInfo(e);
  };
  const planSettings = (e: any) => {
    fetch("http://localhost:3000/api/profile", {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
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
  }, [SideBar]);
  const user = {
    _id: "64d3641bc74b7da3a052a77c",
    name: "hadi mk",
    email: "hmakki389@gmail.com",
    password: "$2b$10$KPnz9WWzqmoOpJWPYI8tfOxWm0f8x9jQeoTtaWpIE/I/XCFsezSyy",
    image: "",
    watchedVideos: ["64d39556c74b7da3a052a813"],
    created_at: "1691575323046",
    __v: { $numberInt: "0" },
  };

  console.log(data);
  return (
    <div >
      {data ? (
        <div
          className={`course-lighter-bg-color text-white bg-red-700 profilePage transform-none${
            data && data.videos.length < 2
              ? "flex flex-col justify-between h-full"
              : ""
          } `}
        >
          <SideBarDiv SideBar={SideBar} setSideBar={setSideBar} />
          <div className="mb-4">
            <NavBar
              showSignIn={() => {
                console.log("hello");
              }}
              showSignUp={() => {
                console.log("hello");
              }}
              showSideBar={showSideBar}
            />
          </div>

          <div className=" w-[60vw] max-[1350px]:w-[85vw] m-auto mb-4">
            <ProfileContext.Provider
              value={[ShowEditInfo, editProfile, planSettings, data,user]}
            >
              <ProfileHeader  />

              {IsEditInfo && <ProfileeditInfoSection />}

              {/* This is the activity section */}
              {data ? (
                <div className="w-full flex flex-col gap-2">
                  <h2 className="text-2xl text-center leading-loose ">
                    My Activity
                  </h2>

                  {data.videos.map((video: any, index: any) => {
                    const watchedVideoActivities = user.watchedVideos.map(
                      (item, index) => {
                        if (video._id === item) {
                          return (
                            <ProfileActivity title={video.title} key={index} />
                          );
                        }
                        return null;
                      }
                    );
                    return watchedVideoActivities; // Return the array of ProfileActivity components
                  })}
                </div>
              ) : (
                <div>loading...</div>
              )}

              {/* This is the activity section */}
            </ProfileContext.Provider>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      ):<div className="w-screen h-screen grid place-items-center"><LoadingScreen/></div>}
    </div>
  );
}

export default Index;
