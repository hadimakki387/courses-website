import React, { useContext } from "react";
import Video from "../Video";
import { FakeVideoContext } from "@/app/context/FakeVideosContext";

function ContentBar() {
  const aspectRatio = 9 / 16;
  const [videos,PlayingVideo, sections, chosenVideo,SideBar] = useContext(FakeVideoContext);

  return (
    <div className={`bg-[#151f32] w-full ${SideBar?"brightness-50 transition-all duration-300":""}`}>
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
    </div>
  );
}

export default ContentBar;
