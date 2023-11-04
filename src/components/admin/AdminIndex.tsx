"use client";

import { useAdminQueryMutation } from "@/api/apiSlice";
import AdminForm from "@/components/admin/Add Admin/AdminForm";
import VideoForm from "@/components/admin/Add Video/VideoForm";
import SidePanel from "@/components/admin/SidePanel";
import ApprovePayments from "@/components/admin/approve payments/ApprovePayments";
import UnauthorizedPage from "@/components/unauthorized/UnauthorizedPage";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../loading/LoadingScreen";

function AdminIndex() {
  const [active, setActive] = useState("videos");
  const [menu, setMenu] = useState(false);



  function handleSetActive(section: string) {
    setActive(section);
    setMenu(!menu);
  }

  function showMenu() {
    setMenu(!menu);
  }



  return (
    <div
      className={`w-full flex bg-zinc-950 text-white ${
        active !== "videos" && active !== "payments" && "h-full"
      }`}
    >

        <>
          <div className=" max-[990px]:hidden">
            <SidePanel
              handleSetActive={handleSetActive}
              active={active}
              showMenu={showMenu}
            />
          </div>
          {menu && (
            <div className="fixed h-full">
              <SidePanel
                handleSetActive={handleSetActive}
                active={active}
                showMenu={showMenu}
              />
            </div>
          )}

          <div className="w-[75vw] max-[990px]:w-screen bg-zinc-900 p-8  ">
            <button className="mb-4 min-[990px]:hidden" onClick={showMenu}>
              Menu
            </button>
            {active === "videos" ? (
              <VideoForm />
            ) : active === "admins" ? (
              <AdminForm />
            ) : (
              <ApprovePayments />
            )}
          </div>
        </>
   
    </div>
  );
}

export default AdminIndex;
