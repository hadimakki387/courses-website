import React, { useContext } from "react";
import TitleOfSideBar from "./TitleOfSideBar";
import SectionCard from "./SectionCard";
import { FakeVideoContext } from "@/context/FakeVideosContext";

function VideosBar({ IsVideosBar }: { IsVideosBar: boolean }) {
  const [videos,
    PlayingVideo,
    sections,
    chosenVideo,
    SideBar,
    showVideosBar,
    setPlayingVideo,] =
    useContext(FakeVideoContext);


  return (
    <div
      className={`flex flex-col gap-4 w-[23vw]  text-white p-4 ${
        SideBar ? "brightness-50 transition-all duration-300" : ""
      } max-[1300px]:absolute z-10 course-page-bg transition-all duration-300  ${
        !IsVideosBar ? "max-[1300px]:-translate-x-full " : ""
      } max-[1300px]:w-[100vw] h-full overflow-y-scroll fixed `}
      
    >
      <TitleOfSideBar />
      <div className="flex flex-col gap-2 mb-20">
        {sections.map((section: any, index: any) => {
          return (
            <SectionCard
              video={videos}
              sectionID={section._id}
              sectionName={section.title}
              sectionNum={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default VideosBar;
