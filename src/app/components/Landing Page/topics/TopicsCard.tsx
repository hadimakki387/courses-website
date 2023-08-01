import Image from "next/image";
import React from "react";

function TopicsCard({img,name,vidNb}:{img:string,name:string,vidNb:any}) {
  return (
    <div className="flex  items-center bg-[#18273f] w-2/12 rounded-xl py-3 px-3 gap-3 max-[1530px]:w-1/4 max-[1100px]:w-1/3 max-md:w-full">
      <Image
        src={`/topics/${img}.png`}
        alt="html"
        width={50}
        height={50}
        className="object-fill"
      />
      <div className="flex flex-col items-start">
        <p className="text-lg title">{name}</p>
        <p className="text-[10px] sm-text-c">{vidNb?vidNb+ " . Videos":"integrated in defferent videos"} </p>
      </div>
    </div>
  );
}

export default TopicsCard;
