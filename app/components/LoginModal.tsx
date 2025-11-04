"use client";

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogTrigger,

} from "@/Components/ui/dialog";

import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { loginUser } from "@/app/lib/auth";
import { toast } from "sonner";
import { useAuth } from "@/app/hooks/useAuth";
import LoginSuccessModal from "./LoginSuccessModal";
import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";


import { Wittgenstein } from "next/font/google";

// Google Fonts setup


const wittgenstein = Wittgenstein({
    variable: "--font-wittgenstein",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function LoginDialog() {
    const { login } = useAuth();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [remember, setRemember] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [showPassword, setShowPassword] = useState(false);


const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const result = await loginUser(email, password);
  setLoading(false);

  if (result.success && result.user) {
    // ✅ Update Auth Context immediately
    login(result.user);

    // ✅ Small delay lets React re-render Header before opening Success Modal
    setTimeout(() => {
      setOpen(false);
      setShowSuccess(true);
    }, 100);
  } else {
    toast.error("Login failed", {
      description: result.message,
    });
  }
};


    return (
        <>
            {/* ✅ Login Popup */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className="bg-[#CEE3BC]  border border-[#CEE3BC] text-[#1A2E05] text-[16px] leading-6 py-3.5 px-6 cursor-pointer hover:bg-white">
                        Login
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[420px] md:max-w-[480px] lg:max-w-[512px] w-[95%] rounded-none p-6 md:p-12 lg:p-12 bg-white shadow-lg flex flex-col gap-10 border-0"
                aria-describedby={undefined}>
                    {/* <DialogClose asChild>
                        <button
                            type="button"
                            className="absolute right-4 top-4 text-[#111] hover:text-[#1A2E05] transition-colors"
                            aria-label="Close"
                        >
                            <X size={22} strokeWidth={1.75} />
                        </button>
                    </DialogClose> */}
                    <DialogHeader>
                        <DialogTitle className={`${wittgenstein.className} text-[#111] font-medium text-2xl md:text-[32px] md:leading-[38.4px]
            lg:text-[32px] lg:leading-[38.4px]`}>
                            Log In
                        </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleLogin} className="space-y-[18px] md:space-y-5 lg:space-y-5">
                        <div className="mb-4.5 md:mb-5 lg:mb-5">
                            <Label htmlFor="email"
                                className="mb-1.5 md:mb-2.5 lg:mb-2.5 text-[#111] font-medium text-[12px] leading-3.5 md:text-[14px] md:leading-[21px]
              lg:text-[14px] lg:leading-[21px]">
                                Email <span className="text-[#DC2626]">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="py-3 px-3.5 md:p-3.5 lg:p-3.5 font-normal text-[#666] text-[14px] leading-[21px]
                md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] border border-[#DBDBDB] bg-white rounded-none"
                                required
                            />
                        </div>

                        <div className="mb-4.5 md:mb-5 lg:mb-5">
                            <Label htmlFor="password"
                                className="mb-1.5 md:mb-2.5 lg:mb-2.5 text-[#111] font-medium text-[12px] leading-3.5 md:text-[14px] md:leading-[21px]
              lg:text-[14px] lg:leading-[21px]">
                                Password <span className="text-[#DC2626]">*</span>
                            </Label>
                            <div className="relative w-full">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="py-3 px-3.5 md:p-3.5 lg:p-3.5 font-normal text-[#666] text-[14px] leading-[21px]
                md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] border border-[#DBDBDB] bg-white rounded-none"
                                />
                                {/* Eye icon toggle */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-[#666] hover:text-[#1A2E05] focus:outline-none"
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} strokeWidth={1.75} />
                                    ) : (
                                        <Eye size={20} strokeWidth={1.75} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-5 md:mb-6 lg:mb-6">
                            <label className="flex items-center gap-2 md:gap-3 lg:gap-3 text-[#111] text-[14px] leading-[21px]
                md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
                                <Checkbox
                                    checked={remember}
                                    onCheckedChange={(checked) => setRemember(!!checked)}
                                    className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px] rounded-none data-[state=checked]:bg-[#3F6212] data-[state=checked]:text-white data-[state=checked]:border-[#3F6212]"
                                />
                                Remember Me
                            </label>
                            <Link href="#" className="text-[#111] underline text-[14px] leading-[21px]
                md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
                                Forgot Password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#1A2E05] hover:bg-[#1A2E05] text-[#CBE1BD] text-[16px] font-normal
              py-3.5 px-8 md:py-4 lg:py-4 text-base md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
              min-h-[52px] md:min-h-[59px] lg:min-h-[59px] cursor-pointer mb-3.5! md:mb-4! lg:mb-4!"
                        >
                            {loading ? "Logging in..." : "Login In"}
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full gap-3 flex items-center justify-center border border-[#DBDBDB] bg-white shadow-sm text-[#111] hover:bg-[#F9FAFB]
                            p-3.5 md:py-4 md:px-8 lg:py-4 lg:px-8 min-h-[52px] md:min-h-[59px] lg:min-h-[59px] cursor-pointer
                            text-base md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] rounded-none mb-5 md:mb-6 lg:mb-6"
                        >
                            <Image
                                src="/assets/google_icon.svg"
                                alt="Google icon"
                                width={24}
                                height={24}
                                className="object-cover w-[24px] h-[24px]"
                            />
                            Sign in with Google
                        </Button>

                        <p className="text-center text-[#666] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px]
                        lg:text-[16px] lg:leading-[24px] flex flex-row gap-2 md:gap-2.5 lg:gap-2.5 justify-center items-center">
                            Don’t have an account?{" "}
                            <Link
                                href="/signup"
                                onClick={() => setOpen(false)}
                                className="text-[#111] font-normal underline text-[16px] leading-[24px]
                                md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </DialogContent>
            </Dialog>

            {/* ✅ Success Modal */}
            <LoginSuccessModal
                open={showSuccess}
                onClose={() => setShowSuccess(false)}
            />
        </>
    );
}
