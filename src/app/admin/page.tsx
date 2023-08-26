"use client";

import { MernApi } from "@/api/apiSlice";
import AdminIndex from "@/components/admin/AdminIndex";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

function Page() {
  return (
    <ApiProvider api={MernApi}>
      <AdminIndex />
    </ApiProvider>
  );
}

export default Page;
