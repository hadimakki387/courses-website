import Image from "next/image";
import Link from "next/link";
import React from "react";
import ClickAwayListener from "react-click-away-listener";

function SideBarDiv({ showSideBar ,SideBar}: { showSideBar: any ,SideBar:Boolean}) {
  const items=[
    {
      text1:"Home",
      text2:"Home Sweet Home"
    },
    {
      text1:"Course",
      text2:"Start Studying"
    },
    {
      text1:"Profile",
      text2:"Check Your Profile"
    },
    {
      text1:"Settings",
      text2:"Make a tweek"
    },
    {
      text1:"Logout",
      text2:"but... why?"
    },
  ]
  return (
    <div
        className={`fixed top-0 right-0 z-10  ${
          SideBar ? "translate-x-0" : "translate-x-full "
        } transition-all duration-300`}
      ><ClickAwayListener onClickAway={() => showSideBar(false)}>
      <div className="text-white relative w-[20vw] max-[1000px]:w-[40vw] max-[600px]:w-[60vw] h-screen bg-[#0d131d]">
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
          
          {items.map((item,index)=>{
            return<div className="text-xl font-medium" key={index}>
            <Link
              href={"/MERN-course"}
              className="hover:text-sky-600 flex flex-col "
            >
              <span className="-mb-2">
                {item.text1}
              </span>
              <span className="text-[10px] text-zinc-500  ">&#47;&#47;{item.text2}</span>
            </Link>
          </div>
          })}

        </div>
      </div>
    </ClickAwayListener></div>
    
  );
}

export default SideBarDiv;
