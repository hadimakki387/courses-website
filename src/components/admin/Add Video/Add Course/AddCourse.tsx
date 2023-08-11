import React, { useState } from "react";
import TextInput from "../Admin components/TextInput";
import SendData from "@/Queries/SendData";

function AddCourse() {
  const [course, setCourse] = useState();

  const CourseHandle = (e: any) => {
    setCourse(e.target.value);
  };
  const fetchNewCourse = () => {
    SendData("admin", { data: course, toDo: "AddNewCourse" }, (e: any) => {

    });
    console.log(course);
  };
  return (
    <div className="flex flex-col gap-4">
      <div>Add Course?</div>
      <TextInput
        placeholder="Enter course Title..."
        name="title"
        title="Course Title"
        type="text"
        handleChange={CourseHandle}
      />
      <button
        onClick={fetchNewCourse}
        className="bg-red-800 w-1/2 rounded-md m-auto py-2 hover:bg-red-700"
      >
        submit
      </button>
    </div>
  );
}

export default AddCourse;
