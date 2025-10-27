import React from "react";
import Image from "next/image";
import { Geist, Wittgenstein } from "next/font/google";
import StayTune from "@/app/components/StayTune";
import ContactCards from "../components/Contactcards";
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


export const labelBase = `
  text-[#111] font-medium text-[12px] leading-[18px]
  md:text-[14px] md:leading-[20px] lg:text-[14px] lg:leading-[20px]
  mb-[6px] block
`;

export const requiredMark = `
  text-[#DC2626] text-[12px] leading-[18px]
  md:text-[14px] md:leading-[20px] lg:text-[14px] lg:leading-[20px]
`;

export const inputBase = `
  py-[12px] px-[16px] w-full text-[#666] text-[14px] leading-[21px]
  md:py-[14px] md:px-[20px] md:text-[16px] md:leading-[24px]
  lg:py-[14px] lg:px-[20px] lg:text-[16px] lg:leading-[24px]
  border border-[#DBDBDB] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]
`;

export const buttonBase = `
  py-[14px] px-[32px] md:py-[16px] md:px-[32px] lg:py-[16px] lg:px-[32px]
  cursor-pointer bg-[#1A2E05] text-[#CBE1BD]
  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px]
  lg:text-[18px] lg:leading-[27px] w-full
`;

export default function Contact() {

    return (
        <>
            <section className={`${geistSans.className}`}>
                <div className="max-w-[1376px] mx-auto py-[48px] px-[16px] lg:py-[64px] lg:px-[32px] md:py-[64px] md:px-[32px]">
                    <div className="text-center">
                        <h1 className={`text-[#111] text-[48px] leading-[57.6px] mb-[20px] lg:text-[64px] lg:leading-[76.8px] lg:mb-[24px]
                        md:text-[64px] md:leading-[76.8px] md:mb-[24px] ${wittgenstein.className}`}>
                            Send Us a Message
                        </h1>
                        <p className="text-[#444] text-[16px] leading-[24px]
                    md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
                    mx-auto lg:max-w-[492px] md:max-w-[492px] max-w-[343px] text-center">
                            If your query is related to orders, shipping, or returns,
                            please visit our <Link className="underline" href="/faqs">FAQs Page</Link> first for quick answers.
                        </p>

                    </div>

                </div>
            </section>

            <section className={`${geistSans.className}`}>
                <div className="max-w-[720px] mx-auto px-[16px] pb-[48px] md:px-0 md:pb-[64px] lg:px-[32px] lg:pb-[64px]">
                    <div>
                        <form>
                            <div className="flex gap-[20px] flex-col md:flex-row md:gap-[24px] lg:flex-row lg:gap-[24px]">
                                <div className="mb-0 w-full
                            md:w-1/2 md:mb-[24px]
                            lg:w-1/2 lg:mb-[24px]">
                                    <label htmlFor="firstname"
                                        className={labelBase}>First name <span className={requiredMark}>*</span></label>

                                    <input type="text"
                                        placeholder="Enter first name"
                                        name="firstname"
                                        id="firstname"
                                        required
                                        className={inputBase} />
                                </div>

                                <div className="mb-[20px] w-full
                            md:w-1/2 md:mb-[24px]
                            lg:w-1/2 lg:mb-[24px]">
                                    <label htmlFor="lastname"
                                        className={labelBase}>Last name <span className={requiredMark}>*</span></label>

                                    <input type="text"
                                        placeholder="Enter last name"
                                        name="lastname"
                                        id="lastname"
                                        required
                                        className={inputBase} />
                                </div>

                            </div>

                            <div className="mb-[20px] md:mb-[24px] lg:mb-[24px]">
                                <label htmlFor="email"
                                    className={labelBase}>Email <span className={requiredMark}>*</span></label>

                                <input type="email"
                                    placeholder="Enter email"
                                    required
                                    name="email"
                                    id="email"
                                    className={inputBase} />

                            </div>

                            <div className="mb-[20px] md:mb-[24px] lg:mb-[24px]">
                                <label htmlFor="phone"
                                    className={labelBase}>Phone Number</label>

                                <input type="tel"
                                    placeholder="Enter phone number"
                                    name="phone"
                                    id="phone"
                                    className={inputBase} />

                            </div>

                            <div className="mb-[32px] md:mb-[32px] lg:mb-[32px]">
                                <label htmlFor="message"
                                    className={labelBase}>Message</label>

                                <textarea name="message"
                                    id="message"
                                    placeholder="Leave us a message..."
                                    className={`${inputBase} min-h-[106px]`}></textarea>

                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className={buttonBase}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>

            {/* <section className={`${geistSans.className}`}>
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
            </section> */}

            <ContactCards />

            <StayTune />


        </>

    );
}