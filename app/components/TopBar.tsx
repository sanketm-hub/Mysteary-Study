"use client";

import React from "react";
import { Geist, Wittgenstein } from "next/font/google";

// Google Fonts setup
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});


export default function TopBar(){
    return(
        <>
        <section className={`bg-[#CEE3BC] ${geistSans.className}`}>
            <div className="max-w-[1376px] mx-auto py-[10px] px-[16px] md:py-[10px] md:px-[24px] lg:py-[10px] lg:px-[32px]">
                <div className="flex justify-center items-center">
                    <p className="text-[#1A2E05] font-normal text-[12px] leading-[18px]">Free shipping on Canadian orders over <span className="font-semibold">$150</span></p>
                </div>

            </div>
        </section>
        </>
    );
}