"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement>(null)
  const [canContinue, setCanContinue] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current
        if (scrollHeight - scrollTop <= clientHeight + 5) {
          setCanContinue(true)
        }
      }
    }

    const currentRef = contentRef.current
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll)
      // Check initial scroll position
      handleScroll()
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-center mb-8">Privacy Policy</h1>

        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto mb-8 prose prose-slate max-w-none"
          style={{ maxHeight: "calc(100vh - 250px)" }}
        >
          <h2>1. Information We Collect</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>3. Information Sharing</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <h2>4. Your Rights</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

          <h2>5. Data Security</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

          <h2>6. Changes to This Policy</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores.
          </p>

          <h2>7. Contact Us</h2>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>

          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <h2>{index + 8}. Additional Information</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-white py-4">
          <Button
            onClick={() => router.push("/terms")}
            disabled={!canContinue}
            className="w-full h-14 text-xl rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 transition-opacity duration-300"
          >
            I Agree
          </Button>
        </div>
      </div>
    </div>
  )
}

