import React from "react";
import VideoCard from "./VideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import SendData from "@/Queries/SendData";

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
    SendData("admin",{_id:ID,toDo:"deleteSection"},(res:any)=>{})
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
