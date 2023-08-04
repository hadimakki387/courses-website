import React from 'react'

function ProfileActivity({title}:{title:string}) {
  return (
    <>
   
          <div className="flex gap-4 text-lg">
            <div className="course-lighter-bg-divs px-4 py-2 rounded-lg w-[90%]">
              <span className="font-semibold">Completed Lesson</span>{" "}
              <span className="sm-text-c">{title}</span>
            </div>
            <div className="course-lighter-bg-divs px-4 py-2 rounded-lg w-[10%] text-center ">
              100XP
            </div>
          </div>
      </>    
        
  )
}

export default ProfileActivity