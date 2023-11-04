import React, { useState } from "react";
import TextInput from "../Admin components/TextInput";
import { useAdminQueryMutation } from "@/api/apiSlice";

function AddCourse() {
  const [course, setCourse] = useState();
  const [adminQuery,{isLoading,isSuccess,error,data}] = useAdminQueryMutation()

  const CourseHandle = (e: any) => {
    setCourse(e.target.value);
  };
  const fetchNewCourse = () => {
    adminQuery({ data: course, toDo: "AddNewCourse" })
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
