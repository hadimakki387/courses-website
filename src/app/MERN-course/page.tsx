'use client'
import Index from "@/components/coursePage/Index";
import VideosDB from "@/Queries/VideosDB";
import React, { useState, useEffect } from "react";

function page() {
 
  const videos = VideosDB()


  
  return<div><Index /></div> ;
}

export default page;
