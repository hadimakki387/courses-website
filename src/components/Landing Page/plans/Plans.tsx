import Image from "next/image";
import React from "react";
import PlanCard from "./PlanCard";

function Plans({ setSignIn }: any) {
  return (
    <div className="w-full mt-32">
      <div className="text-white w-[600px]  text-center m-auto mb-6 max-sm:w-full ">
        <p className="text-4xl font-medium  max-[570px]:text-[37px] mb-4">
          Available plans
        </p>
        <p className="sm-text-c max-[570px]:text-sm max-[400px]:text-xs">
          Joining takes less than a minute, and, if your peers are correct, is
          the best decision you&apos;ll make all day. If you&apos;re still on
          the fence, we have a plan called “monthly” - and it&apos;s not like
          the gym. Seriously, you can cancel in five seconds.
        </p>
      </div>
      <div className="flex  justify-center  gap-6 w-3/5 max-[1400px]:w-3/4 max-[1100px]:w-full max-[800px]:flex-grow-0 max-[800px]:flex-wrap max-[700px]:flex-col m-auto">
        <PlanCard
          price={7}
          title="Monthly Plan"
          description="Be in the know. Fetch an endless stream of input with our monthly plan."
          img="sub-monthly"
          isMonthly={true}
          isYearly={false}
          setSignIn={setSignIn}
        />
        <PlanCard
          price={17}
          title="3 Months Plan"
          description="Be in the know. Fetch an endless stream of input with our 3 months plan."
          img="sub-monthly"
          isMonthly={false}
          isYearly={true}
          setSignIn={setSignIn}
        />
        <PlanCard
          price={200}
          title="Forever Plan"
          description="Permanently uplink to our mainframe. Pay once, and access WebStreams forever."
          img="sub-monthly"
          isMonthly={false}
          isYearly={false}
          setSignIn={setSignIn}
        />
      </div>
    </div>
  );
}

export default Plans;
