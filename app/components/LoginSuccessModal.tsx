"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Check, X } from "lucide-react";

export default function LoginSuccessModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  const handleContinue = () => {
    onClose();         // close modal
    router.push("/shop"); // ✅ redirect to shop page
    // router.refresh();
   
  };

    const handleClose = () => {
    onClose();       // close modal state
    
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent aria-describedby={undefined} className="sm:max-w-[420px] w-[90%] rounded-none p-8 bg-white shadow-lg text-center">
        <DialogHeader>
          <div className="flex flex-col items-center">
            {/* ✅ Success Icon */}
            <div className="w-12 h-12 rounded-full bg-[#CEE3BC] flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-[#1A2E05]" />
            </div>

            {/* ✅ Heading */}
            <DialogTitle className="text-xl font-semibold text-[#1A2E05] mb-2">
              Thank you for logging in!
            </DialogTitle>

            {/* ✅ Description */}
            <p className="text-sm text-gray-600 mb-6">
              You’ve successfully signed in. Exciting offers and personalized
              deals are waiting for you in our shop!
            </p>

            {/* ✅ Continue Shopping Button */}
            <Button
              onClick={handleContinue}
              className="w-full bg-[#1A2E05] hover:bg-[#284915] text-white text-[16px] py-5 font-medium"
            >
              Continue Shopping
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
