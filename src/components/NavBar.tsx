import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar({
  showSignIn,
  showSignUp,
  showSideBar
}: {
  showSignIn: any;
  showSignUp: any;
  showSideBar:any
}) {
  const isAuth = false;
  return (
   
      <div className="flex justify-between items-center z-30  py-3 m-auto w-[98%]">
      <Link href={"/"} className="text-white">
        BrandName
      </Link>
      <div className="text-white flex justify-center items-center gap-4 ">
        {isAuth ? (
          <Image
            width={50}
            height={50}
            alt="user"
            src={"/User.png"}
            className="rounded-[17px] w-11 hover:cursor-pointer"
            onClick={showSideBar}
          />
        ) : (
          <>
            <button className="hover:underline" onClick={showSignIn}>
              Sign In
            </button>

            <button
              onClick={showSignUp}
              className=" btn rounded-3xl flex-center btn-blue flex-shrink-0 py-2 px-4 text-sm hidden lg:inline-block "
            >
              <span className="text-wrap inline-block flex-shrink-0">
                Get Started
                <span className="hidden lg:inline"> for Free</span>
              </span>
            </button>
          </>
        )}
      </div>
    </div>
   
    
  );
}

export default NavBar;
