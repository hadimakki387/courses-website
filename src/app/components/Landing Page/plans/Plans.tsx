import Image from "next/image";
import React from "react";
import PlanCard from "./PlanCard";

function Plans() {
  return (
    <div className="w-full mt-20">
      <div className="text-white w-[600px] text-center m-auto mb-6">
        <p className="text-4xl font-medium">Available plans</p>
        <p className="sm-text-c">
          Joining takes less than a minute, and, if your peers are correct, is
          the best decision you&apos;ll make all day. If you&apos;re still on
          the fence, we have a plan called “monthly” - and it&apos;s not like
          the gym. Seriously, you can cancel in five seconds.
        </p>
      </div>
      <div className="flex gap-6 w-3/5 m-auto">
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
