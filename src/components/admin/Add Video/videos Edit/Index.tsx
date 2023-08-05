"use client";


import React, { useState } from "react";
import Section from "./Section";
import SectionsDB from "@/Queries/sectionsDB";

function Index({
  Videos,
  fetchVideoUpdate,
  Sections
}: {
  Videos: any;
  fetchVideoUpdate: any;
  Sections:any
}) {
  
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
      const updatedVideoIndex = Videos.findIndex(
        (video: any) => video.video_id === videoIdToUpdate
      );
      if (updatedVideoIndex !== -1) {
        const updatedVideo = {
          ...Videos[updatedVideoIndex],
          title: newData[index].title || Videos[updatedVideoIndex].title,
          duration: {
            mins:
              newData[index].mins || Videos[updatedVideoIndex].duration.mins,
            secs:
              newData[index].secs || Videos[updatedVideoIndex].duration.secs,
          },
          url: newData[index].url || Videos[updatedVideoIndex].url,
        };

        // Update the Videos state with the updated video
        const newVideos = [...Videos];
        newVideos[updatedVideoIndex] = updatedVideo;

        // Call fetchVideoUpdate with the updated video
        fetchVideoUpdate(updatedVideo);
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
      {Sections.map((section:any, index:number) => (
        <Section
          key={index}
          section={section}
          Videos={Videos}
          editMode={editMode}
          handleDoubleClick={handleDoubleClick}
          handleChange={handleChange}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Index;
