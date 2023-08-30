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
  const [ShowEditInfo, editProfile, planSettings, data, user] =
    useContext(ProfileContext);

  const date = new Date(user.created_at);
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);

  const sub = data.plans?.find((plan: any) => {
    return plan._id === user.plan;
  });

  const showSubInfo = () => {
    ShowEditInfo();
  };

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
        <button
          onClick={ShowEditInfo}
          className="py-1 px-2 text-xs bg-[#24395a] rounded-lg text-sky-500 tracking-wide"
        >
          EDIT
        </button>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="text-lg font-medium ">{user.name}</div>
          <div className="text-sm">member since {formattedDate}</div>
          <div className="text-sm mt-1 " onClick={showSubInfo}>
            currently plan:{" "}
            <span className=" px-2 py-1 rounded-md  hover:cursor-pointer">
              {user.plan ? sub.name : "Free"}
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProfileAndName;
