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
    if (signIn || signUp) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("pr-[17px]");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("pr-[17px]");
    }
  }, [signIn, signUp]);
  return (
    <>

    {/* the signIn/Up windows */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2  text-white z-30 ${
          signIn ? "-translate-y-[50%]" : "-translate-y-[-100%]"
        } transition-all duration-300`}
      >
        <ClickAwayListener
          onClickAway={() => {
            setSignIn(false);
          }}
        >
          <SignIn showSignIn={showSignIn} />
        </ClickAwayListener>
      </div>
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2  text-white z-30 ${
          signUp ? "-translate-y-[50%]" : "-translate-y-[-100%]"
        } transition-all duration-300`}
      >
        <ClickAwayListener
          onClickAway={() => {
            setSignUp(false);
          }}
        >
          <SignUp showSignUp={showSignUp} />
        </ClickAwayListener>
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
