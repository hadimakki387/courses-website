import Image from "next/image";
import Link from "next/link";
import React from "react";
import ClickAwayListener from "react-click-away-listener";

function SideBarDiv({ showSideBar }: { showSideBar: any }) {
  return (
    <ClickAwayListener onClickAway={() => showSideBar(false)}>
      <div className="text-white relative w-[20vw] h-screen bg-[#0d131d]">
        <div className="flex flex-col p-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="">
              <Image
                alt="user"
                width={50}
                height={50}
                src={"/User.png"}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Name</p>
              <p className="text-xs">plan</p>
            </div>
          </div>
          <div className="text-xl font-medium">
            <Link
              href={"/MERN-course"}
              className="hover:text-sky-600 flex flex-col "
            >
              <span className="-mb-2">
                Course
              </span>
              <span className="text-[10px] text-zinc-500  ">//Start Studying</span>
            </Link>
          </div>
          <div className="text-xl font-medium">
          <Link
              href={"/"}
              className="hover:text-sky-600 flex flex-col "
            >
              <span className="-mb-2">
                Settings
              </span>
              <span className="text-[10px]  text-zinc-500">//Make a tweek</span>
            </Link>
          </div>
          <div className="text-xl font-medium">
          <Link
              href={"/"}
              className="hover:text-sky-600  flex flex-col "
            >
              <span className="-mb-2">
                Logout
              </span>
              <span className="text-[10px]  text-zinc-500">//but... why?</span>
            </Link>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default SideBarDiv;
