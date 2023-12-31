import React, { useState } from "react";
import "./signIn.css";
import CloseSvg from "./SVGs/CloseSvg";
import CheckSvg from "./SVGs/CheckSvg";
import Email from "./Inputs/Email";
import PasswordInput from "./Inputs/PasswordInput";
import { useSignInMutation } from "@/api/apiSlice";
import { useRouter } from "next/navigation";
import { ToastType } from "@/constants";
import { generateToast, getUniqueID, updateToast } from "@/utils/globalFunctions/global-functions";

function SignIn({
  showSignUp,
  showSignIn,
}: {
  showSignUp: any;
  showSignIn: any;
}) {
  const [signInData, setSignInData] = useState({});
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [signIn, { data, error }] = useSignInMutation();
  const router = useRouter();


  

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (emailValid && passwordValid) {
    try {
      const id = generateToast({
        message: "Signing You In",
        isLoading: true,
        toastType: ToastType.default
      });

      signIn(signInData)
        .unwrap()
        .then(() => {
          updateToast(id, "You Are Signed In", {
            isLoading: false,
            toastType: ToastType.success,
            duration: 2000
          });
          
            window.location.reload();
        
        })
        .catch((err) => {
          updateToast(id, `${err.data.message}`, {
            isLoading: false,
            toastType: ToastType.error,
            duration: 2000
          });
          console.log(err);
        });
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  }
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div
      className=" bg-panel-900  text-white relative md:rounded-2xl max-h-90 md:mx-auto w-full overflow-auto px-6 py-9 flex flex-col mt-auto lg:mt-0 snipcss-sMhwa style-o6bUK "
      data-v-2836fdb5=""
      id="style-o6bUK"
    >
      <button
        className="pin-0 absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-xl bg-blue/10 text-white transition-colors duration-300 hover:bg-grey-500 hover:text-blue md:top-[20px] md:right-[20px] md:h-10 md:w-10"
        onClick={showSignIn}
      >
        <CloseSvg />
      </button>
      <section className="h-full w-full p-16 max-[480px]:p-7 lg:px-4 style-tQjk2">
        <div
          className="flex h-full flex-col justify-between px-4"
          data-v-2836fdb5-s=""
        >
          <div className="w-full flex-1 md:px-10" data-v-2836fdb5-s="">
            <div
              className="flex h-full items-center md:py-8"
              data-v-2836fdb5-s=""
            >
              <div className="container mx-auto w-full">
                <div className="mx-auto max-w-xs">
                  <h1 className="mb-8 text-center text-3xl font-light tracking-tight">
                    Log In
                  </h1>
                  <div className="mt-8">
                    {/* Here goes the form */}
                    <form onSubmit={handleSubmit}>
                      <div className="control" data-js="email_field">
                        <Email
                          name="email"
                          setEmailValid={setEmailValid}
                          handleInputChange={handleInputChange}
                        />
                      </div>
                      <div className="control" data-js="password_field">
                        <PasswordInput
                          setPasswordValid={setPasswordValid}
                          handleInputChange={handleInputChange}
                        />
                      </div>

                      <div className="mt-10 text-center">
                        <button
                          className={`btn flex-center btn-blue w-full ${
                            emailValid && passwordValid
                              ? ""
                              : "hover:cursor-not-allowed"
                          }`}
                          type="submit"
                        >
                          <span className="text-wrap inline-block flex-shrink-0">
                            Log In
                          </span>
                        </button>
                        <button
                          className="mx-auto mt-4 block text-sm text-grey-600 hover:underline"
                          onClick={showSignUp}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                    {/* Here goes the form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
