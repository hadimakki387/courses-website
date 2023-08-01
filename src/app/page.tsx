"use client";
import { useState ,useEffect} from "react";
import Header from "./components/Landing Page/Header";
import WebsiteCourses from "./components/Landing Page/WebsiteCourses";
import Footer from "./components/Landing Page/footer/Footer";
import Plans from "./components/Landing Page/plans/Plans";
import NavBar from "./components/NavBar";
import SignIn from "./components/Landing Page/signInUp/In/SignIn";
import SignUp from "./components/Landing Page/signInUp/Up/SignUp";
import ClickAwayListener from "react-click-away-listener";

export default function Home() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

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

  useEffect(() => {
    // Check if the user is on a Windows platform
    const isWindows = navigator.platform.includes("Win");

    if (signIn || signUp) {
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
  }, [signIn, signUp]);
  return (
    <>

    {/* the signIn/Up windows */}
   
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2  text-white z-30 ${
          signIn ? "min-[500px]:-translate-y-[50%] max-[500px]:-translate-y-[0]" : "-translate-y-[-100%]"
        } transition-all duration-300 max-[1050px]:w-[70vw] max-[650px]:w-[90vw] max-[500px]:bottom-0  max-[500px]:w-screen`}
      >
        
          <SignIn showSignIn={showSignIn} />
        
      </div>
      
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2  text-white z-30 ${
          signUp ? "min-[500px]:-translate-y-[50%] max-[500px]:-translate-y-[0]" : "-translate-y-[-100%]"
        } transition-all duration-300 max-[1050px]:w-[70vw] max-[650px]:w-[90vw] max-[500px]:bottom-0  max-[500px]:w-screen`}
      >
       
          <SignUp showSignUp={showSignUp} />
       
      </div>
      {/* the signIn/Up windows */}

      <div
        className={`relative main ${
          signIn || signUp ? "brightness-50 " : ""
        } transition-all duration-300`}
      >
        <NavBar showSignIn={showSignIn} showSignUp={showSignUp} />

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
