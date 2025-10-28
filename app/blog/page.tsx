"use client";

import React from "react";
import Image from "next/image";
import { Geist, Wittgenstein } from "next/font/google";
import StayTune from "@/app/components/StayTune";
import CustomBreadscrum from "../components/CustomBreadscrumb";

// Google Fonts setup
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const wittgenstein = Wittgenstein({
    variable: "--font-wittgenstein",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Blog(){
    return(
        <>
        <section className={`bg-cover bg-center bg-no-repeat 
            lg:bg-[url('/assets/blog/blog_desk_ban.webp')] md:bg-[url('/assets/blog/blog_tab_ban.webp')] 
            bg-[url('/assets/blog/blog_mob_ban.webp')] ${geistSans.className}`}>
            <div className="max-w-[1376px] mx-auto pt-[16px] pb-[48px] px-[16px]
            md:pt-[20px] md:pb-[64px] md:px-[24px] lg:pt-[20px] lg:pb-[64px] lg:px-[32px]
            md:min-h-[347px] min-h-[408px] lg:min-h-[347px]">
                <div className="flex flex-col justify-between gap-[48px] md:gap-[64px] lg:gap-[64px]">
                    <div>
                        <CustomBreadscrum />
                    </div>
                    <div className="flex flex-col gap-[20px] md:gap-[24px] lg:gap-[24px] max-w-[343px] max-auto lg:max-w-[764px] md:max-w-[670px]">
                        <h1 className={`text-[#111] lg:text-[64px] lg:leading-[76.8px]
                md:text-[64px] md:leading-[76.8px] text-[48px] leading-[57.6px] ${wittgenstein.className}`}>
                        The Art of Wellness
                        </h1>
                    <p className={`${geistSans.className} text-[#444] lg:text-[18px] lg:leading-[27px]
                md:text-[18px] md:leading-[27px] text-[16px] leading-[24px] max-w-[236px] md:max-w-[510px] lg:max-w-[756px]`}>
                            Explore our blog for stories, rituals, and tips on natural living. From tea traditions to mindful self-care, find inspiration to bring calm and balance into your daily life.
                        </p>
                    </div>

                </div>

            </div>
        </section>

        <section className={`${geistSans.className}`}>
            <div></div>

        </section>
        </>
    );
}