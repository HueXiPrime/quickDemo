"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [selectedFriend] = useState<"man" | "woman">("man"); // You'll want to get this from your actual state management

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-serif">Robbin</h1>
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Robbin bird"
              width={20}
              height={20}
            />
          </div>
          <Button variant="ghost" className="text-gray-600">
            Settings
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-4 space-y-6">
            {/* Friend Profile */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center space-y-4">
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={
                    selectedFriend === "man" ? "/oldMan.png" : "/oldWoman.png"
                  }
                  alt="Your Robbin friend"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <h2 className="text-xl font-medium">Robbin</h2>
                <p className="text-gray-600">Your AI Friend</p>
              </div>
              <Button className="w-full rounded-full bg-blue-500 hover:bg-blue-600">
                Start Chat
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <h3 className="font-medium">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  Voice Call
                </Button>
                <Button variant="outline" className="w-full">
                  Video Call
                </Button>
                <Button variant="outline" className="w-full">
                  Send Photo
                </Button>
                <Button variant="outline" className="w-full">
                  Activities
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 space-y-6">
            {/* Daily Summary */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-medium mb-4">Today&apos;s Summary</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-xl">
                  <p className="text-2xl font-medium">3</p>
                  <p className="text-sm text-gray-600">Conversations</p>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <p className="text-2xl font-medium">2</p>
                  <p className="text-sm text-gray-600">Activities</p>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <p className="text-2xl font-medium">15m</p>
                  <p className="text-sm text-gray-600">Time Spent</p>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-medium mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-500">🎯</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Daily Check-in</h4>
                      <p className="text-sm text-gray-600">
                        Completed morning routine
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">2h ago</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
