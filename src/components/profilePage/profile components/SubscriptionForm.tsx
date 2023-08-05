import TextInput from "@/components/admin/Add Video/Admin components/TextInput";
import React, { useContext, useState } from "react";
import CheckBoxes from "./sub inputs/CheckBoxes";
import FileInput from "./sub inputs/FileInput";
import { ProfileContext } from "@/context/ProfileContext";

function SubscriptionFrom() {
  const [ShowEditInfo,editProfile,planSettings] = useContext(ProfileContext)
  const [plan,setPlan] = useState("")
  const [img,setImg]=useState("")
  const [password,setPassword]=useState("")


  const Image = (e:any) =>{
    setPlan(e.target.value)
    console.log(e.target.value)
  }
  const getPassword = (e:any) =>{
    setPassword(e.target.value)
  }

  const sendPlanData = ()=>{
    planSettings({
      plan:plan,
      billingInfo:img,
      password:password
    })
  }

  return (
    <div className="flex flex-col gap-2">
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
            <CheckBoxes setPlan={setPlan}/>
          </div>

          <FileInput />

          <TextInput
            name="password"
            type="password"
            placeholder="password"
            title="Enter Your Password"
            handleChange={getPassword}
          />
          <div className="flex w-full justify-start gap-4">
            <button onClick={sendPlanData} className="px-4 py-2 bg-[#24395a] rounded-lg hover:bg-[#1f304d] hover:text-sky-500 transition-all duration-300">
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
    </div>
  );
}

export default SubscriptionFrom;
