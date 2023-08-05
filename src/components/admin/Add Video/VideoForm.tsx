'use client'

import React, {useState} from "react";
import CategorySelect from "./Admin components/CategorySelect";
import TextInput from "./Admin components/TextInput";
import SubmitButton from "./Admin components/SubmitButton";
import Videos from "@/fake data/Videos";
import Index from "./videos Edit/Index";

function VideoForm() {
  const [video,setVideo] = useState({
    course:"",
    title:"",
    url:"",
    duration:{
      mins:0,
      secs:0
    },
  })
  const courseHandle = (e: any) => {
    setVideo({
      ...video, 
      course: e.target.value, 
    });
  };
  const titleHandle = (e: any) => {
    setVideo({
      ...video, 
      title: e.target.value, 
    });
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

  const fetchData = ()=>{
    console.log(video)
  }
  
  
  return (
    <div  className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <CategorySelect handleChange={courseHandle}/>
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
      <SubmitButton fetchData={fetchData}/>
      </div>
      <Index Videos={Videos}/>
    </div>
  );
}

export default VideoForm;
