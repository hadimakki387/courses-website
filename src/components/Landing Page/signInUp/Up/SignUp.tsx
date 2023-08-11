import React, { useState } from "react";
import "./signUp.css";
import CloseSvg from "../In/SVGs/CloseSvg";
import Email from "../In/Inputs/Email";
import PasswordInput from "../In/Inputs/PasswordInput";
import NameInput from "./NameInput";

function SignUp({
  showSignUp,
  getSignUpData,
}: {
  showSignUp: any;
  getSignUpData: any;
}) {
  const [signInData, setSignInData] = useState({});
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [nameValid,setNameValid] = useState(false)


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValid && passwordValid && nameValid) {
      console.log("fetch sent")
      getSignUpData(signInData);
      console.log(signInData);
    }
  console.log("not sent ")
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div
      className=" bg-panel-900  text-white relative md:rounded-2xl max-h-90 md:mx-auto w-full overflow-auto px-6 py-9 flex flex-col mt-auto lg:mt-0 snipcss-sMhwa style-o6bUK"
      data-v-2836fdb5=""
      id="style-o6bUK"
    >
      <button
        className="pin-0 absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-xl bg-blue/10 text-white transition-colors duration-300 hover:bg-grey-500 hover:text-blue md:top-[20px] md:right-[20px] md:h-10 md:w-10"
        onClick={showSignUp}
      >
        <CloseSvg />
      </button>
      <section className="h-full w-full p-16 max-[480px]:p-7 lg:px-4 style-tQjk2 ">
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
                    Sign Up
                  </h1>
                  <div className="mt-8">
                    {/* Here goes the form */}
                    <form onSubmit={handleSubmit}>
                      <div className="control" data-js="password_field">
                        <NameInput
                          name="userName"
                          handleInputChange={handleInputChange}
                          setNameValid={setNameValid}
                        />
                      </div>
                      <div className="control" data-js="email_field">
                        <Email
                          name="signUpEmail"
                          handleInputChange={handleInputChange}
                          setEmailValid={setEmailValid}
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
                            emailValid && passwordValid && nameValid
                              ? ""
                              : "hover:cursor-not-allowed"
                          }`}
                          type="submit"
                        >
                          <span className="text-wrap inline-block flex-shrink-0">
                            Sign Up
                          </span>
                        </button>

                        <button className="mx-auto mt-4 block text-sm text-grey-600 hover:underline">
                          Login
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

export default SignUp;
