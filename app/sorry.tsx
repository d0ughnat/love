"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Eye, Flame, ArrowRight, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Flower component for animation
const CursedFlower = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute pointer-events-none animate-float-up" style={style}>
    <div className="relative">
      <Heart className="text-red-500 w-4 h-4" />
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-500/30 to-red-500/30 rounded-full blur-sm"></div>
    </div>
  </div>
)

export default function Component() {
  const [showEffect, setShowEffect] = useState(false)
  const [flowers, setFlowers] = useState<React.CSSProperties[]>([])

  // Handle button click
  const handleClick = () => {
    setShowEffect(true)

    // Create 15 flowers with random positions
    const newFlowers = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 20 + 60}%`,
      animationDuration: `${Math.random() * 2 + 2}s`,
      animationDelay: `${Math.random() * 0.5}s`,
      transform: `scale(${Math.random() * 1 + 0.5}) rotate(${Math.random() * 360}deg)`,
      opacity: Math.random() * 0.5 + 0.5,
    }))

    setFlowers(newFlowers)

    // Hide effect after animation completes
    setTimeout(() => {
      setShowEffect(false)
      setFlowers([])
    }, 4000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Cursed energy floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-red-400 animate-pulse">
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute top-32 right-20 text-purple-400 animate-bounce">
          <Eye className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 left-20 text-red-500 animate-pulse delay-300">
          <Flame className="w-7 h-7" />
        </div>
        <div className="absolute top-60 right-10 text-purple-300 animate-bounce delay-500">
          <Zap className="w-5 h-5" />
        </div>
        <div className="absolute bottom-20 right-32 text-red-400 animate-pulse delay-700">
          <Eye className="w-6 h-6" />
        </div>

        {/* Cursed energy particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping delay-500"></div>
      </div>

      {/* Domain expansion effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/20 to-transparent animate-pulse"></div>

      {/* I love you effect */}

      {/* Flower animations */}
      {flowers.map((style, index) => (
        <CursedFlower key={index} style={style} />
      ))}

      <Card className="w-full max-w-md bg-black/80 backdrop-blur-sm border-2 border-red-500/50 shadow-2xl rounded-3xl overflow-hidden relative">
        {/* Cursed energy border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 rounded-3xl animate-pulse"></div>

        <CardContent className="p-8 text-center relative z-10">
          {/* JJK character placeholder */}
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-600 to-purple-700 rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-red-400/50">
              <div className="text-4xl text-white font-bold">ごめん</div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-2">
               I will stop courting you
            </h1>
            <p className="text-gray-300 text-lg font-medium">
             just click the button
            </p>
          </div>

          {/* Cat image section with JJK styling */}
          <div className="mb-6">
            <div className="relative rounded-2xl p-4 bg-gradient-to-br from-gray-800/50 to-purple-900/30 border border-red-500/30">
              <div className="space-y-3">
                <div className="relative">
                  <Image
                    src="/cat.png"
                    alt="Cursed cat spirit"
                    width={200}
                    height={200}
                    className="mx-auto rounded-xl object-contain shadow-lg"
                  />
                  {/* Cursed energy aura around cat */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-red-500/20 rounded-xl animate-pulse"></div>
                </div>
                <p className="text-sm text-purple-300 font-medium">
                 {"(=｀ω´=)"}
                </p>
              </div>
            </div>
          </div>


          {/* Love letter redirect button */}
          <Link href="/love-letter" className="block mt-4">
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border border-purple-400/50"
              size="lg"
            >
              <span className="mr-2">Please click Me</span>
              <Heart className="w-5 h-5" />
            </Button>
          </Link>

          {/* JJK-themed message */}
          <p className="mt-4 text-xs text-purple-400 font-medium">
            {"Where there is love there is life"}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
