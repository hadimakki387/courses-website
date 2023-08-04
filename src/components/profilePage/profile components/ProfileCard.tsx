import Image from "next/image";
import React from "react";

function ProfileCard({text,img,number}:{text:string,img:string,number:number}) {
  return (
    <div className="flex flex-col gap-2 rounded-md items-center justify-center text-center p-4 h-[220px] w-[150px] bg-[rgba(0,0,0,.1)]   transition-all duration-300 experience-shadow">
      <div className="h-[100px]">
         <Image
        width={50}
        height={50}
        alt="user"
        src={`/${img}`}
        className="m-auto w-full h-full"
      />
      </div>
     
      <div className="text-lg font-bold h-[50px]">{number}</div>
      <div className="h-[50px] text-sm">{text}</div>
    </div>
  );
}

export default ProfileCard;
