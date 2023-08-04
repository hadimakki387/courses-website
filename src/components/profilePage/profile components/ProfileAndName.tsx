import Image from "next/image";
import React from "react";

function ProfileAndName({
  name,
  time,
  img,
}: {
  name: string;
  time: number;
  img: string;
}) {
  return (
    <div className="flex justify-start gap-4">
      <div className="flex flex-col gap-2 items-center justify-center ">
        <Image
          width={100}
          height={100}
          alt="user"
          src={`/${img}`}
          className="rounded-lg"
        />
        <button className="py-1 px-2 text-xs course-lighter-bg-divs rounded-lg">
          edit
        </button>
      </div>
      <div className="flex flex-col">
        <div className="text-lg font-medium">{name}</div>
        <div className="text-sm">member since {time} months</div>
      </div>
    </div>
  );
}

export default ProfileAndName;
