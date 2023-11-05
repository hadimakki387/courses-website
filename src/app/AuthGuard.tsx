"use client";

import { useGetUserQuery, useMernQueryMutation } from "@/api/apiSlice";
import UnauthorizedPage from "@/components/unauthorized/UnauthorizedPage";
import React, { useEffect, useLayoutEffect } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { getIdFromCookie } from "@/utils/globalFunctions/global-functions";

function AuthGuard({ children }: { children: React.ReactNode }) {
 


  const { data: user, isLoading } = useGetUserQuery({id:getIdFromCookie()});
  const router = useRouter();

  useLayoutEffect(() => {
    if (!user && !isLoading) {
      router.push("/");
    }
  }, [user, isLoading]);


  return (
    <>
      {user && !isLoading ? (
        <>{children}</>
      ) : !user && !isLoading  ? (
        <div className="course-lighter-bg-color">
          <UnauthorizedPage />
        </div>
      ) : null}
    </>
  );
}

export default AuthGuard;
