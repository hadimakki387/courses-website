import Image from "next/image";
import React from "react";

function TopicsCard({img,name}:{img:string,name:string}) {
  return (
    <div className="flex  items-center bg-[#18273f] w-1/6 rounded-xl py-3 px-3 gap-3">
      <Image
        src={`/topics/${img}.png`}
        alt="html"
        width={50}
        height={50}
        className="object-fill"
      />
      <div className="flex flex-col items-start">
        <p className="text-lg title">{name}</p>
        <p className="text-[10px] sm-text-c">99 . Videos</p>
      </div>
    </div>
  );
}

export default TopicsCard;
