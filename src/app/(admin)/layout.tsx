"use client";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { MernApi } from "@/api/apiSlice";
import AdminAuthGuard from "./AdminAuthGuard"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ApiProvider api={MernApi}>
          <AdminAuthGuard>{children}</AdminAuthGuard> 
        </ApiProvider>
      </body>
    </html>
  );
}
