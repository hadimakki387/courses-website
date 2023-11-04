
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function PlanCard({
  price,
  title,
  description,
  img,
  isMonthly,
  isYearly,
  setSignIn,
}: {
  price: number;
  title: string;
  description: string;
  img: string;
  isMonthly: boolean;
  isYearly: boolean;
  setSignIn: any;
}) {

  const router = useRouter();

  const isAuth = true 

  const planSelection = () => {
    if (isAuth) {
      router.push("/profile?selectPlan=true");
    }else{
      setSignIn(true)
    }
  };
  return (
    <div className="relative rounded-xl flex flex-col gap-2 h-[22rem] bg-[#18273f] hover:bg-[#182b47] transition-all duration-200  w-1/3 p-4 text-white  max-[700px]:w-1/2 max-[700px]:m-auto max-[520px]:w-3/4 max-[340px]:w-[90%]">
      <div className="flex justify-between items-center">
        <div className="text-xs">
          {isMonthly && !isYearly ? (
            <button className="bg-[#1b3152] text-[#20a7d7] p-2 rounded-xl border border-[#328af1]">
              monthly
            </button>
          ) : isYearly && !isMonthly? (
            <button className="bg-[#1b3152] text-[#20a7d7] p-2 rounded-xl border border-[#328af1]">
              3 months
            </button>
          ) : (
            <button className="bg-[#1b3152] text-[#20a7d7] p-2 rounded-xl border border-[#328af1]">
              Forever
            </button>
          )}
        </div>
        <div className="text-[#328af1] text-2xl">${price}</div>
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
          className="m-auto "
        />
      </div>
      <div className="text-center text-xs mx-4 ">{description}</div>

      <div className="w-full ">
        <button
          onClick={planSelection}
          className="bg-[#1b3152] absolute bottom-4  text-white hover:text-[#20a7d7] hover:bg-[rgb(30,54,90)] transition-all duration-200 rounded-xl text-sm  py-2 w-[86%]"
        >
          Select Plan
        </button>
      </div>
    </div>
  );
}

export default PlanCard;
