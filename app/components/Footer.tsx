import React from "react";
import Image from "next/image";
import { Geist, Wittgenstein } from "next/font/google";
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

export default function Footer() {
    return (
        <footer className={`bg-[#020300] ${geistSans.className}`}>
            <div className="max-w-[1376] mx-auto pt-[64px] pb-[24px] px-[16px]
            md:pt-[80px] md:pb-[32px] md:px-[24px] lg:pt-[80px] lg:pb-[32px] lg:px-[32px]">
                <div className="flex flex-col md:flex-col lg:flex-row gap-[40px] md:gap-[40px] lg:gap-[64px]">
                    <div className="w-full md:w-full lg:w-[353px]">
                        <div className="flex flex-col items-start md:flex-row lg:flex-col gap-[24px] lg:gap-[32px] lg:pr-[32px]
                            md:items-center lg:items-start md:justify-between">
                            <div>
                                <Image
                                    src="assets/ft_logo.svg"
                                    alt="logo"
                                    width={60}
                                    height={54}
                                    className="object-cover w-[60px] h-[54px] mb-[8px] md:mb-[12px] lg:mb-[12px]" />
                                <p className="text-[#fff] text-[14px] leading-[21px]
                                    lg:max-w-[292px] md:max-w-[292px] max-w-[343px]">
                                    Shop curated bundles for tea, candles & soaps — save on perfect ritual sets.
                                </p>
                            </div>
                            <div className="md:pr-[32px]">
                                <Link href="/contact-us"
                                    className="bg-[#D0E7BE] text-[#1A2E05] border border-[#CEE3BC]
                                    md:py-[12px] md:px-[24px] lg:py-[12px] lg:px-[24px] py-[12px] px-[20px]
                                    text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]
                                    hover:bg-[#fff] inline-block"
                                >
                                    Contact Us
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className="w-full md:w-full lg:w-[832px]">
                        <div className="grid grid-cols-2 gap-[32px] md:grid-cols-4 md:gap-[40px] lg:grid-cols-4 lg:gap-[64px]">
                            <div>
                                <h4 className={`text-[#fff] ${wittgenstein.className}
                                    text-[14px] leading-[16.8px] md:text-[18px] md:[21.6px] lg:text-[18px] lg:[21.6px]
                                    mb-[16px] md:mb-[32px] lg:mb-[32px]`}>
                                    Products
                                </h4>
                                <ul className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[16px]">
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            Candles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            Teas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            Soaps
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className={`text-[#fff] ${wittgenstein.className}
                                    text-[14px] leading-[16.8px] md:text-[18px] md:[21.6px] lg:text-[18px] lg:[21.6px]
                                    mb-[16px] md:mb-[32px] lg:mb-[32px]`}>
                                    Our Site
                                </h4>
                                <ul className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[16px]">
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className={`text-[#fff] ${wittgenstein.className}
                                    text-[14px] leading-[16.8px] md:text-[18px] md:[21.6px] lg:text-[18px] lg:[21.6px]
                                    mb-[16px] md:mb-[32px] lg:mb-[32px]`}>
                                    Customer Care
                                </h4>
                                <ul className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[16px]">
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            FaQs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            Shipping Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            Return & Refund Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className={`text-[#fff] ${wittgenstein.className}
                                    text-[14px] leading-[16.8px] md:text-[18px] md:[21.6px] lg:text-[18px] lg:[21.6px]
                                    mb-[16px] md:mb-[32px] lg:mb-[32px]`}>
                                    Follow Us
                                </h4>
                                <ul className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[16px]">
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            X / Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="text-[#fff] text-[12px] leading-[18px]
                                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                            TikTok
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[24px]  md:mt-[35px] lg:mt-[35px] border-t-1 border-[rgba(255, 255, 255, 0.20)]">
                    <div className="flex flex-col-reverse md:flex-row justify-center items-center content-center gap-[12px] pt-[20px] md:pt-[32px] lg:pt-[32px]">
                        <p className="text-center md:text-right text-[#fff] text-[12px] leading-[18px]
                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                            ©MysTEAry{new Date().getFullYear()}. All Rights Reserved
                        </p>
                        <div className="flex flex-wrap justify-center gap-[12px]">
                            <div className="lg:w-[0.5px] lg:h-[24px] md:w-[0.5px] md:h-[24px] w-[0.5px] h-[18px] bg-white
                                  lg:block md:block hidden" />
                            {/* <Separator  orientation="vertical" className="inline-block !bg-[#fff] !w-[1px] !h-[20px]" /> */}

                            <Link href="#" className="hover:text-gray-300 text-[#fff] text-[12px] leading-[18px]
                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                Terms of Service
                            </Link>
                            <div className="lg:w-[0.5px] lg:h-[24px] md:w-[0.5px] md:h-[24px] w-[0.5px] h-[18px] bg-white" />
                            {/* <Separator orientation="vertical" className="inline-block !bg-[#fff] !w-[1px] !h-[20px]" /> */}

                            <Link href="#" className="hover:text-gray-300 text-[#fff] text-[12px] leading-[18px]
                            md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px]">
                                Privacy Policy
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

        </footer>
    );
}