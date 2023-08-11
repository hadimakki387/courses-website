'use client'

import SendData from "@/Queries/SendData";
import TextInput from "@/components/admin/Add Video/Admin components/TextInput";
import React, { useState } from "react";

function SignInAdmin() {
  const [admin, setAdmin] = useState({
    adminEmail: "",
    password: "",
  });

  const handleEmail = (e: any) => {
    setAdmin({ ...admin, adminEmail: e.target.value });
  };
  const handlePassword = (e: any) => {
    setAdmin({ ...admin, password: e.target.value });
  };
  const fetchAdmin = ()=>{
    SendData("admin",admin,(res:any)=>{})
    console.log(admin)
  }
 
  return (
    <div className="course-page-bg w-full h-full flex flex-col justify-center items-center">
      <div className="w-1/3">
        <TextInput
          title="Enter Email"
          placeholder="Email..."
          type="text"
          name="email"
          handleChange={handleEmail}
        />
      </div>
      <div className="w-1/3">
        <TextInput
          title="Enter password"
          placeholder="password..."
          type="password"
          name="password"
          handleChange={handlePassword}
        />
      </div>
      <div className="w-1/3 flex justify-center">
        <button onClick={fetchAdmin} className="text-white px-8 py-2 course-lighter-bg-divs rounded-md ">
            submit
        </button>
      </div>
    </div>
  );
}

export default SignInAdmin;
