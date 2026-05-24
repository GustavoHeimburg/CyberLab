"use client"

import { useState } from "react"

const commands: Record<string, string> = {

    help:
        "Available commands: help, systems, network, clear",

    systems:
        "12 active systems running successfully.",

    network:
        "Secure network online. All nodes connected.",

    whoami:
        "gustavo@cyberlab",

}

export default function Console() {

    const [input, setInput] = useState("")

    const [history, setHistory] = useState<string[]>([
        "CYBERLAB TERMINAL INITIALIZED",
        "Type 'help' to list commands.",
    ])

    function handleCommand(
        e: React.FormEvent
    ) {

        e.preventDefault()

        const command =
            input.toLowerCase().trim()

        if (!command) return

        if (command === "clear") {

            setHistory([])

            setInput("")

            return
        }

        const response =
            commands[command] ||
            "Command not recognized."

        setHistory(prev => [
            ...prev,
            `> ${command}`,
            response,
        ])

        setInput("")
    }

    return (
        <section
            className="
        px-6
        py-32
      "
        >

            <div
                className="
          max-w-5xl
          mx-auto
        "
            >

                {/* HEADER */}

                <div className="mb-10">

                    <p
                        className="
              text-green-400
              uppercase
              tracking-[0.3em]
              text-sm
              mb-4
            "
                    >
                        Interactive Console
                    </p>

                    <h2
                        className="
              text-4xl
              md:text-5xl
              font-bold
            "
                    >
                        Command Interface
                    </h2>

                </div>

                {/* TERMINAL */}

                <div
                    className="
            border
            border-green-500/20
            rounded-3xl
            bg-black/50
            backdrop-blur-xl
            overflow-hidden
            shadow-[0_0_60px_rgba(0,255,136,0.08)]
          "
                >

                    {/* TOP BAR */}

                    <div
                        className="
              flex
              items-center
              gap-2
              px-6
              py-4
              border-b
              border-white/5
            "
                    >

                        <div className="w-3 h-3 rounded-full bg-red-500" />

                        <div className="w-3 h-3 rounded-full bg-yellow-500" />

                        <div className="w-3 h-3 rounded-full bg-green-500" />

                    </div>

                    {/* CONTENT */}

                    <div
                        className="
              p-6
              min-h-[400px]
              font-mono
              text-green-400
              space-y-2
            "
                    >

                        {history.map((line, index) => (
                            <p key={index}>
                                {line}
                            </p>
                        ))}

                        {/* INPUT */}

                        <form
                            onSubmit={handleCommand}
                            className="flex items-center gap-2"
                        >

                            <span>{">"}</span>

                            <input
                                value={input}
                                onChange={(e) =>
                                    setInput(e.target.value)
                                }
                                autoComplete="off"
                                spellCheck={false}
                                className="
                  bg-transparent
                  outline-none
                  flex-1
                "
                            />

                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}