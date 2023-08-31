import React, { useContext, useEffect } from "react";
import TitleOfSideBar from "./TitleOfSideBar";
import SectionCard from "./SectionCard";
import { FakeVideoContext } from "@/context/FakeVideosContext";
import { useMernQueryMutation } from "@/api/apiSlice";
import { useSession } from "next-auth/react";
import LoadingSpinner from "../loading/loadingSpinner/LoadingSpinner";

function VideosBar({ IsVideosBar }: { IsVideosBar: boolean }) {
  const [
    videos,
    PlayingVideo,
    sections,
    chosenVideo,
    SideBar,
    showVideosBar,
    setPlayingVideo,
  ] = useContext(FakeVideoContext);

  const [mernQuery, { data: user, error, isLoading, isSuccess }] =
    useMernQueryMutation();
  const isAuth = false;
  const session = useSession();

  const authUser = session.data?.user;

  useEffect(() => {
    mernQuery({ id: authUser?.id, toDo: "getUser" });
  }, []);

  return (
    <div
      className={`flex flex-col gap-4 w-[23vw]  text-white p-4 ${
        SideBar ? "brightness-50 transition-all duration-300" : ""
      } max-[1300px]:absolute z-10 course-page-bg transition-all duration-300  ${
        !IsVideosBar ? "max-[1300px]:-translate-x-full " : ""
      } max-[1300px]:w-[100vw] h-full overflow-y-scroll fixed `}
    >
      <TitleOfSideBar />
      {isSuccess?<div className="flex flex-col gap-2 mb-20">
        {sections.map((section: any, index: any) => {
          return (
            <SectionCard
              video={videos}
              sectionID={section._id}
              sectionName={section.title}
              sectionNum={index}
              key={index}
              user={user}
            />
          );
        })}
      </div>:<div className="w-full h-full flex justify-center items-center"><LoadingSpinner/></div>}
    </div>
  );
}

export default VideosBar;
