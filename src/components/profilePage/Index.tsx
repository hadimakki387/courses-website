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
import SendData from "@/Queries/SendData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

function Index() {
  const [SideBar, setSideBar] = useState(false);
  const [IsEditInfo, setIsEditInfo] = useState(false);
  const [data, setData]: any = useState();
  const [subRes, setSubRes]: any = useState();
  const user = {
    _id: "64d3641bc74b7da3a052a77c",
    name: "hadi mk",
    email: "hmakki389@gmail.com",
    password: "$2b$10$KPnz9WWzqmoOpJWPYI8tfOxWm0f8x9jQeoTtaWpIE/I/XCFsezSyy",
    image: "",
    watchedVideos: [
      "64d39556c74b7da3a052a813",
      "64d39556c74b7da3a052a813",
      "64d39556c74b7da3a052a813",
      "64d39556c74b7da3a052a813",
    ],
    created_at: "1691575323046",
    plan: "",
    __v: { $numberInt: "0" },
  };

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
    console.log(e)
  };
  const planSettings = async (e: any) => {
    const data = {
      ...e,
      payerID: user._id,
    };
    console.log(data)
    SendData("profile", data, setSubRes);
  };

  useEffect(() => {
    if (subRes === "saved") {
      setIsEditInfo(false);
      setTimeout(()=>{
        setSubRes("")
      },5000)
    }
  }, [subRes]);

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

  return (
    <div>
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
              value={[ShowEditInfo, editProfile, planSettings, data, user]}
            >
              <ProfileHeader />

              {IsEditInfo && <ProfileeditInfoSection />}
              {subRes === "saved" ? (
                <div className="w-full bg-green-700  p-4 flex justify-center items-center gap-4 rounded-md mt-4">
                  Your Request Has Been Recieved{" "}
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="border border-white p-2 rounded-full"
                  />
                </div>
              ) : subRes === "error" ? (
                <div className="w-full bg-red-800  p-4 flex justify-center items-center gap-4 rounded-md mt-4">
                  Your Request Has Been Declined Please Try Again Later{" "}
                  <FontAwesomeIcon
                    icon={faX}
                    className="border border-white p-2 rounded-full"
                  />
                </div>
              ) : null}

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
      ) : (
        <div className="w-screen h-screen grid place-items-center">
          <LoadingScreen />
        </div>
      )}
    </div>
  );
}

export default Index;
