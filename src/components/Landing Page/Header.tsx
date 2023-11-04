"use client"
import { ToastType } from "@/constants";
import { generateToast } from "@/utils/globalFunctions/global-functions";
import Image from "next/image";
import React from "react";

function Header() {
  
  return (
    <div className="text-white h-[85vh] flex justify-between items-center  relative Header mx-24 max-[990px]:mx-0 max-[990px]:items-start max-[990px]:mt-12 max-[990px]:h-[50vh]">
      <div className=" flex flex-col text-7xl z-10 font-extrabold max-[990px]:text-center max-[990px]:m-auto max-[890px]:text-5xl max-[452px]:text-4xl">
        <span className="pb-3">Your Path</span>
        <span className="pb-3">to MERN Mastery </span>
        <span className="startsHere">Starts Here...</span>
      </div>
      <Image
        src={"home-banner-illustration.svg"}
        alt="illustration"
        width={1000}
        height={1000}
        className="absolute transition-all duration-150  right-0 w-[800px] max-[1750px]:w-[700px] max-[1650px]:w-[500px] max-[1650px]:opacity-40 max-[990px]:hidden"
      />
    </div>
  );
}

export default Header;
