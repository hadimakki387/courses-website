import Image from "next/image";
import React, { useState } from "react";

function PlanCard({
  price,
  title,
  description,
  img,
  isMonthly,
  isTeam,
}: {
  price: number;
  title: string;
  description: string;
  img: string;
  isMonthly: boolean;
  isTeam: boolean;
}) {
  const [Price, setPrice] = useState(price);
  const [team, setTeam] = useState(2);
  const increase = () => {
    if (title === "Team Plan") {
      setTeam(team + 1);
    }
  };
  const decrease = () => {
    if (title === "Team Plan" && team > 2) {
      setTeam(team - 1);
    }
  };
  return (
    <div className="relative rounded-xl flex flex-col gap-2 h-80 bg-[#18273f] hover:bg-[#182b47] transition-all duration-200  w-1/3 p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="text-xs">
          {isMonthly ? (
            <>
              <button className="bg-[#1b3152] text-[#20a7d7] p-2 rounded-xl border border-[#328af1]">
                monthly
              </button>
              <button className="ml-2 p-2 rounded-xl transition-all duration-150 hover:bg-[#1b3152] hover:text-[#20a7d7]">
                yearly
              </button>
            </>
          ) : (
            <button className="bg-[#1b3152] text-[#20a7d7] p-2 rounded-xl border border-[#328af1]">
              Forever
            </button>
          )}
        </div>
        <div className="text-[#328af1]">${isTeam ? Price * team : Price}</div>
      </div>
      <div className="w-full ">
        <p className="sm-text-c text-center">{title}</p>
      </div>
      <div>
        <Image
          alt="sub monthly"
          width={150}
          height={150}
          src={`/${img}.svg`}
          className="m-auto"
        />
      </div>
      <div className="text-center text-xs mx-4 ">{description}</div>
      {isTeam && (
        <div className="flex justify-around items-center">
          <button onClick={decrease}>-</button>
          <div>{team}</div>
          <button onClick={increase}>+</button>
        </div>
      )}
      <div className="w-full ">
        <button className="bg-[#1b3152] absolute bottom-2  text-white hover:text-[#20a7d7] hover:bg-[rgb(30,54,90)] transition-all duration-200 rounded-xl text-sm  py-2 w-[86%]">
          Select Plan
        </button>
      </div>
    </div>
  );
}

export default PlanCard;
