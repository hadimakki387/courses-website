"use client"

import { MernApi } from "@/api/apiSlice";
import Index from "@/components/profilePage/Index";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

import React from "react";

function page() {
  return (
    <ApiProvider api={MernApi}>
      <div className="h-full course-lighter-bg-color">
        <Index />
      </div>
    </ApiProvider>
  );
}

export default page;
