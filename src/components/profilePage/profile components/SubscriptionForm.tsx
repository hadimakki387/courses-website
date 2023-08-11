import TextInput from "@/components/admin/Add Video/Admin components/TextInput";
import React, { useContext, useEffect, useState } from "react";
import CheckBoxes from "./sub inputs/CheckBoxes";
import { ProfileContext } from "@/context/ProfileContext";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import "@uploadthing/react/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function SubscriptionFrom() {
  const [ShowEditInfo, editProfile, planSettings, data, user] =
    useContext(ProfileContext);
  const [plan, setPlan] = useState("");
  const [img, setImg]: any = useState({
    imgURL: "",
    imgID: "",
  });
  const [password, setPassword] = useState("");
  const [res, setRes] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);
  
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const validatePassword = (input: string) => {
    const minLength = 8;

    return input.length >= minLength;
  };

  const getPassword = (e: any) => {
    setPassword(e.target.value);
    setPasswordValid(validatePassword(e.target.value))
  };

  console.log(passwordValid)

  const sendPlanData = () => {
    if (plan && img.imgURL && img.imgID && password && passwordValid) {
      planSettings({
        plan: plan,
        billingImg: img,
        password: password,
      });
      console.log("sent");
    }
    console.log("cant be sent");
  };
  useEffect(() => {
    res.forEach((res) => {
      setImg({ imgURL: res.fileUrl, imgID: res.fileKey });
    });
  }, [res]);

  const date = new Date(user.subscribed_at);
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);

  const currentDate: any = new Date();
  const timeDifference = currentDate - new Date(user.subscribed_at).getTime();
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const sub = data.plans.find((plan: any) => plan._id === user.plan);

  return (
    <div className={`flex flex-col gap-2`}>
      {data ? (
        <>
          <div className="flex items-center gap-2">
            <p>Current Subscription:</p>
            <p className="text-sm sm-text-c bg-[#24395a] px-2 py-1 rounded-lg">
              {sub ? sub.name : "Free"}
            </p>
          </div>
          {!user.plan ? (
            <div className="flex flex-col gap-2">
              <div>Want to upgrade your subscription?</div>
              <div className="flex flex-col gap-4">
                <div>
                  <div>choose a plan</div>
                  <CheckBoxes setPlan={setPlan} Plan={plan} />
                </div>

                {/* this is the file input  */}
                <div>
                  <main className="justify-between  bg-[#1e2f4b] hover:bg-[#213452] transition-all duration-300">
                    <UploadDropzone<OurFileRouter>
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        // Do something with the response
                        if (res) {
                          setRes(res);
                        }

                        console.log("Upload Completed");
                      }}
                      onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </main>
                  {img.imgURL && img.imgID && (
                    <p className="text-sm mt-1 text-green-600">
                      Your Image Is Uploaded <FontAwesomeIcon icon={faCheck} />
                    </p>
                  )}
                </div>

                {/* this is the file input */}
                <div>
                  <TextInput
                    name="password"
                    type="password"
                    placeholder="password"
                    title="Enter Your Password"
                    handleChange={getPassword}
                  />
                  {!passwordValid && password && <p className="text-sm text-red-600 relative bottom-5">at least 8 digits</p>}
                </div>

                <div className="flex w-full justify-start gap-4">
                  <button
                    onClick={sendPlanData}
                    className={`px-4 py-2 bg-[#24395a] rounded-lg hover:bg-[#1f304d] hover:text-sky-500 transition-all duration-300 ${
                      !plan || !img.imgURL || !img.imgID || !password ||!passwordValid
                        ? "hover:cursor-not-allowed"
                        : "hover:cursor-pointer"
                    }`}
                  >
                    Submit
                  </button>
                  <button
                    onClick={ShowEditInfo}
                    className="px-4 py-2 bg-[#24395a] rounded-lg hover:bg-[#1f304d] hover:text-sky-500 transition-all duration-300"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex  items-center gap-4">
              <div>Subscribed At {formattedDate}</div>{" "}
              <div>{sub.name !== "Forever"&&(sub.duration - daysPassed) +"days left"}</div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex justify-center items-center h-[20rem]">
            loading...
          </div>
        </>
      )}
    </div>
  );
}

export default SubscriptionFrom;
