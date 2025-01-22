"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ChooseFriendPage() {
  const router = useRouter();
  const [selectedFriend, setSelectedFriend] = useState<"man" | "woman" | null>(
    null
  );

  const handleContinue = () => {
    if (selectedFriend) {
      // Store selection and proceed to next page
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-2xl space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif">Robbin</h1>
          <div className="w-full h-[1px] bg-gray-200" />
        </div>

        <div className="space-y-12">
          <h2 className="text-4xl font-serif text-center">
            Choose your friend!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {/* Elderly Man Option */}
            <div className="relative">
              <button
                onClick={() => setSelectedFriend("man")}
                className={cn(
                  "relative w-48 h-48 rounded-full overflow-hidden transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  selectedFriend === "man" &&
                    "ring-4 ring-blue-500 ring-offset-2"
                )}
                aria-label="Select elderly man as your Robbin friend"
              >
                <Image
                  src="/oldMan.png"
                  alt="Elderly man with glasses"
                  fill
                  className="object-cover"
                />
              </button>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full border shadow-sm">
                <p className="whitespace-nowrap text-lg">
                  Hi! I&apos;m Robbin!
                </p>
              </div>
            </div>

            {/* Elderly Woman Option */}
            <div className="relative">
              <button
                onClick={() => setSelectedFriend("woman")}
                className={cn(
                  "relative w-48 h-48 rounded-full overflow-hidden transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  selectedFriend === "woman" &&
                    "ring-4 ring-blue-500 ring-offset-2"
                )}
                aria-label="Select elderly woman as your Robbin friend"
              >
                <Image
                  src="/oldWoman.png"
                  alt="Elderly woman with short hair"
                  fill
                  className="object-cover"
                />
              </button>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full border shadow-sm">
                <p className="whitespace-nowrap text-lg">
                  Hi! I&apos;m Robbin!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Button
            onClick={handleContinue}
            disabled={!selectedFriend}
            className="w-full max-w-md h-14 text-xl rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
