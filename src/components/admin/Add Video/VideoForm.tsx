"use client";

import React, { useEffect, useState } from "react";
import CategorySelect from "./Admin components/CategorySelect";
import TextInput from "./Admin components/TextInput";
import SubmitButton from "./Admin components/SubmitButton";
import Index from "./videos Edit/Index";

import AddSection from "./addSection/AddSection";
import LoadingScreen from "@/components/loading/LoadingScreen";

import AddCourse from "./Add Course/AddCourse";
import SendData from "@/Queries/SendData";
import { useGetAdminDataQuery } from "@/api/apiSlice";


function VideoForm() {

  const [num, setNum] = useState(0);
  const {isLoading,isSuccess,data:Data,refetch,error,isError} = useGetAdminDataQuery({})
  console.log(Data)

  useEffect(() => {
    refetch()
  }, [num]);

  const [video, setVideo] = useState({
    sectionID: "",
    title: "",
    url: "",
    duration: {
      mins: 0,
      secs: 0,
    },
    isFree: false,
  });

  const sectionHandle = (e: any) => {
    setVideo({
      ...video,
      sectionID: e.target.value,
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
  const isFreeHandle = (e: any) => {
    setVideo({
      ...video,
      isFree: e.target.checked,
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
    if (!hasEmptyValue) {
      await SendData("admin",video,(res:any)=>{})
      setNum(num + 1);
    }


  };

  const fetchVideoUpdate = (e: any) => {
    SendData("admin",{ Data: e, toDo: "fetchVideoUpdate" },(res:any)=>{})
    setNum(num + 1);
  };

  return (
    <div
      className={`flex flex-col gap-8 ${
        isLoading  ? "h-screen" : ""
      }  `}
    >
      {isSuccess ? (
        <>
          <div>
            <AddCourse />
          </div>
          <div>
            <AddSection courses={Data.courses} setNum={setNum} />
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
            <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  onChange={isFreeHandle}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  IS FREE?
                </label>
              </div>
            <SubmitButton fetchNewVideo={fetchNewVideo} />
          </div>

          <Index
            Data={Data}
            fetchVideoUpdate={fetchVideoUpdate}
            setNum={setNum}
          />
        </>
      ) :isLoading? (
        <div className="grid place-items-center h-full w-full">
          <LoadingScreen />
        </div>
      ):null}
    </div>
  );
}

export default VideoForm;
