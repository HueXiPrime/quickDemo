"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PinInput } from "@/components/pin-input";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const router = useRouter();
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.every((digit) => digit !== "") && agreed) {
      // Handle submission
      router.push("/privacy-policy");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-4xl font-serif">Robbin</h1>
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Robbin bird"
              width={24}
              height={24}
            />
          </div>
          <div className="w-full h-[1px] bg-gray-200" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-center">
              Please type in your 5 digit member code, given to you by your
              provider
            </h2>
            <PinInput value={pin} onChange={setPin} />
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <label htmlFor="terms" className="text-sm leading-none">
                By checking this box, you agree to the{" "}
                <Link href="/terms" className="underline">
                  Terms and Conditions
                </Link>
                , including our policies on refunds, renewals, and data
                privacy.*
              </label>
            </div>

            <Button
              type="submit"
              disabled={!agreed || pin.some((digit) => digit === "")}
              className="w-full h-14 text-xl rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
