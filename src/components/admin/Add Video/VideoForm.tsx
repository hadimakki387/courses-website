"use client";

import React, { useEffect, useState } from "react";
import CategorySelect from "./Admin components/CategorySelect";
import TextInput from "./Admin components/TextInput";
import SubmitButton from "./Admin components/SubmitButton";
import Index from "./videos Edit/Index";
import GetData from "@/Queries/GetData";
import AddSection from "./addSection/AddSection";

function VideoForm() {

  const Data: any = GetData("admin");

  const [video, setVideo] = useState({
    sectionID:"",
    title: "",
    url: "",
    duration: {
      mins: 0,
      secs: 0,
    },
  });

  const sectionHandle = (e:any)=>{
    setVideo({
      ...video,
      sectionID: e.target.value,
    });
  }
  const titleHandle = (e: any) => {
    setVideo({
      ...video,
      title: e.target.value,
    });
    console.log(e)
  };
  const urlHandle = (e: any) => {
    setVideo({
      ...video,
      url: e.target.value,
    });
  };
  const minsHandle = (e: any) => {
    const minsValue = Number(e.target.value);
    setVideo({
      ...video,
      duration: { ...video.duration, mins: minsValue },
    });
  };

  const secsHandle = (e: any) => {
    const secsValue = Number(e.target.value);
    setVideo({
      ...video,
      duration: { ...video.duration, secs: secsValue },
    });
  };

  const fetchNewVideo = async () => {
    const hasEmptyValue = Object.values(video).some((value) => value === "");
    if(!hasEmptyValue){
      fetch("http://localhost:3000/api/admin", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(video),
    });
    }
    console.log("empty input")
    
  };

  const fetchVideoUpdate = (e: any) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col gap-8">
      {Data.videos && Data.sections ? (
        <>
        <div>
          <AddSection courses={Data.courses}/>
                
          </div>
          <div className="flex flex-col gap-4">
            <CategorySelect
              title="select the section"
              firstValue="Choose the section"
              handleChange={sectionHandle}
              sections={Data.sections}
            />
            <TextInput
              placeholder="Enter video Title..."
              name="title"
              title="video Title"
              type="text"
              handleChange={titleHandle}
            />
            <TextInput
              placeholder="Enter video url..."
              name="url"
              title="video Url"
              type="text"
              handleChange={urlHandle}
            />
            <div className="flex gap-4 w-full">
              <div className="w-1/2">
                <TextInput
                  placeholder="minutes"
                  name="title"
                  title="Video mins length"
                  type="text"
                  handleChange={minsHandle}
                />
              </div>
              <div className="w-1/2">
                <TextInput
                  placeholder="seconds"
                  name="title"
                  title="Video secs length"
                  type="text"
                  handleChange={secsHandle}
                />
              </div>
            </div>
            <SubmitButton fetchNewVideo={fetchNewVideo} />
          </div>
          
          <Index section={Data.sections} Videos={Data.videos} fetchVideoUpdate={fetchVideoUpdate} />
          
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default VideoForm;
