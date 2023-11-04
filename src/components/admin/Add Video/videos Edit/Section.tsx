import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useAdminQueryMutation } from "@/api/apiSlice";

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


  const [adminQuery,{isLoading,isSuccess,error,data}] = useAdminQueryMutation()

  const deleteSection = (ID:any) =>{
    adminQuery({_id:ID,toDo:"deleteSection"})
    setTimeout(()=>{
      setNum(Math.random)
    },100*Videos.length)
    
  }

  const [show,setShow] = useState(false)


  return (
    <div key={section.id} className="flex flex-col gap-3">
      <div className=" flex justify-between items-center gap-4 bg-gray-600 p-4 rounded-md ">
        <div className="flex items-center gap-4 ">
          <button onClick={()=>setShow(!show)}>{section.title}</button> <FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteSection(section._id)}/>
        </div>
        <button onClick={()=>setShow(!show)}>
        {show ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </button>
      </div>
      {show&&<div className="flex flex-col gap-2">
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
      </div>}
      
    </div>
  );
}

export default Section;
