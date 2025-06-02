"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function YesPage() {
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    setShowCelebration(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-red-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Celebration particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          >
            <Heart className="text-pink-400 w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Celebration effect */}
      {showCelebration && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="animate-scale-up">
            <div className="text-6xl md:text-8xl font-bold text-white bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              やった！
            </div>
            <div className="text-2xl md:text-3xl font-medium text-pink-300 mt-2 animate-fade-in text-center">
              You said YES!
            </div>
          </div>
        </div>
      )}

      <Card className="w-full max-w-lg bg-black/80 backdrop-blur-sm border-2 border-pink-500/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-red-500/20 to-pink-500/20 rounded-3xl animate-pulse"></div>

        <CardContent className="p-8 text-center relative z-10">
          <div className="absolute top-4 left-4">
            <Link href="/love-letter">
              <Button variant="ghost" size="sm" className="text-pink-300 hover:text-pink-100 hover:bg-pink-900/30">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-600 to-red-700 rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-pink-400/50 animate-bounce">
              <Sparkles className="text-white w-12 h-12" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
              Love Accepted!
            </h1>
            <p className="text-pink-300 text-lg font-medium">愛が受け入れられました！</p>
          </div>

          <div className="mb-6">
            <div className="relative rounded-2xl p-4 bg-gradient-to-br from-pink-800/50 to-red-900/30 border border-pink-500/30">
              <Image
                src="/cat.png"
                alt="Happy love messenger"
                width={200}
                height={200}
                className="mx-auto rounded-xl object-contain shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-transparent to-red-500/20 rounded-xl animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <blockquote className="text-xl font-bold text-pink-200">
              "Our cursed energies are now bound together forever!"
            </blockquote>
            <blockquote className="text-lg text-pink-300 italic">"私たちの呪力は永遠に結ばれました"</blockquote>
          </div>

          <p className="text-sm text-pink-400 font-medium animate-pulse">
            {"The strongest love spell has been cast! 💕⚡✨"}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
