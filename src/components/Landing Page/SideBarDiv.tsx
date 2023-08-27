import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";

function SideBarDiv({
  SideBar,
  setSideBar,
}: {
  SideBar: Boolean;
  setSideBar: any;
}) {
  const items = [
    {
      text1: "Home",
      text2: "Home Sweet Home",
      link: "/",
    },
    {
      text1: "Course",
      text2: "Start Studying",
      link: "MERN-course",
    },
    {
      text1: "Profile",
      text2: "Check Your Profile",
      link: "profile",
    },
    {
      text1: "Settings",
      text2: "Make a tweek",
      link: "",
    },
    {
      text1: "Logout",
      text2: "but... why?",
      text3: "signout",
      link: "",
    },
  ];

 
console.log("cookies are ",document.cookie)
  const handleClick = async(index: any) => {
    setSideBar(false);
    if (index.text3) {
      await signOut({redirect:false})
    }
  };
  const session = useSession();



  return (
    <div
      className={`fixed top-0 right-0 z-40  ${
        SideBar ? "translate-x-0" : "translate-x-full "
      } transition-all duration-300`}
    >
      <div className="text-white relative w-[100vw]  flex justify-end">
        <div className="w-[20vw] max-[1000px]:w-[40vw] max-[600px]:w-[60vw] h-screen bg-[#0d131d]">
          <ClickAwayListener onClickAway={() => setSideBar(false)}>
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
                  <p className="text-sm">{session.data?.user.name}</p>
                  <p className="text-xs">plan</p>
                </div>
              </div>

              {items.map((item, index) => {
                return (
                  <div className="text-xl font-medium" key={index}>
                    <Link
                      href={item.link}
                      className="hover:text-sky-600 flex flex-col "
                      onClick={() => handleClick(item)}
                    >
                      <span className="-mb-2">{item.text1}</span>
                      <span className="text-[10px] text-zinc-500  ">
                        &#47;&#47;{item.text2}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </div>
  );
}

export default SideBarDiv;
