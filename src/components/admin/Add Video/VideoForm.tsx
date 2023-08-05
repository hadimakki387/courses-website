import React from "react";
import FileInput from "./Admin components/FileInput";
import TextArea from "./Admin components/TextArea";
import CategorySelect from "./Admin components/CategorySelect";
import TextInput from "./Admin components/TextInput";
import SubmitButton from "./Admin components/SubmitButton";

function VideoForm() {
  return (
    <form action="" method="post" className="flex flex-col gap-8">
      <CategorySelect />
      <TextInput
        placeholder="Enter video Title..."
        name="title"
        title="video Title"
        type="text"
       
      />
      <TextInput
        placeholder="Enter video Title..."
        name="title"
        title="video Title"
        type="text"
        
      />
      <div className="flex gap-4 w-full">
        <div className="w-1/2">
          <TextInput
            placeholder="minutes"
            name="title"
            title="Video mins length"
            type="text"
          />
        </div>
        <div className="w-1/2">
          <TextInput
            placeholder="seconds"
            name="title"
            title="Video secs length"
            type="text"
          />
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}

export default VideoForm;
