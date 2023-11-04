"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { MernApi } from "@/api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApiProvider api={MernApi}>{children}</ApiProvider>
      </body>
    </html>
  );
}
