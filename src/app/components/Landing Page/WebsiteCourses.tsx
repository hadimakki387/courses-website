import Image from "next/image";
import React from "react";
import Topics from "./topics/Topics";

function WebsiteCourses() {
  return (
    <div className="w-full relative mt-20">
      <Image
        src={"light-lines.svg"}
        alt="illustration"
        width={2000}
        height={2000}
        className="absolute -top-52 m-auto w-full opacity-75 max-[990px]:hidden"
      />
      <div className="text-white w-[600px] m-auto text-center max-sm:w-full ">
        <p className="text-4xl font-medium max-[570px]:text-[37px] mb-4">A stream of endless knowledge</p>
        <p className="text-base text-[#bad9fc] max-[570px]:text-sm ">
          we&apos;re kinda like Netflix, but for developers! Push your
          programming skills to the next level , through experts in{" "}
          <span className="text-[#328af1]">
            NodeJs,React,Javascript and so much more
          </span>
        </p>
      </div>
      <div className="flex text-white w-full  gap-4">
        <Image
          alt="html"
          src={"/webDev.png"}
          width={800}
          height={800}
          className="m-auto "
        />
      </div>
      <Topics/>
    </div>
  );
}

export default WebsiteCourses;
