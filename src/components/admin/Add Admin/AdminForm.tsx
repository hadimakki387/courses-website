"use client";

import React, { useState } from "react";
import TextInput from "../Add Video/Admin components/TextInput";
import SubmitButton from "../Add Video/Admin components/SubmitButton";

function AdminForm() {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });

  const getEmail = (e: any) => {
    setData({ ...Data, email: e.target.value });
  };

  const getPassword = (e: any) => {
    setData({ ...Data, password: e.target.value });
  };

  const fetchAdmin = ()=>{
    console.log(Data)
  }

 
  return (
    <div className="w-full">
      <form action="" method="post" className="w-full">
        <TextInput
          name="AdminEmail"
          placeholder="enter the email of the new admin"
          title="Email"
          type="email"
          handleChange={getEmail}
        />
        <TextInput
          name="AdminPassword"
          placeholder="enter the Password of the new admin"
          title="Password"
          type="password"
          handleChange={getPassword}
        />
        <div className="w-full flex justify-center">
          <SubmitButton fetchNewVideo={fetchAdmin}/>
        </div>
      </form>
    </div>
  );
}

export default AdminForm;
