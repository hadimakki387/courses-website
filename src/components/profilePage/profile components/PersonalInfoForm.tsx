import { useUpdateNameMutation } from "@/api/apiSlice";
import InputText from "@/components/inputs/InputText";
import { ToastType } from "@/constants";
import { ProfileContext } from "@/context/ProfileContext";
import { generateToast, getIdFromCookie, updateToast } from "@/utils/globalFunctions/global-functions";
import React, { useContext, useState } from "react";

function PersonalInfoForm() {
  const [ShowEditInfo, editProfile, planSettings, data] =
    useContext(ProfileContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [updateName] = useUpdateNameMutation();

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const submitData = () => {
   const id = generateToast({
      message:"Updating You Name",
      isLoading:true
    })
    updateName({
      id: getIdFromCookie(),
      data: {
        name: name,
        password: password,
      },
    }).unwrap().then(()=>{
      updateToast(id,"Name updated",{
        toastType:ToastType.success,
        isLoading:false,
        duration:2000
      })
    }).catch((err)=>{
      updateToast(id,`${err.data.message}`,{
        toastType:ToastType.error,
        isLoading:false,
        duration:2000
      })
    })
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
