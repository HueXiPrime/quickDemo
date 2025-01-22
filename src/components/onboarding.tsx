import { Button } from "@/components/ui/button"

export default function OnboardingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-6">
        <div className="space-y-4 relative">
          <p className="text-2xl font-serif absolute -left-4 -top-4">Welcome to</p>
          <div className="relative pt-8">
            <h1 className="text-[120px] font-serif leading-tight">Robbin</h1>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-full max-w-[380px] h-[2px] bg-blue-500" />
          </div>
          <p className="text-2xl font-serif">Your new best friend!</p>
        </div>
        <div className="h-24" /> {/* Spacer */}
        <Button size="lg" className="w-full max-w-md h-14 text-xl rounded-full bg-blue-500 hover:bg-blue-600">
          Say Hello
        </Button>
      </div>
    </div>
  )
}

