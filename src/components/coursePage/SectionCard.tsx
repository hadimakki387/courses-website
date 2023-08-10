"use client";
import React, { useState, useContext, useEffect } from "react";
import RunButton from "./RunButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import SendData from "@/Queries/SendData";

// ... (imports and other code)

function SectionCard({
  sectionName,
  sectionID,
  video,
  sectionNum,
}: {
  sectionName: any;
  sectionNum: any;
  sectionID: any;
  video: any;
}) {
  const [EP, setEP] = useState(false);
  const showEPs = () => {
    setEP(!EP);
  };

  const [
    videos,
    PlayingVideo,
    sections,
    chosenVideo,
    SideBar,
    showVideosBar,
    setPlayingVideo,
  ] = useContext(FakeVideoContext);

  useEffect(() => {
    if (PlayingVideo.sectionID === sectionID) {
      setEP(true);
    }
  }, [PlayingVideo.sectionID, sectionID]);

  const isAuth = false;
  const authUser = {
    _id:"64d3f9de67e40d586b1b1626"
  }

  const [user,setUser] = useState({
    plan:""
  })

  useEffect(()=>{
    SendData("MERN",{id:authUser._id,toDo:"getUser"} , setUser)
  },[])
 

  const checkIfFreeAndChoose = (id: any, isFree: any) => {
    if (user.plan || isFree) {
      chosenVideo(id);
    }
  };

  return (
    <div className="flex flex-col gap-2  ">
      <div
        onClick={showEPs}
        className="course-lighter-bg-color flex justify-between text-sm py-3 px-6 rounded-md"
      >
        <div className="flex justify-center items-center gap-3">
          <p>Section {sectionNum + 1}</p>
          <p> | </p>
          <p>{sectionName}</p>
        </div>
        <p>
          {EP ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </p>
      </div>
      {EP &&
        video.map((vid: any, index: any) => {
          if (sectionID === vid.sectionID) {
            return (
              <div
                className={`flex items-center gap-4 hover:bg-[#151f32] p-2 rounded-md ${
                  PlayingVideo.videoId === vid.videoId ? "bg-[#101c2c]" : ""
                }${
                  !user.plan && !vid.isFree
                    ? "hover:cursor-not-allowed bg-[#243650]"
                    : "hover:cursor-pointer"
                } transition-all duration-300`}
                key={index}
                onClick={() => checkIfFreeAndChoose(vid.videoId, vid.isFree)} // Wrap chosenVideo call in an arrow function
              >
                <div>
                  <RunButton />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col text-[10px]">
                    <div
                      className={`text-xs ${
                        PlayingVideo === vid.url ? "text-sky-400" : "sm-text-c "
                      }`}
                    >
                      {vid.title}
                    </div>
                    <div className="flex  items-center gap-2">
                      <div className="sm-text-c">Episode {index + 1}</div>
                      <div className="sm-text-c">
                        {vid.duration.mins}m {vid.duration.secs}s
                      </div>{" "}
                      {/* Replace with the actual property holding video duration */}
                    </div>
                  </div>
                  {!user.plan && !vid.isFree && (
                    <div className="flex items-center gap-3">
                      <span className="text-xs relative top-[2px]">VIP</span>
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                  )}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default SectionCard;
