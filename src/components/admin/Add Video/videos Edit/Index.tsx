"use client";


import React, { useState } from "react";
import Section from "./Section";

function Index({
  Data,
  fetchVideoUpdate,
  setNum
}: {
  Data:any,
  fetchVideoUpdate: any;
  setNum:any
}) {

  const [editMode, setEditMode] = useState(Array(Data.videos.length).fill(false));
  const [newData, setNewData] = useState(Array(Data.videos.length).fill({}));
  const [videos,setVideos] = useState(Data.videos)


  const handleDoubleClick = (index: number) => {
    const newEditMode = Array(videos.length).fill(false);
    newEditMode[index] = true;
    setEditMode(newEditMode);
  };

  const handleUpdate = (index: any) => {
    disableEditMode(index)
   
    if (newData[index]) {

      const videoIdToUpdate = videos[index]._id;
      const updatedVideoIndex = videos.findIndex(
        (video: any) => video._id === videoIdToUpdate
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

  const disableEditMode=(index:number)=>{
    const newEditMode = [...editMode];
    newEditMode[index] = false;
    setEditMode(newEditMode);
  }

  const handleChange = (index: number, field: string, value: string) => {
    const newDataCopy = [...newData];
    newDataCopy[index] = { ...newData[index], [field]: value };
    setNewData(newDataCopy);

  };


  return (
    <div className="flex flex-col gap-4 w-full">
      Available Sections and Videos
      {Data.sections.map((sec:any, index:number) => (
        <Section
          key={index}
          section={sec}
          Videos={Data.videos}
          editMode={editMode}
          handleDoubleClick={handleDoubleClick}
          handleChange={handleChange}
          handleUpdate={handleUpdate}
          setNum={setNum}
          disableEditMode={disableEditMode}
        />
      ))}
    </div>
  );
}

export default Index;
