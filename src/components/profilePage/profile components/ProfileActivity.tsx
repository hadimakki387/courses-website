import React from "react";

function ProfileActivity({ title }: { title: string }) {
  return (
    <>
      <div className="flex gap-2 text-lg">
        <div className="course-lighter-bg-divs px-4 py-2 rounded-lg w-[90%] max-[900px]:w-full max-[560px]:flex max-[560px]:flex-col max-[560px]:text-base">
          <span className="font-semibold">Completed Lesson</span>{" "}
          <span className="sm-text-c">{title}</span>
        </div>
        <div className="course-lighter-bg-divs px-4 py-2 rounded-lg w-[10%] text-center max-[900px]:hidden">
          100XP
        </div>
      </div>
    </>
  );
}

export default ProfileActivity;
