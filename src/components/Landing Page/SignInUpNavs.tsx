import React from "react";
import SignIn from "./signInUp/In/SignIn";
import SignUp from "./signInUp/Up/SignUp";

function SignInUpNavs({
  showSignIn,
  getSignInData,
  showSignUp,
  getSignUpData,
  signUp,
  signIn,
  flash
}: {
  showSignIn: any;
  getSignInData: any;
  showSignUp: any;
  getSignUpData: any;
  signUp: boolean;
  signIn: boolean;
  flash:string
}) {
  return (
    <>
      {/* the signIn/Up windows */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2  text-white z-30 ${
          signIn
            ? "min-[500px]:-translate-y-[50%] max-[500px]:-translate-y-[0]"
            : "-translate-y-[-100%]"
        } transition-all duration-300 max-[1050px]:w-[70vw] max-[650px]:w-[90vw] max-[500px]:bottom-0  max-[500px]:w-screen`}
      >
        <SignIn showSignIn={showSignIn} showSignUp={showSignUp} getSignInData={getSignInData} flash={flash}/>
      </div>

      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2  text-white z-30 ${
          signUp
            ? "min-[500px]:-translate-y-[50%] max-[500px]:-translate-y-[37%]"
            : "-translate-y-[-100%]"
        } transition-all duration-300 max-[1050px]:w-[70vw] max-[650px]:w-[90vw] max-[500px]:bottom-0  max-[500px]:w-screen`}
      >
        <SignUp showSignUp={showSignUp} showSignIn={showSignIn} getSignUpData={getSignUpData} flash={flash}/>
      </div>
    </>
  );
}

export default SignInUpNavs;
