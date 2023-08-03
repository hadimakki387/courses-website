import { FakeVideoContext } from "@/context/FakeVideosContext";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useContext } from "react";

function NextVideoCard() {
  const [
    videos,
    PlayingVideo,
    sections,
    chosenVideo,
    SideBar,
    showVideosBar,
    setPlayingVideo,
  ] = useContext(FakeVideoContext);

  const nextVideo = () => {
    const currentIndex = videos.findIndex(
      (video: any) => video.video_id === PlayingVideo.video_id
    );
    const nextIndex = (currentIndex + 1) % videos.length;
    setPlayingVideo(videos[nextIndex]);
  };

  const prevVideo = () => {
    const currentIndex = videos.findIndex(
      (video: any) => video.video_id === PlayingVideo.video_id
    );
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    setPlayingVideo(videos[prevIndex]);
  };
  
  return (
    <div className="relative overflow-hidden flex gap-4 items-center justify-between text-white from-frameworks-light h-40 p-8 mx-16 rounded-xl max-[450px]:mx-8 max-[450px]:p-4 max-[450px]:h-28">
      <div className="flex justify-start items-center gap-8 w-[85%]">
        <div className="w-[10%]">
          <button
            onClick={prevVideo}
            className="bg-rose-300 hover:bg-rose-400 w-10 h-10 rounded-full max-[560px]:h-8 max-[560px]:w-8"
          >
            <FontAwesomeIcon icon={faAngleLeft} />{" "}
          </button>
        </div>

        <p className="text-2xl font-semibold max-[560px]:text-base">
          {PlayingVideo.title}
        </p>
      </div>

      <button
        onClick={nextVideo}
        className="bg-rose-300 z-[1] hover:bg-rose-400 w-10 h-10 rounded-full max-[560px]:h-8 max-[560px]:w-8"
      >
        {" "}
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <Image
        src={"/laravel-from-scratch-2021.png"}
        alt="toggle-episodes-icon"
        height={350}
        width={350}
        className=" absolute -bottom-48 opacity-20 left-1/2"
      />
    </div>
  );
}

export default NextVideoCard;
