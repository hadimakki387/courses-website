"use client";

import { useState } from "react";
import Header from "./components/Landing Page/Header";
import WebsiteCourses from "./components/Landing Page/WebsiteCourses";
import Footer from "./components/Landing Page/footer/Footer";
import Plans from "./components/Landing Page/plans/Plans";

import NavBar from "./components/NavBar";
import SignIn from "./components/Landing Page/signInUp/In/SignIn";
import SignUp from "./components/Landing Page/signInUp/Up/SignUp";

export default function Home() {
  const [signIn, setSignIn] = useState(false);

  const showSignIn = () => {
    if (signUp) {
      setSignUp(!SignUp);
      setSignIn(!signIn);
    }
    setSignIn(!signIn);
  };

  const [signUp, setSignUp] = useState(false);

  const showSignUp = () => {
    if (signIn) {
      setSignIn(!SignIn);
      setSignUp(!signUp);
    }
    setSignUp(!signUp);
  };

  return (
    <>
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2  text-white z-30 ${
          signIn ? "-translate-y-[50%]" : "-translate-y-[-100%]"
        } transition-all duration-300`}
      >
        <SignIn showSignIn={showSignIn} />
      </div>
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2  text-white z-30 ${
          signUp ? "-translate-y-[50%]" : "-translate-y-[-100%]"
        } transition-all duration-300`}
      >
        <SignUp showSignUp={showSignUp} />
      </div>
      <div className="relative main">
        <NavBar showSignIn={showSignIn} showSignUp={showSignUp} />

        <div className="mx-64">
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
