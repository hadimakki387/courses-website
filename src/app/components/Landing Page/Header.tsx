import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="text-white h-[85vh] flex justify-between items-center relative Header mx-24">
      <div className=" flex flex-col text-7xl font-extrabold">
        <span className="pb-3">Your Path</span>
        <span className="pb-3">to MERN Mastery </span>
        <span className="startsHere">Starts Here...</span>
      </div>
      <Image
        src={"home-banner-illustration.svg"}
        alt="illustration"
        width={1000}
        height={1000}
        className="absolute -z-10 right-0 w-[800px]"
      />
    </div>
  );
}

export default Header;
