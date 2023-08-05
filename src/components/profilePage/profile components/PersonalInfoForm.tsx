import InputText from "@/components/inputs/InputText";
import { ProfileContext } from "@/context/ProfileContext";
import React, { useContext, useState } from "react";

function PersonalInfoForm() {
  const [ShowEditInfo, editProfile] = useContext(ProfileContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const submitData = () => {
    editProfile({
      name: name,
      password: password,
    });
  };

  return (
    <div className="flex flex-col ">
      <InputText
        name="UserName"
        type="text"
        placeHolder="enter your new name"
        label="Enter Your Name"
        handleChange={handleName}
      />
      <InputText
        name="password"
        type="password"
        placeHolder="enter your password"
        label="Enter Your Password"
        handleChange={handlePassword}
      />
      <div className="flex w-full justify-start gap-4">
        <button
          onClick={submitData}
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
  );
}

export default PersonalInfoForm;
