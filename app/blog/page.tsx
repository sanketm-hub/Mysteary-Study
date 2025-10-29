"use client";

import React from "react";
import Image from "next/image";
import { Geist, Wittgenstein } from "next/font/google";
import StayTune from "@/app/components/StayTune";
import CustomBreadscrum from "../components/CustomBreadscrumb";
import Link from "next/link";


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
           <div className="max-w-[1376px] mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-16 lg:pb-20">
                <div className="flex flex-row justify-between items-center gap-1">
                    <div className="flex flex-row items-center gap-5 md:gap-6 lg:gap-6">
                        <div>
                            <p className="text-[#666] text-[14px] leading-[16.8px] md:text-[16px] md:leading-[19.2px] lg:text-[16px] lg:leading-[19.2px]">
                                Filter:
                            </p>
                        </div>
                        <div className="flex flex-row gap-1.5 md:gap-3 lg:gap-3">
                          
                            <select className="py-1.5 px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 bg-white border border-[#DBDBDB]
                            text-[#444] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]
                            md:w-[115px] lg:w-[115px]">
                                <option value="">Category</option>
                                <option value="tea">Tea</option>
                                <option value="candle">candle</option>
                                <option value="Soap">Soap</option>
                            </select>
                            <select className="py-1.5 px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 bg-white border border-[#DBDBDB]
                            text-[#444] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
                                <option value="">Featured</option>
                                <option value="tea">None</option>
  
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-[#666] text-[14px] leading-[16.8px] md:text-[16px] md:leading-[19.2px] lg:text-[16px] lg:leading-[19.2px]">
                            50 blogs
                        </p>
                    </div>
                </div>
                <div className="py-12 md:py-16 lg:py-16">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    <div className="border border-[#DBDBDB] rounded-[6px] overflow-hidden duration-300 hover:shadow-lg">
                       <Link href="#">
                        <div>
                            <Image
                            src="/assets/blog/blog_image.webp"
                            alt="Blog Featured Image"
                            width={437}
                            height={240}
                            className="w-full object-cover h-auto md:h-[240px] lg:h-[240px]" />
                        </div>
                        <div className="p-5 md:p-8 lg:p-8">
                            <div className="pb-5 md:pb-6 lg:pb-6">
                                <h4 className="text-[#111] font-medium mb-1.5 lg:mb-2 md:mb-2
                                text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                                    The Secret to a Perfect Cup of Green Tea
                                </h4>
                                <p className="text-[#666] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
                                    Discover steeping techniques that unlock flavor and maximize health benefits.
                                </p>
                            </div>
                            <div>
                                <Link href="#" 
                                className="py-3.5 px-8 bg-white text-[#1A2E05] border border-[#CEE3BC] inline-block text-center 
                                w-full text-[16px] leading-6 md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
                                hover:bg-[#CEE3BC]">
                                    Read More
                                </Link>
                            </div>
                        </div>
                       </Link>
                    </div>
                    <div className="border border-[#DBDBDB] rounded-[6px] overflow-hidden duration-300 hover:shadow-lg">
                       <Link href="#">
                        <div>
                            <Image
                            src="/assets/blog/Aromatherapy.webp"
                            alt="Blog Aromatherapy"
                            width={437}
                            height={240}
                            className="w-full object-cover h-auto md:h-[240px] lg:h-[240px]" />
                        </div>
                        <div className="p-5 md:p-8 lg:p-8">
                            <div className="pb-5 md:pb-6 lg:pb-6">
                                <h4 className="text-[#111] font-medium mb-1.5 lg:mb-2 md:mb-2
                                text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                                    How Aromatherapy Candles Transform Your Space
                                </h4>
                                <p className="text-[#666] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
                                    Discover steeping techniques that unlock flavor and maximize health benefits.
                                </p>
                            </div>
                            <div>
                                <Link href="#" 
                                className="py-3.5 px-8 bg-white text-[#1A2E05] border border-[#CEE3BC] inline-block text-center 
                                w-full text-[16px] leading-6 md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
                                hover:bg-[#CEE3BC]">
                                    Read More
                                </Link>
                            </div>
                        </div>
                       </Link>
                    </div>
                    <div className="border border-[#DBDBDB] rounded-[6px] overflow-hidden duration-300 hover:shadow-lg">
                       <Link href="#">
                        <div>
                            <Image
                            src="/assets/blog/Natural_Ingredients.webp"
                            alt="Blog Natural Ingredients"
                            width={437}
                            height={240}
                            className="w-full object-cover h-auto md:h-[240px] lg:h-[240px]" />
                        </div>
                        <div className="p-5 md:p-8 lg:p-8">
                            <div className="pb-5 md:pb-6 lg:pb-6">
                                <h4 className="text-[#111] font-medium mb-1.5 lg:mb-2 md:mb-2
                                text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                                    Top 5 Natural Ingredients for Glowing Skin
                                </h4>
                                <p className="text-[#666] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
                                    Discover steeping techniques that unlock flavor and maximize health benefits.
                                </p>
                            </div>
                            <div>
                                <Link href="#" 
                                className="py-3.5 px-8 bg-white text-[#1A2E05] border border-[#CEE3BC] inline-block text-center 
                                w-full text-[16px] leading-6 md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
                                hover:bg-[#CEE3BC]">
                                    Read More
                                </Link>
                            </div>
                        </div>
                       </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center text-center items-center">
                    <button className="py-3.5 px-8 md:py-4 md:px-8 lg:py-4 lg:px-8 bg-[#CEE3BC] border border-[#CEE3BC] text-[#1A2E05]
                    text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
                    w-fit cursor-pointer hover:bg-[#fff]">
                        Load More
                    </button>

                </div>              
            </div>

        </section>
        </>
    );
}