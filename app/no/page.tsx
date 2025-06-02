"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NoPage() {
  const [showSadness, setShowSadness] = useState(false)

  useEffect(() => {
    setShowSadness(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Sad particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            <div className="text-blue-400 text-2xl">💧</div>
          </div>
        ))}
      </div>

      {/* Sadness effect */}
      {showSadness && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="animate-scale-up">
            <div className="text-6xl md:text-8xl font-bold text-white bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent animate-pulse">
              悲しい...
            </div>
            <div className="text-2xl md:text-3xl font-medium text-blue-300 mt-2 animate-fade-in text-center">
              You said no...
            </div>
          </div>
        </div>
      )}

      <Card className="w-full max-w-lg bg-black/80 backdrop-blur-sm border-2 border-blue-500/50 shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-gray-500/20 to-blue-500/20 rounded-3xl animate-pulse"></div>

        <CardContent className="p-8 text-center relative z-10">
          <div className="absolute top-4 left-4">
            <Link href="/love-letter">
              <Button variant="ghost" size="sm" className="text-blue-300 hover:text-blue-100 hover:bg-blue-900/30">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-gray-700 rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-blue-400/50">
              <div className="text-4xl text-white">💔</div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent mb-2">
              Love Rejected
            </h1>
            <p className="text-blue-300 text-lg font-medium">愛が拒絶されました...</p>
          </div>

          <div className="mb-6">
            <div className="relative rounded-2xl p-4 bg-gradient-to-br from-blue-800/50 to-gray-900/30 border border-blue-500/30">
              <Image
                src="/cat.png"
                alt="Sad love messenger"
                width={200}
                height={200}
                className="mx-auto rounded-xl object-contain shadow-lg grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-gray-500/20 rounded-xl animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <blockquote className="text-lg font-medium text-blue-200">
              Even rejected love carries cursed energy...
            </blockquote>
            <blockquote className="text-base text-blue-300 italic">拒絶された愛にも呪力が宿る...</blockquote>
            <blockquote className="text-sm text-gray-400 italic">But maybe... theres still hope?</blockquote>
          </div>

          <Link href="/love-letter">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border border-blue-400/50"
              size="lg"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again?
            </Button>
          </Link>

          <p className="mt-4 text-xs text-blue-400 font-medium animate-pulse">{"Love never truly dies... 💔⚡"}</p>
        </CardContent>
      </Card>
    </div>
  )
}
