import React from "react";
import Video from "../Video";

function ContentBar() {
  const aspectRatio = 9 / 16;
  return (
    <div className="bg-[#151f32] w-full">
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
