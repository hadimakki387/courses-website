"use client";
import React, { useState } from "react";
import RunButton from "./RunButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
              <div className="flex items-center gap-4" key={index}>
                <div>
                  <RunButton />
                </div>

                <div className="flex flex-col text-xs">
                  <div></div>
                  <div className="flex  items-center gap-2">
                    <div>Episode {index + 1}</div>
                    <div>2m 3s</div> {/* Replace with the actual property holding video duration */}
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

