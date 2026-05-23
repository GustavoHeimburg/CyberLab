import {
    Cpu,
    Wifi,
    Shield,
    Database,
    Server,
    Radio,
} from "lucide-react"

import Reveal from "@/app/components/ui/Reveal";

const technologies = [
    {
        icon: Cpu,
        title: "ESP32",
        description:
            "Embedded systems, automation and smart devices.",
    },

    {
        icon: Wifi,
        title: "IoT Systems",
        description:
            "Connected devices and real-time communication.",
    },

    {
        icon: Shield,
        title: "Cyber Security",
        description:
            "Secure systems and network protection.",
    },

    {
        icon: Database,
        title: "APIs",
        description:
            "Modern integrations and scalable architectures.",
    },

    {
        icon: Server,
        title: "Linux Servers",
        description:
            "High performance environments and infrastructure.",
    },

    {
        icon: Radio,
        title: "RFID & NFC",
        description:
            "Wireless authentication and smart access systems.",
    },
]

export default function Technologies() {
    return (
        <Reveal>
        <section
            className="
        px-6
        py-32
        max-w-7xl
        mx-auto
      "
        >

            <div className="mb-16">

                <p
                    className="
            text-green-400
            uppercase
            tracking-[0.3em]
            text-sm
            mb-4
          "
                >
                    Technologies
                </p>

                <h2
                    className="
            text-4xl
            md:text-5xl
            font-bold
          "
                >
                    Cyber Stack
                </h2>

            </div>

            {/* GRID */}

            <div
                className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
            >

                {technologies.map((tech, index) => {

                    const Icon = tech.icon

                    return (
                        <div
                            key={index}
                            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black/40
                backdrop-blur-xl
                p-8
                transition-all
                duration-300
                hover:border-green-400/30
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(0,255,136,0.12)]
              "
                        >

                            {/* GLOW */}

                            <div
                                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  bg-gradient-to-br
                  from-green-500/5
                  to-transparent
                "
                            />

                            <Icon
                                className="
                  text-green-400
                  mb-6
                "
                                size={36}
                            />

                            <h3
                                className="
                  text-2xl
                  font-semibold
                  mb-3
                "
                            >
                                {tech.title}
                            </h3>

                            <p
                                className="
                  text-zinc-400
                  leading-relaxed
                "
                            >
                                {tech.description}
                            </p>

                        </div>
                    )
                })}

            </div>

        </section>
        </Reveal>
    )
}