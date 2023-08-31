import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import LoadingSpinner from "./loading/loadingSpinner/LoadingSpinner";

function NavBar({
  showSignIn,
  showSignUp,
  showSideBar,
}: {
  showSignIn: any;
  showSignUp: any;
  showSideBar: any;
}) {
  const session = useSession();
  const [isAuth,setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    session.status === "authenticated" ? true : session.status === "unauthenticated"?false:'loading'
    if(session.status === "authenticated"){
      setIsAuth(true)
      setLoading(false)
    }else if(session.status === "unauthenticated"){
      setIsAuth(false)
      setLoading(false)
    }
  },[session])
  
  console.log(isAuth)
  console.log(loading)
  return (
    <div className="flex justify-between items-center z-30  py-3 m-auto w-[98%] ">
      <Link href={"/"} className="text-white">
        <Image
          width={100}
          height={25}
          src={"/logo-white.png"}
          alt="WebStream"
          className="w-44 max-[460px]:w-32"
        />
      </Link>
      {isAuth && (
        <Link
          href={"/MERN-course"}
          className="text-white text-lg bg-[#203352] px-6 py-2 rounded-md hover:text-sky-500 hover:bg-[#203352] transition-all duration-300 max-[800px]:hidden"
        >
          Check The Course
        </Link>
      )}

      <div className="text-white flex justify-center items-center gap-4 ">
        {isAuth && !loading? (
          <Image
            width={50}
            height={50}
            alt="user"
            src={"/User.png"}
            className="rounded-[17px] w-11 hover:cursor-pointer"
            onClick={showSideBar}
          />
        ) :!isAuth && !loading? (
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
        ):loading && !isAuth &&<div><LoadingSpinner/></div>}
      </div>
    </div>
  );
}

export default NavBar;
