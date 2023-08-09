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
  const [ShowEditInfo, editProfile, planSettings, data] =
    useContext(ProfileContext);
  const [plan, setPlan] = useState("");
  const [img, setImg]: any = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);

  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const sendPlanData = () => {
    planSettings({
      plan: plan,
      billingImg: img,
      password: password,
    });
  };
  useEffect(() => {
    res.forEach((res) => {
      console.log(res.fileUrl);
      setImg(res.fileUrl);
    });
  }, [res]);
  console.log(data.plan);

  return (
    <div className="flex flex-col gap-2">
      {data ? (
        <>
          <div className="flex items-center gap-2">
            <p>Current Subscription:</p>
            <p className="text-sm sm-text-c bg-[#24395a] px-2 py-1 rounded-lg">
              Monthly
            </p>
          </div>
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
                {img&&<p className="text-sm mt-1 text-green-600">
                  Your Image Is Uploaded <FontAwesomeIcon icon={faCheck} />
                </p>}
                
              </div>

              {/* this is the file input */}

              <TextInput
                name="password"
                type="password"
                placeholder="password"
                title="Enter Your Password"
                handleChange={getPassword}
              />
              <div className="flex w-full justify-start gap-4">
                <button
                  onClick={sendPlanData}
                  className="px-4 py-2 bg-[#24395a] rounded-lg hover:bg-[#1f304d] hover:text-sky-500 transition-all duration-300"
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
