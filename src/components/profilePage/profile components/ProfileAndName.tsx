import { ProfileContext } from "@/context/ProfileContext";
import Image from "next/image";
import React, { useContext } from "react";

function ProfileAndName({
  name,
  time,
  img,
}: {
  name: string;
  time: number;
  img: string;
}) {

  const [ShowEditInfo] = useContext(ProfileContext)
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
        <button onClick={ShowEditInfo} className="py-1 px-2 text-xs bg-[#24395a] rounded-lg">
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
