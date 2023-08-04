import InputText from "@/components/inputs/InputText";
import { ProfileContext } from "@/context/ProfileContext";
import React, { useContext } from "react";

function PersonalInfoForm() {
  const [ShowEditInfo] = useContext(ProfileContext)
  return (
    <div className="flex flex-col ">
      <InputText
        name="UserName"
        type="text"
        placeHolder="enter your new name"
        label="Enter Your Name"
      />
      <InputText
        name="UserName"
        type="password"
        placeHolder="enter your password"
        label="Enter Your Password"
      />
      <div className="flex w-full justify-start gap-4">
        <button className="px-4 py-2 bg-[#24395a] rounded-lg hover:bg-[#1f304d] hover:text-sky-500 transition-all duration-300">
          Submit
        </button>
        <button onClick={ShowEditInfo} className="px-4 py-2 bg-[#24395a] rounded-lg hover:bg-[#1f304d] hover:text-sky-500 transition-all duration-300">
          cancel
        </button>
      </div>
    </div>
  );
}

export default PersonalInfoForm;
