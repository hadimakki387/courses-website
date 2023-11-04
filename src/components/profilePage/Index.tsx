"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
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

import UnauthorizedPage from "../unauthorized/UnauthorizedPage";
import {
  useGetProfileDataQuery,
  useGetUserQuery,
  useProfileQueryMutation,
  useSendPaymentMutation,
} from "@/api/apiSlice";
import {
  generateToast,
  updateToast,
} from "@/utils/globalFunctions/global-functions";
import { ToastType } from "@/constants";

function Index() {
  const [SideBar, setSideBar] = useState(false);
  const [IsEditInfo, setIsEditInfo] = useState(false);

  const { data, isSuccess, isLoading, isError, error, refetch } =
    useGetProfileDataQuery({});

  const [
    sendPayment,
    { data: PaymentRes, isSuccess: paymentSucces, error: PaymentError },
  ] = useSendPaymentMutation();

  const { data: user, isLoading: userLoading } = useGetUserQuery({});

  const params = useSearchParams();
  const param = params.get("selectPlan");
  useEffect(() => {
    if (param === "true") {
      setIsEditInfo(true);
    }
  }, []);

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
      payerID: user._id,
    };

    const id = generateToast({
      message: "Sending Your Payment",
      isLoading: true,
      toastType: ToastType.default,
    });
    sendPayment({ data: data })
      .unwrap()
      .then(() => {
        updateToast(id, "Your Payment has been sent", {
          isLoading: false,
          toastType: ToastType.success,
          duration: 2000,
        });
        setIsEditInfo(false)
      })
      .catch((err) => {
        updateToast(id, `${err.data.message}`, {
          isLoading: false,
          toastType: ToastType.error,
          duration: 2000,
        });
        setIsEditInfo(false)
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

  return (
    <div>
      {isSuccess && !userLoading ? (
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
              value={[
                ShowEditInfo,
                editProfile,
                planSettings,
                data,
                user,
                PaymentError,
              ]}
            >
              <ProfileHeader />

              {IsEditInfo && <ProfileeditInfoSection />}

              {/* This is the activity section */}

              <h2 className="text-2xl text-center leading-loose mb-2">
                My Activity
              </h2>
              {data.videos ? (
                <div
                  className={`w-full flex flex-col gap-2 ${
                    user.watchedVideos.length > 10 &&
                    "overflow-y-scroll h-[50vh]"
                  }`}
                >
                  {data.videos.map((video: any, index: any) => {
                    const watchedVideoActivities = user.watchedVideos.map(
                      (item: any, index: any) => {
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
              ) : user.watchedVideos.length === 0 || !user.watchedVideos ? (
                <div>Didint watch any video yet</div>
              ) : userLoading ? (
                <div>loading...</div>
              ) : null}

              {/* This is the activity section */}
            </ProfileContext.Provider>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      ) : (userLoading && !user) || (isLoading && !data) ? (
        <div className="w-screen h-screen grid place-items-center">
          <LoadingScreen />
        </div>
      ) : null}
    </div>
  );
}

export default Index;
