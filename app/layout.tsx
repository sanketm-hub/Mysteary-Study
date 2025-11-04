import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Geist, Wittgenstein } from "next/font/google";
import LayoutWrapper from "./LayoutWrapper";
import { AuthProvider } from "@/app/context/AuthContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const wittgenstein = Wittgenstein({
  variable: "--font-wittgenstein",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MyTEAry",
  description: "Premium tea and wellness store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${wittgenstein.variable} antialiased`}
      >
         <AuthProvider>
        <LayoutWrapper>{children}</LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
