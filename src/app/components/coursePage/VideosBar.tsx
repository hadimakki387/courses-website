import React from "react";
import TitleOfSideBar from "./TitleOfSideBar";
import SectionCard from "./SectionCard";

function VideosBar() {
  return (
    <div className="flex flex-col gap-4 w-[20vw] bg-[#0d131d] h-screen text-white p-4">
      <TitleOfSideBar />
      <div className="flex flex-col gap-2">
        <SectionCard/>
        <SectionCard/>
        <SectionCard/>
        <SectionCard/>
        <SectionCard/>
        <SectionCard/>
        <SectionCard/>
        <SectionCard/>
        <SectionCard/>
        <SectionCard/>
        <SectionCard/>
      </div>
    </div>
  );
}

export default VideosBar;
