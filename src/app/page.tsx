"use client";
import Header from "@/components/Landing Page/Header";
import SideBarDiv from "@/components/Landing Page/SideBarDiv";
import SignInUpNavs from "@/components/Landing Page/SignInUpNavs";
import WebsiteCourses from "@/components/Landing Page/WebsiteCourses";
import Footer from "@/components/Landing Page/footer/Footer";
import Plans from "@/components/Landing Page/plans/Plans";

import NavBar from "@/components/NavBar";
import { useState, useEffect, HtmlHTMLAttributes } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
      const res = await fetch(
        "https://codestream.netlify.app/api/landingPage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(param),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      userExist = data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  
  const router = useRouter();

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

    await signIn("credentials", {
      signInEmail: e.signInEmail,
      UserPassword: e.UserPassword,
      redirect:false
    });
    router.push("MERN-course");
  };

  const getSignUpData = async (e: any) => {
    setSignUpData(e);
    await CreateUser(e);
    if (userExist === false) {
      await signIn("credentials", {
        signInEmail: e.signUpEmail,
        UserPassword: e.UserPassword,
        redirect:false
      });
      router.push("/MERN-course");
    } else {
      setFlash("user Exist");
    }
  };
  console.log(router)

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
        flash={flash}
      />

      <SideBarDiv setSideBar={setSideBar} SideBar={SideBar} />

      {/* the signIn/Up windows */}

      <div
        className={`relative main ${
          signIn1 || signUp || SideBar ? "brightness-50 " : ""
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
          <Plans setSignIn={setSignIn} />
        </div>
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </>
  );
}
