"use client";

import React from "react";
import Image from "next/image";
import { Geist, Wittgenstein } from "next/font/google";

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

export default function ContactCards(){
    return(
                 <section className={`${geistSans.className}`}>
                        <div className="max-w-[1376px] mx-auto pb-[64px] px-[16px] md:pb-[80px] md:px-[24px] lg:pb-[80px] lg:px-[32px]">
                            <div className="flex flex-col md:flex-row lg:flex-row">
                                <div className="w-full md:w-1/3 lg:w-1/3 flex flex-col items-center text-center md:pr-[24px] md:pb-0 lg:pr-0 lg:pb-0
                                pb-[20px] pr-0">
                                    <Image
                                        src="/assets/contact/email.svg"
                                        alt="Email Contact Icon"
                                        width={48}
                                        height={48}
                                        className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[48px] lg:h-[48px] object-cover mb-[16px] md:mb-[20px] lg:mb-[20px]"
                                    />
                                    <h3 className="text-[#111] font-medium text-[16px] leading-[24px] mb-[8px]
                                 md:text-[20px] md:leading-[30px] md:mb-[12px] lg:text-[20px] lg:leading-[30px] lg:mb-[12px]">
                                        Email
                                    </h3>
                                    <p className="text-[#1A2E05] text-[16px] leading-[24px]
                                 md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                                        <a href="mailto:support@mystearious.com" className="underline">support@mystearious.com</a>
                                    </p>
                                </div>
        
                                <div className="w-full md:w-1/3 lg:w-1/3 flex flex-col items-center text-center border-[#DBDBDB] lg:border-l-[1px] lg:border-r-[1px]
                                md:border-l-[1px] md:border-r-[1px] md:border-t-0 md:border-b-0 border-t-[1px] border-b-[1px] lg:border-t-0 lg:border-b-0
                                lg:px-0 px-[12px] lg:py-0 md:py-0 py-[20px]">
                                    <Image
                                        src="/assets/contact/location.svg"
                                        alt="Office Location Icon"
                                        width={48}
                                        height={48}
                                        className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[48px] lg:h-[48px] object-cover mb-[16px] md:mb-[20px] lg:mb-[20px]"
                                    />
                                    <h3 className="text-[#111] font-medium text-[16px] leading-[24px] mb-[8px]
                                 md:text-[20px] md:leading-[30px] md:mb-[12px] lg:text-[20px] lg:leading-[30px] lg:mb-[12px]">
                                        Office
                                    </h3>
                                    <p className="text-[#1A2E05] text-[16px] leading-[24px] underline
                                 md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] max-w-[230px] md:max-w-[255px] lg:max-w-[255px]">
                                        MysTEAry Headquarters Toronto, ON, Canada
                                    </p>
        
                                </div>
        
                                <div className="w-full md:w-1/3 lg:w-1/3 flex flex-col items-center text-center md:pl-[24px] md:pt-0 lg:pl-0 lg:pt-0
                                pt-[20px]  pl-0">
                                    <Image
                                        src="/assets/contact/phone.svg"
                                        alt="Phone COntact Icon"
                                        width={48}
                                        height={48}
                                        className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[48px] lg:h-[48px] object-cover mb-[16px] md:mb-[20px] lg:mb-[20px]"
                                    />
                                    <h3 className="text-[#111] font-medium text-[16px] leading-[24px] mb-[8px]
                                 md:text-[20px] md:leading-[30px] md:mb-[12px] lg:text-[20px] lg:leading-[30px] lg:mb-[12px]">
                                        Phone
                                    </h3>
                                    <p className="text-[#1A2E05] text-[16px] leading-[24px]
                                 md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                                        <a href="tel:+1 (000) 123-4567" className="underline">+1 (000) 123-4567</a>
                                    </p>
                                </div>
                            </div>
        
        
                        </div>
                    </section>
    );
}