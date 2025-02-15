"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const REPEATED_TEXT = "Rian Kochel is a word nerd. "

export function TypingEffect() {
  const [text, setText] = useState("")

  useEffect(() => {
    let currentIndex = 0
    const typeText = setInterval(() => {
      setText((prev) => {
        const nextChar = REPEATED_TEXT[currentIndex % REPEATED_TEXT.length]
        currentIndex++
        return prev.length >= 500 ? prev.slice(1) + nextChar : prev + nextChar
      })
    }, 100)

    return () => clearInterval(typeText)
  }, [])

  return (
    <div className="font-mono text-[3.64vw] leading-tight">
      {text}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.7 }}
        className="inline-block w-[0.8vw] h-[4vw] bg-black ml-1 align-middle"
      />
    </div>
  )
}

