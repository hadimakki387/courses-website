import React from "react";
import TopicsTitles from "./topicsTitles";
import Image from "next/image";
import TopicsCard from "./TopicsCard";

function Topics() {
  return (
    <div className="relative">
      <div className="w-full text-white text-center mt-20 z-10">
        <div className="w-[500px] m-auto ">
          <p className="text-4xl font-medium">
            Check the topics you will learn with us!
          </p>
          <p className="text-base sm-text-c">
            If you already know what you&apos;re looking for, Laracasts is
            divided into various topics ranging from frameworks to packages to
            tools.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-5 overflow-auto font my-8 ">
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
        className="absolute -top-24 opacity-80 right-0 mix-blend-luminosity "
      />
    </div>
  );
}

export default Topics;
