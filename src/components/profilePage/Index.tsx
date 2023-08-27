"use client";

import React, { useEffect, useState } from "react";
import SideBarDiv from "../Landing Page/SideBarDiv";
import NavBar from "../NavBar";
import Footer from "../Landing Page/footer/Footer";
import ProfileActivity from "./profile components/ProfileActivity";
import ProfileHeader from "./profile components/ProfileHeader";
import ProfileeditInfoSection from "./profile components/ProfileeditInfoSection";
import { ProfileContext } from "@/context/ProfileContext";
import LoadingScreen from "../loading/LoadingScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import UnauthorizedPage from "../unauthorized/UnauthorizedPage";
import { useGetProfileDataQuery, useProfileQueryMutation } from "@/api/apiSlice";

function Index() {
  const [SideBar, setSideBar] = useState(false);
  const [IsEditInfo, setIsEditInfo] = useState(false);
  
  const [subRes, setSubRes]: any = useState();
  const session = useSession();

  const isAuth = session.status === "authenticated" ? true : false;
  const authUser = session.data?.user;


  const [user, setUser]:any = useState({
    _id: "",
    watchedVideos: [],
  });
 

  const {data,isSuccess,isLoading,isError,error,refetch} = useGetProfileDataQuery({})
  const [profileQuery,{data:PostData,isSuccess:PostSuccess,error:PostError}] = useProfileQueryMutation()

  useEffect(() => {
    if (authUser) {
      profileQuery({ id: authUser?.id, toDo: "getUser" })
    }
  }, [authUser]);

  console.log("profileData ",PostData)

  const showSideBar = () => {
    setSideBar(!SideBar);
  };
  const ShowEditInfo = () => {
    setIsEditInfo(!IsEditInfo);
  };
  const editProfile = (e: object) => {};
  const planSettings = async (e: any) => {
    const data = {
      ...e,
      payerID: PostData._id,
    };

    profileQuery({ data: data, toDo: "sendPayment" })
  };

  useEffect(() => {
    if (subRes === "saved") {
      setIsEditInfo(false);
      setTimeout(() => {
        setSubRes("");
      }, 5000);
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
      {isSuccess && isAuth && PostData? (
        <div
          className={`course-lighter-bg-color text-white bg-red-700 profilePage transform-none${
            data && data.videos?.length < 2
              ? "flex flex-col justify-between h-full"
              : ""
          } `}
        >
          <SideBarDiv SideBar={SideBar} setSideBar={setSideBar} />
          <div className="mb-4">
            <NavBar
              showSignIn={() => {}}
              showSignUp={() => {}}
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
                    
                    const watchedVideoActivities = PostData.watchedVideos.map(
                      (item:any, index:any) => {
                        console.log("item is", video)
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
      ) : isLoading && !isAuth ? (
        <div className="w-screen h-screen grid place-items-center">
          <LoadingScreen />
        </div>
      ) : !isError && !isAuth && !PostData?.email ?(
        <UnauthorizedPage />
      ):null}
    </div>
  );
}

export default Index;
