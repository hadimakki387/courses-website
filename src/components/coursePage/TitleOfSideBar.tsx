import { FakeVideoContext } from "@/context/FakeVideosContext";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useContext } from "react";

function TitleOfSideBar() {
  const [videos, PlayingVideo, sections, chosenVideo, SideBar, showVideosBar] =
    useContext(FakeVideoContext);

  let totalMinutes = 0;
  let totalSeconds = 0;

  videos.forEach((vid: any) => {
    totalMinutes += vid.duration.mins;
    totalSeconds += vid.duration.secs;
  });

  // Calculate total hours, minutes, and remaining seconds
  const totalHours = Math.floor(totalMinutes / 60);
  totalMinutes %= 60;

  // Adjust minutes and seconds if seconds exceed 60
  totalMinutes += Math.floor(totalSeconds / 60);
  totalSeconds %= 60;

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div><Image src={"/logo-img.png"} width={50} height={"50"} alt="logo"/></div>
        <div className="flex flex-col">
          <div>MERN stack from scratch</div>
          <div className="flex text-xs gap-4">
            <div>{videos.length} Lessons</div>
            <div>
              {totalHours > 0 && `${totalHours}h `}
              {totalMinutes}m {totalSeconds}s
            </div>
          </div>
        </div>
      </div>
      <div onClick={showVideosBar} className="min-[1300px]:hidden">
        <FontAwesomeIcon icon={faX} />
      </div>
    </div>
  );
}

export default TitleOfSideBar;
