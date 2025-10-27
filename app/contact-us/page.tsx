"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Geist, Wittgenstein } from "next/font/google";
import Link from "next/link";
import ContactCards from "../components/Contactcards";
import StayTune from "@/app/components/StayTune";
import { inputBase, labelBase, buttonBase, requiredMark } from "@/Components/ui/form-styles";


// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const wittgenstein = Wittgenstein({
  variable: "--font-wittgenstein",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



// Validation Schema
const contactFormSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(30, { message: "First name cannot exceed 30 characters" }),
  lastname: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(30, { message: "Last name cannot exceed 30 characters" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9+\s()-]+$/.test(val), {
      message: "Enter a valid phone number",
    }),
  message: z
    .string()
    .min(5, { message: "Message should be at least 5 characters long" })
    .max(500, { message: "Message cannot exceed 500 characters" })
    .optional(),
});


export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log("✅ Submitted:", values);

    // Here you can send data to your API if needed:
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });

    form.reset(); // ✅ clear all fields
    setSubmitted(true); // ✅ show success message

    // hide message after few seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section className={`${geistSans.className}`}>
        <div className="max-w-[1376px] mx-auto py-[48px] px-[16px] lg:py-[64px] lg:px-[32px]">
          <div className="text-center">
            <h1
              className={`text-[#111] text-[48px] leading-[57.6px] mb-[20px]
              md:text-[64px] md:leading-[76.8px] md:mb-[24px] ${wittgenstein.className}`}
            >
              Send Us a Message
            </h1>
            <p className="text-[#444] text-[16px] leading-[24px]
              md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
              mx-auto lg:max-w-[492px] md:max-w-[492px] max-w-[343px] text-center">
              If your query is related to orders, shipping, or returns,
              please visit our{" "}
              <Link className="underline" href="/faqs">
                FAQs Page
              </Link>{" "}
              first for quick answers.
            </p>
          </div>
        </div>
      </section>

      <section className={`${geistSans.className}`}>
        <div className="max-w-[720px] mx-auto px-[16px] pb-[48px] md:px-0 md:pb-[64px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* First & Last Name */}
              <div className="flex gap-[20px] flex-col md:flex-row md:gap-[24px]">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel className={labelBase}>
                        First name <span className={requiredMark}>*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter first name"
                          className={inputBase}
                        />
                      </FormControl>
                      <FormMessage className="text-[#DC2626] text-sm mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel className={labelBase}>
                        Last name <span className={requiredMark}>*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter last name"
                          className={inputBase}
                        />
                      </FormControl>
                      <FormMessage className="text-[#DC2626] text-sm mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email */}
              <div className="mt-[20px] md:mt-[24px]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelBase}>
                        Email <span className={requiredMark}>*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter email"
                          className={inputBase}
                        />
                      </FormControl>
                      <FormMessage className="text-[#DC2626] text-sm mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Phone */}
              <div className="mt-[20px] md:mt-[24px]">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelBase}>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter phone number"
                          className={inputBase}
                        />
                      </FormControl>
                      <FormMessage className="text-[#DC2626] text-sm mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message */}
              <div className="mt-[20px] md:mt-[24px] mb-[32px]">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelBase}>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Leave us a message..."
                          className={`${inputBase} min-h-[106px]`}
                        />
                      </FormControl>
                      <FormMessage className="text-[#DC2626] text-sm mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit */}
              <div>
                <button type="submit" className={buttonBase}>
                  Send Message
                </button>
              </div>
            </form>
          </Form>
        </div>
      </section>

      <ContactCards />
      <StayTune />
    </>
  );
}
