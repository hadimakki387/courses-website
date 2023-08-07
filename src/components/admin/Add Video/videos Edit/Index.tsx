"use client";

import Sections from "@/fake data/Sections";
import React, { useState } from "react";
import Section from "./Section";

function Index({
  Videos,
  fetchVideoUpdate,
}: {
  Videos: any;
  fetchVideoUpdate: any;
}) {
  const [editMode, setEditMode] = useState(Array(Videos.length).fill(false));
  const [newData, setNewData] = useState(Array(Videos.length).fill({}));
  const [videos,setVideos] = useState(Videos)

  const handleDoubleClick = (index: number) => {
    const newEditMode = Array(videos.length).fill(false);
    newEditMode[index] = true;
    setEditMode(newEditMode);
  };

  const handleUpdate = (index: number) => {
    const newEditMode = [...editMode];
    newEditMode[index] = false;
    setEditMode(newEditMode);

    if (newData[index]) {
      const videoIdToUpdate = videos[index].video_id;
      const updatedVideoIndex = videos.findIndex(
        (video: any) => video.video_id === videoIdToUpdate
      );
      if (updatedVideoIndex !== -1) {
        const updatedVideo = {
          ...videos[updatedVideoIndex],
          title: newData[index].title || videos[updatedVideoIndex].title,
          duration: {
            mins:
              newData[index].mins || videos[updatedVideoIndex].duration.mins,
            secs:
              newData[index].secs || videos[updatedVideoIndex].duration.secs,
          },
          url: newData[index].url || videos[updatedVideoIndex].url,
        };

        // Update the Videos state with the updated video
        const newVideos = [...videos];
        newVideos[updatedVideoIndex] = updatedVideo;
        setVideos(newVideos);

        // Call fetchVideoUpdate with the updated video
        fetchVideoUpdate(updatedVideo);
      }
    }
  };

  const handleChange = (index: number, field: string, value: string) => {
    const newDataCopy = [...newData];
    newDataCopy[index] = { ...newData[index], [field]: value };
    setNewData(newDataCopy);
    console.log(newData)
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      Available Videos
      {Sections.map((section, index) => (
        <Section
          key={index}
          section={section}
          Videos={videos}
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
