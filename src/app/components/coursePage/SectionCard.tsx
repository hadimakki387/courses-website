"use client";
import React, { useState , useContext} from "react";
import RunButton from "./RunButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FakeVideoContext } from "@/app/context/FakeVideosContext";

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

  const [videos,PlayingVideo, sections, chosenVideo] = useContext(FakeVideoContext);

  return (
    <div className="flex flex-col gap-2 hover:cursor-pointer">
      <div
        onClick={showEPs}
        className="bg-[#101c2c] flex justify-between text-sm py-3 px-6 rounded-md"
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
          if (sectionID === vid.section_id) {
            return (
              <div
                className={`flex items-center gap-4 hover:bg-[#101c2c] p-2 rounded-md ${PlayingVideo===vid.url?"bg-[#101c2c]":""}`}
                key={index}
                onClick={() => chosenVideo(vid.video_id)} // Wrap chosenVideo call in an arrow function
              >
                <div>
                  <RunButton />
                </div>

                <div className="flex flex-col text-[10px]">
                  <div className={`text-xs ${PlayingVideo===vid.url?"text-sky-400":"sm-text-c "}`}>{vid.title}</div>
                  <div className="flex  items-center gap-2">
                    <div className="sm-text-c">Episode {index + 1}</div>
                    <div className="sm-text-c">2m 3s</div> {/* Replace with the actual property holding video duration */}
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default SectionCard;


