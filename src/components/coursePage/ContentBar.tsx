import React, { useContext } from "react";
import Video from "../Video";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import Image from "next/image";

function ContentBar() {
  const aspectRatio = 9 / 16;
  const [videos, PlayingVideo, sections, chosenVideo, SideBar,showVideosBar] =
  useContext(FakeVideoContext);

  return (
    <div
      className={`course-lighter-bg-color space-y-4 w-full ${
        SideBar ? "brightness-50 transition-all duration-300" : ""
      }`}
    >
      <div
        className="mx-auto flex justify-center relative "
        style={{
          position: "relative",
          paddingBottom: `${100 * aspectRatio}%`, // Set the padding based on aspect ratio
          overflow: "hidden",
        }}
      >
        <Video />
      </div>
      <div onClick={showVideosBar} className="min-[1300px]:hidden max-[450px]:mx-8 course-lighter-bg-divs flex items-center text-white mx-16 py-3 px-8 text-center rounded-lg">
        <div className="">
          <Image
            src={"/toggle-episodes-icon.svg"}
            alt="toggle-episodes-icon"
            height={50}
            width={50}
          />
        </div>
        <div className="w-full font-semibold">Toggle Episode List</div>
      </div>
    </div>
  );
}

export default ContentBar;
