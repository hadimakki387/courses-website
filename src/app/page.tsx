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
import { signIn, useSession } from "next-auth/react";

import ClickAwayListener from "react-click-away-listener";

export default function Home() {
  const [signIn1, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [SideBar, setSideBar] = useState(false);
  const [signInData, setSignInData] = useState({});
  const [signUpData, setSignUpData] = useState({});
  let userExist: any;
  const [flash, setFlash] = useState("");

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

      const data = await res.json();

      userExist = data;
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
    if (signIn1) {
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

    if (signIn1 || signUp || SideBar) {
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
  }, [signIn1, signUp, SideBar]);

  const getSignInData = async (e: any) => {
    setSignInData(e);
    // CreateUser(e);

    await signIn("credentials", {
      signInEmail: e.signInEmail,
      UserPassword: e.UserPassword,
    });
  };
  const getSignUpData = async (e: any) => {
    setSignUpData(e);
    await CreateUser(e);
    if (userExist === false) {
      await signIn("credentials", {
        signInEmail: e.signUpEmail,
        UserPassword: e.UserPassword,
      });
    } else {
      alert("user exict");
    }
  };





 

  return (
    <>
      {/* the signIn/Up windows */}
      <SignInUpNavs
        signIn={signIn1}
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
          signIn1 || signUp || SideBar ? "brightness-50 " : ""
        } transition-all duration-300`}
      >
        <div
          className={`fixed bottom-4 right-4 bg-sky-600 text-white p-4 ${
            flash === "LoggedIn" ? "translate-y-0" : "translate-y-[200%]"
          }`}
        >
          Your Logged In!
        </div>
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
