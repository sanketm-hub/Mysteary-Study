"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/lib/registerUser";
import { useAuth } from "@/app/hooks/useAuth";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  if (password !== confirm) return toast.error("Passwords do not match");

  setLoading(true);
  const result = await registerUser(name, email, password);
  setLoading(false);

  if (result.success && result.user) {
    login(result.user);
    toast.success(" You have successfully registered!");
    router.push("/"); // redirect to homepage
  } else {
    toast.error(result.message || "Registration failed. Try again.");
  }
};


  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-10">
        <div className="max-w-md mx-auto w-full">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="mb-6"
          />
          <h1 className="text-[#111] text-2xl md:text-[32px] font-medium mb-2">
            Create Your Account
          </h1>
          <p className="text-[#666] text-[14px] md:text-[16px] mb-8">
            Join MyTEAry to explore premium teas, candles, and soaps.
          </p>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-[#DBDBDB] bg-white shadow-sm text-[#666] p-3 rounded-none"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-[#DBDBDB] bg-white shadow-sm text-[#666] p-3 rounded-none"
              />
            </div>

            <div className="relative">
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type={showPass ? "text" : "password"}
                placeholder="Create your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-[#DBDBDB] bg-white shadow-sm text-[#666] p-3 rounded-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-[38px] text-[#666]"
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative">
              <Label htmlFor="confirm">Confirm Password *</Label>
              <Input
                id="confirm"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className="border border-[#DBDBDB] bg-white shadow-sm text-[#666] p-3 rounded-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-[38px] text-[#666]"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1A2E05] text-white py-3.5 text-[16px] rounded-none"
            >
              {loading ? "Registering..." : "Confirm & Continue"}
            </Button>

            <p className="text-center text-[#666] text-[14px]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#111] underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-[#F9FAFB]">
        <Image
          src="/assets/signup-image.jpg"
          alt="Signup Side Image"
          width={600}
          height={800}
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
}
