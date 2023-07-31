"use client";

import Header from "./components/Landing Page/Header";
import WebsiteCourses from "./components/Landing Page/WebsiteCourses";
import Plans from "./components/Landing Page/plans/Plans";
import NavBar from "./components/NavBar";
import Video from "./components/Video";

export default function Home() {
  return (
    <div className=" main">
      <NavBar />
      <div className="mx-64">
        <Header/>
        <WebsiteCourses/>
        <Plans/>
      </div>
      
    </div>
  );
}
