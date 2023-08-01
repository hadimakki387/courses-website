"use client";

import { useState } from "react";
import Header from "./components/Landing Page/Header";
import WebsiteCourses from "./components/Landing Page/WebsiteCourses";
import Footer from "./components/Landing Page/footer/Footer";
import Plans from "./components/Landing Page/plans/Plans";
import SignIn from "./components/Landing Page/signIn/Up/signIn/SignIn";
import NavBar from "./components/NavBar";

export default function Home() {
  const [signIn, setSignIn] = useState(false);

  const showSignIn = () => {
    setSignIn(!signIn);
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
      <div className="relative main">
        <NavBar showSignIn={showSignIn} />

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
