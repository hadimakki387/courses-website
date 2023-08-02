import React, { useContext } from "react";
import TitleOfSideBar from "./TitleOfSideBar";
import SectionCard from "./SectionCard";
import { FakeVideoContext } from "@/app/context/FakeVideosContext";

function VideosBar() {
  const [videos,PlayingVideo, sections, chosenVideo] = useContext(FakeVideoContext);

  return (
    <div className="flex flex-col gap-4 w-[25vw] bg-[#0d131d] h-screen text-white p-4">
      <TitleOfSideBar />
      <div className="flex flex-col gap-2">
        {sections.map((section: any, index: any) => {
          return (
            <SectionCard
              video={videos}
              sectionID={section.section_id}
              sectionName={section.section_name}
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
