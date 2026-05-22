"use client"

import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useCallback } from "react"

export default function ParticlesBackground() {

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },

                background: {
                    color: "#050505",
                },

                fpsLimit: 60,

                particles: {
                    color: {
                        value: "#00ff88",
                    },

                    links: {
                        color: "#00ff88",
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },

                    move: {
                        enable: true,
                        speed: 1,
                    },

                    number: {
                        value: 60,
                    },

                    opacity: {
                        value: 0.3,
                    },

                    size: {
                        value: { min: 1, max: 3 },
                    },
                },

                detectRetina: true,
            }}
        />
    )
}