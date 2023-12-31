"use client"
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { MernApi } from "@/api/apiSlice";
import AuthGuard from "../AuthGuard";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("this is the user layout")
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApiProvider api={MernApi}>
          <AuthGuard>{children}</AuthGuard>
        </ApiProvider>
      </body>
    </html>
  );
}
