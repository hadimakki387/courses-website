"use client";

import { useGetUserQuery, useMernQueryMutation } from "@/api/apiSlice";
import UnauthorizedPage from "@/components/unauthorized/UnauthorizedPage";
import React, { useEffect, useLayoutEffect } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/loading/LoadingScreen";

function AdminAuthGuard({ children }: { children: React.ReactNode }) {

  const { data: user, isLoading } = useGetUserQuery({ });
  const router = useRouter();

  useLayoutEffect(() => {
    if (!user && !isLoading) {
      router.push("/");
    }
  }, [user, isLoading]);


  return (
    <>
      {user && !isLoading && user?.isAdmin ? (
        <>{children}</>
      ) : (!user && !isLoading) || !user?.isAdmin  ? (
        <div className="course-lighter-bg-color">
          <UnauthorizedPage />
        </div>
      ) : !user && isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center bg-zinc-950">
          <LoadingScreen />
        </div>
      ) : null}
    </>
  );
}

export default AdminAuthGuard;
