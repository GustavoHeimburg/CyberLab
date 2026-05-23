const projects = [
    {
        title: "Ghost Panel",
        category: "Sistema de Dashboard",

        description:
            "Dashboard de monitoramento em tempo real para dispositivos conectados e sistemas de automação.",
    },

    {
        title: "Smart Access",
        category: "RFID & ESP32",

        description:
            "Sistema de autenticação sem fio utilizando RFID e tecnologias embarcadas.",
    },

    {
        title: "BlackNode",
        category: "Infraestrutura",

        description:
            "Ambiente Linux para automações escaláveis e redes seguras.",
    },

    {
        title: "Neural Link",
        category: "Comunicação IoT",

        description:
            "Camada de comunicação MQTT para dispositivos inteligentes conectados.",
    },
]

export default function Projects() {
    return (
        <section
            className="
        px-6
        py-32
      "
        >

            <div
                className="
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
                        Projetos
                    </p>

                    <h2
                        className="
              text-4xl
              md:text-5xl
              font-bold
            "
                    >
                        Sistemas Cyber
                    </h2>

                </div>

                {/* PROJECTS */}

                <div className="space-y-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                rounded-3xl
                bg-black/40
                backdrop-blur-xl
                p-8
                transition-all
                duration-300
                hover:border-green-400/30
                hover:shadow-[0_0_50px_rgba(0,255,136,0.12)]
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
                  bg-gradient-to-r
                  from-green-500/5
                  to-transparent
                "
                            />

                            <div
                                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-6
                "
                            >

                                {/* LEFT */}

                                <div>

                                    <p
                                        className="
                      text-green-400
                      text-sm
                      mb-3
                    "
                                    >
                                        {project.category}
                                    </p>

                                    <h3
                                        className="
                      text-3xl
                      font-bold
                      mb-4
                    "
                                    >
                                        {project.title}
                                    </h3>

                                    <p
                                        className="
                      text-zinc-400
                      max-w-2xl
                      leading-relaxed
                    "
                                    >
                                        {project.description}
                                    </p>

                                </div>

                                {/* BUTTON */}

                                <button
                                    className="
                    border
                    border-green-400/30
                    text-green-400
                    px-6
                    py-3
                    rounded-xl
                    hover:bg-green-400
                    hover:text-black
                    transition-all
                    duration-300
                  "
                                >
                                    Ver Sistema
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}