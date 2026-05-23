"use client"

import { useEffect, useState } from "react"

const lines = [
    "> initializing systems...",
    "> connecting to ESP32...",
    "> loading automation modules...",
    "> access granted",
]

export default function Terminal() {

    const [visibleLines, setVisibleLines] = useState<string[]>([])

    useEffect(() => {

        let current = 0

        const interval = setInterval(() => {

            setVisibleLines(prev => [
                ...prev,
                lines[current]
            ])

            current++

            if (current >= lines.length) {
                clearInterval(interval)
            }

        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return (
        <div
            className="
        mt-10
        bg-black/60
        border
        border-green-500/20
        rounded-2xl
        p-6
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(0,255,136,0.08)]
        text-left
        max-w-2xl
        mx-auto
      "
        >

            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-2 font-mono text-green-400">

                {visibleLines.map((line, index) => (
                    <p key={index}>
                        {line}
                    </p>
                ))}

                <span className="animate-pulse">
          █
        </span>

            </div>
        </div>
    )
}