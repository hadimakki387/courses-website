'use client'
import React from "react";
import VideosBar from "../components/coursePage/VideosBar";
import NavBar from "../components/NavBar";

function page() {
  return (
    <div className="bg-[#0d131d] ">
      <NavBar showSignIn={()=>{console.log("hello")}} showSignUp={()=>{console.log("hello")}}/>
      <div className="flex">
        <VideosBar />
        
      </div>
    </div>
  );
}

export default page;
