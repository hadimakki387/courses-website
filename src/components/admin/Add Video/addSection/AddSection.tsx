import React, { useState } from "react";
import TextInput from "../Admin components/TextInput";
import CategorySelect from "../Admin components/CategorySelect";
import { useAdminQueryMutation } from "@/api/apiSlice";

function AddSection({courses,setNum}:any) {
  const [section, setSection] = useState({
    sectionName: "",
    courseName: "",
  });
  const sectionHandle = (e: any) => {
    setSection({ ...section, sectionName: e.target.value });
  };
  const courseHandle = (e: any) => {
    setSection({
      ...section,
      courseName: e.target.value,
    });  
  };

  const [adminQuery,{isLoading,isSuccess,error,data}] = useAdminQueryMutation()


  const fecthSection = () => {
    if(section.courseName && section.sectionName){
       adminQuery(section)
    }
    setNum(Math.random)
  };
  return (
    <div className="w-full flex flex-col  justify-center">
      <TextInput
        placeholder="sectionName"
        name="newSection"
        title="New Section?"
        type="text"
        handleChange={sectionHandle}
      />
      <CategorySelect
        title="select the Course"
        firstValue="Choose the course"
        handleChange={courseHandle}
        sections={courses}
      />
      <button
        onClick={fecthSection}
        className="bg-red-800 w-1/2 rounded-md m-auto py-2 hover:bg-red-700 mt-4"
      >
        add section
      </button>
    </div>
  );
}

export default AddSection;
