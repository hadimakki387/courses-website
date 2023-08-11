import React from "react";
import TopicsTitles from "./topicsTitles";
import Image from "next/image";
import TopicsCard from "./TopicsCard";

function Topics() {
  return (
    <div className="relative">
      <div className="w-full text-white text-center mt-28 z-10">
        <div className="w-[500px] m-auto max-sm:w-full">
          <p className="text-4xl font-medium max-[570px]:text-[37px] mb-4">
            Check the topics you will learn with us!
          </p>
          <p className="text-base sm-text-c max-[570px]:text-sm max-[400px]:text-xs">
            If you already know what you&apos;re looking for, WebStream is
            divided into various topics ranging from frameworks to packages to
            tools.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-5 font my-8 max-md:overflow-auto max-md:h-96 max-md:w-3/4 max-md:mx-auto">
          {TopicsTitles.map((Topic, index) => {
            return <TopicsCard key={index} img={Topic.img} name={Topic.name} vidNb={Topic.vidNb}/>;
          })}
        </div>
      </div>
      <Image
        src={"/grid-bg.svg"}
        alt="grid-bg"
        width={700}
        height={700}
        className="absolute -top-24 opacity-80 right-0 mix-blend-luminosity max-[990px]:hidden"
      />
    </div>
  );
}

export default Topics;
