import React, { useContext, useState } from "react";
import Video from "../Video";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import NextVideoCard from "./NextVideoCard";
import Link from "next/link";

function ContentBar() {
  const aspectRatio = 9 / 16;
  const [
    videos,
    PlayingVideo,
    sections,
    chosenVideo,
    SideBar,
    showVideosBar,
    setPlayingVideo,
    showSideBar,
    isVip,
  ] = useContext(FakeVideoContext);

  const [ratio, setRatio] = useState(100 * aspectRatio);

  return (
    <div
      className={`course-lighter-bg-color space-y-4 w-full min-[1300px]:ml-[23vw] ${
        SideBar ? "brightness-50 transition-all duration-300" : ""
      }`}
    >
      {PlayingVideo.isFree || isVip ? (
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
      ) : (
        <div
          className={`text-white flex flex-col gap-4 justify-center items-center h-[${ratio}rem]`}
          style={{
            height: `${100 * aspectRatio}%`,
          }}
        >
          <div className="text-xl">
            You cant watch this video unless you are a VIP member
          </div>
          <div>
            You can change you subscribtion in your{" "}
            <Link
              href={"/profile"}
              className="bg-sky-600 px-4 py-[6px] rounded-md hover:bg-sky-500 transition-all duration-300"
            >
              profile
            </Link>
          </div>
        </div>
      )}

      <div
        onClick={showVideosBar}
        className="min-[1300px]:hidden max-[450px]:mx-8 course-lighter-bg-divs flex items-center text-white mx-16 py-3 px-8 text-center rounded-lg"
      >
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
      <NextVideoCard />
    </div>
  );
}

export default ContentBar;
