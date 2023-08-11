import React from "react";
import VideoCard from "./VideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Section({
  section,
  Videos,
  editMode,
  handleDoubleClick,
  handleChange,
  handleUpdate,
  setNum,
  disableEditMode
}: any) {
  const deleteSection = (ID:any) =>{
    fetch("https://mern-course.netlify.app/api/admin",{
      headers:{
        "Content-Type": "application/json",
      },
      method:"POST",
      body:JSON.stringify({_id:ID,toDo:"deleteSection"})
    })
    setTimeout(()=>{
      setNum(Math.random)
    },100*Videos.length)
    
  }
  return (
    <div key={section.id}>
      <div className="mb-1 flex items-center gap-4">
        {section.title} <FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteSection(section._id)}/>
      </div>
      <div className="flex flex-col gap-2">
        {Videos.map((video: any, index: any) => {
          if (section._id === video.sectionID) {
            return (
              <VideoCard
                key={index}
                video={video}
                index={index}
                editMode={editMode[index]}
                handleDoubleClick={handleDoubleClick}
                handleChange={handleChange}
                handleUpdate={handleUpdate}
                setNum={setNum}
                disableEditMode={disableEditMode}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Section;
