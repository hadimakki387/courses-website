import Image from "next/image";
import React from "react";
import PlanCard from "./PlanCard";

function Plans() {
  return (
    <div className="w-full mt-32">
      <div className="text-white w-[600px]  text-center m-auto mb-6 max-sm:w-full ">
        <p className="text-4xl font-medium  max-[570px]:text-[37px] mb-4">Available plans</p>
        <p className="sm-text-c max-[570px]:text-sm max-[400px]:text-xs">
          Joining takes less than a minute, and, if your peers are correct, is
          the best decision you&apos;ll make all day. If you&apos;re still on
          the fence, we have a plan called “monthly” - and it&apos;s not like
          the gym. Seriously, you can cancel in five seconds.
        </p>
      </div>
      <div className="flex  justify-center  gap-6 w-3/5 max-[1400px]:w-3/4 max-[1100px]:w-full max-[800px]:flex-grow-0 max-[800px]:flex-wrap max-[700px]:flex-col m-auto">
        <PlanCard
          price={15}
          title="Individual Plan"
          description="Be in the know. Fetch an endless stream of input with our monthly plan."
          img="sub-monthly"
          isMonthly={true}
          isTeam={false}
        />
        <PlanCard
          price={399}
          title="Forever Plan"
          description="Permanently uplink to our mainframe. Pay once, and access Laracasts forever."
          img="sub-monthly"
          isMonthly={false}
          isTeam={false}
        />
        <PlanCard
        price={15}
        title="Team Plan"
        description="Choose your team size and grant unlimited access."
        img="sub-monthly"
        isMonthly={true}
        isTeam={true} />
      </div>
    </div>
  );
}

export default Plans;
