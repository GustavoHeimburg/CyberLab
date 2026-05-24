"use client"

import { useEffect, useState } from "react"

export default function MouseGlow() {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {

        const handleMouseMove = (e: MouseEvent) => {

            setPosition({
                x: e.clientX,
                y: e.clientY,
            })

        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            )
        }

    }, [])

    return (
        <div
            className="
        pointer-events-none
        fixed
        inset-0
        z-30
      "
        >

            <div
                className="
          absolute
          w-[150px]
          h-[150px]
          rounded-full
          bg-green-400/90
          blur-[150px]
          transition-transform
          duration-100
        "
                style={{
                    transform: `
            translate(
              ${position.x - 200}px,
              ${position.y - 200}px
            )
          `,
                }}
            />

        </div>
    )
}