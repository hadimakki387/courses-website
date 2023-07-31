import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="flex justify-between items-center w-[98%] m-auto pt-4">
      <div className="text-white">BrandName</div>
      <div className="text-white flex justify-center items-center gap-4 ">
        <Link href="/SignIn" className="hover:underline">
          Sign In
        </Link>

        <Link
          href={"/SignIn"}
          className=" btn rounded-3xl flex-center btn-blue flex-shrink-0 py-2 px-4 text-sm hidden lg:inline-block "
        >
          <span className="text-wrap inline-block flex-shrink-0">
            Get Started
            <span className="hidden lg:inline"> for Free</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
