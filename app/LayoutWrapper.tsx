"use client";

import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

import { usePathname } from "next/navigation";
import HeaderWrapper from "./components/HeaderWrapper";



export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = ["/signup", "/login"].includes(pathname);

  return (
    <>
      {!hideLayout && <TopBar />}
      {!hideLayout && <HeaderWrapper />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
