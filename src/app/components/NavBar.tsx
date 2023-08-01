import Link from "next/link";
import React from "react";

function NavBar({showSignIn,showSignUp}:{showSignIn:any,showSignUp:any}) {
  return (
    <div className="flex justify-between items-center w-[98%] m-auto pt-4">
      <div className="text-white">BrandName</div>
      <div className="text-white flex justify-center items-center gap-4 ">
        <button  className="hover:underline" onClick={showSignIn}>
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
      </div>
    </div>
  );
}

export default NavBar;
