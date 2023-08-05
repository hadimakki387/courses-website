import Index from "@/components/coursePage/Index";
import React, { useState, useEffect } from "react";

function page() {
  const [videos, setVideos] = useState({});
  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch("http://localhost:3000/api/Alvideos");
      const data = await res.json();
      setVideos(data);
    }
    fetchVideos();
  });

  console.log(videos); // hon bt3ml le badk ye fihon btsiir

  return <Index />;
}

export default page;
