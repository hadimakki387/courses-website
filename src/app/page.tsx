"use client";
import Header from "@/components/Landing Page/Header";
import SideBarDiv from "@/components/Landing Page/SideBarDiv";
import SignInUpNavs from "@/components/Landing Page/SignInUpNavs";
import WebsiteCourses from "@/components/Landing Page/WebsiteCourses";
import Footer from "@/components/Landing Page/footer/Footer";
import Plans from "@/components/Landing Page/plans/Plans";
import SignIn from "@/components/Landing Page/signInUp/In/SignIn";
import SignUp from "@/components/Landing Page/signInUp/Up/SignUp";
import NavBar from "@/components/NavBar";
import { create } from "domain";
import { useState, useEffect, HtmlHTMLAttributes } from "react";

import ClickAwayListener from "react-click-away-listener";

export default function Home() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [SideBar, setSideBar] = useState(false);
  const [signInData, setSignInData] = useState({});
  const [signUpData, setSignUpData] = useState({});

  async function CreateUser(param: any) {
    try {
      const res = await fetch("http://localhost:3000/api/landingPage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const responseJson = await res.json();
      console.log(responseJson);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  const showSignIn = () => {
    if (signUp) {
      setSignUp(false);
    }
    setSignIn((prevSignIn) => !prevSignIn);
  };

  const showSignUp = () => {
    if (signIn) {
      setSignIn(false);
    }
    setSignUp((prevSignUp) => !prevSignUp);
  };

  const showSideBar = () => {
    setSideBar(!SideBar);
  };

  useEffect(() => {
    // Check if the user is on a Windows platform
    const isWindows = navigator.platform.includes("Win");

    if (signIn || signUp || SideBar) {
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
  }, [signIn, signUp, SideBar]);

  const getSignInData = (e: any) => {
    setSignInData(e);
    CreateUser(e);
  };
  const getSignUpData = (e: any) => {
    setSignUpData(e);
    console.log(e);
    CreateUser(e);
  };

  return (
    <>
      {/* the signIn/Up windows */}
      <SignInUpNavs
        signIn={signIn}
        signUp={signUp}
        showSignIn={showSignIn}
        showSignUp={showSignUp}
        getSignInData={getSignInData}
        getSignUpData={getSignUpData}
      />

      <SideBarDiv setSideBar={setSideBar} SideBar={SideBar} />

      {/* the signIn/Up windows */}

      <div
        className={`relative main ${
          signIn || signUp || SideBar ? "brightness-50 " : ""
        } transition-all duration-300`}
      >
        <NavBar
          showSignIn={showSignIn}
          showSignUp={showSignUp}
          showSideBar={showSideBar}
        />

        <div className="mx-[13%] max-[990px]:mx-[5%] max-[500px]:mx-2">
          <Header />
          <WebsiteCourses />
          <Plans />
        </div>
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </>
  );
}
