"use client";

import Sections from "@/fake data/Sections";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Index({ Videos }: any) {
  const [editMode, setEditMode] = useState(Array(Videos.length).fill(false));
  const [newData, setNewData] = useState(Array(Videos.length).fill({}));

  const handleDoubleClick = (index: number) => {
    const newEditMode = Array(Videos.length).fill(false);
    newEditMode[index] = true;
    setEditMode(newEditMode);
  };

  const handleUpdate = (index: number) => {
    const newEditMode = [...editMode];
    newEditMode[index] = false;
    setEditMode(newEditMode);

    if (newData[index]) {
      const videoIdToUpdate = Videos[index].video_id;
      const updatedVideo = Videos.find(
        (video: any) => video.video_id === videoIdToUpdate
      );
      if (updatedVideo) {
        updatedVideo.title = newData[index].title || updatedVideo.title;
        updatedVideo.duration.mins =
          newData[index].mins || updatedVideo.duration.mins;
        updatedVideo.duration.secs =
          newData[index].secs || updatedVideo.duration.secs;
        updatedVideo.url = newData[index].url || updatedVideo.url;
      }
    }
  };

  const handleChange = (index: number, field: string, value: string) => {
    const newDataCopy = [...newData];
    newDataCopy[index] = { ...newData[index], [field]: value };
    setNewData(newDataCopy);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      Available Videos
      {Sections.map((section, index) => {
        return (
          <div key={index}>
            <div className="mb-1">{section.section_name}</div>
            <div className="flex flex-col gap-2">
                {Videos.map((video: any, index: number) => {
              if (section.section_id === video.section_id) {
                return (
                  <div key={index} className="bg-gray-600 p-4 rounded-md">
                    <div onDoubleClick={() => handleDoubleClick(index)}>
                      {editMode[index] ? (
                        <div className="flex items-center gap-4 max-[860px]:flex-col max-[860px]:items-start">
                          <input
                            defaultValue={video.title}
                            className="bg-gray-700 p-2 rounded-md w-[50%] max-[860px]:w-full"
                            onChange={(e) =>
                              handleChange(index, "title", e.target.value)
                            }
                          />
                          <input
                            defaultValue={video.duration.mins}
                            className="bg-gray-700 p-2 rounded-md w-[10%] max-[860px]:w-full"
                            onChange={(e) =>
                              handleChange(index, "mins", e.target.value)
                            }
                          />
                          <input
                            defaultValue={video.duration.secs}
                            className="bg-gray-700 p-2 rounded-md w-[10%] max-[860px]:w-full"
                            onChange={(e) =>
                              handleChange(index, "secs", e.target.value)
                            }
                          />
                          <input
                            defaultValue={video.url}
                            className="bg-gray-700 p-2 rounded-md w-[20%] max-[860px]:w-full"
                            onChange={(e) =>
                              handleChange(index, "url", e.target.value)
                            }
                          />
                          <FontAwesomeIcon
                            icon={faCheck}
                            onClick={() => handleUpdate(index)}
                          />
                        </div>
                      ) : (
                        <div className="flex gap-4 items-center max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-2">
                          <div className="w-[70%] ">{video.title}</div>
                          <div className="w-[15%] ">
                            {video.duration.mins}s {video.duration.secs}m
                          </div>
                          <div className="w-[15%] ">{video.url}</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
            })}
            </div>
            
          </div>
        );
      })}
    </div>
  );
}

export default Index;
