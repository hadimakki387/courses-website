"use client"

import { MernApi } from "@/api/apiSlice";
import Index from "@/components/coursePage/Index";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React ,{ useState } from "react";



function page() {


  return (
    <ApiProvider api={MernApi}>
      <Index/>
    </ApiProvider>
    
  );
}

export default page;
