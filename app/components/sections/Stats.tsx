const stats = [
    {
        label: "TEMPO ONLINE",
        value: "99.9%",
    },

    {
        label: "DISPOSITIVOS CONECTADOS",
        value: "24",
    },

    {
        label: "SISTEMAS ATIVOS",
        value: "12",
    },

    {
        label: "STATUS DA REDE",
        value: "ONLINE",
    },
]

export default function Stats() {
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

                {/* HEADER */}

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
                        Métricas do Sistema
                    </p>

                    <h2
                        className="
              text-4xl
              md:text-5xl
              font-bold
            "
                    >
                        Status Cyber
                    </h2>

                </div>

                {/* GRID */}

                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
                >

                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black/40
                backdrop-blur-xl
                p-8
                hover:border-green-400/30
                transition-all
                duration-300
                hover:shadow-[0_0_40px_rgba(0,255,136,0.12)]
              "
                        >

                            {/* GLOW */}

                            <div
                                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-green-500/5
                  to-transparent
                "
                            />

                            <p
                                className="
                  text-zinc-500
                  text-sm
                  mb-6
                  tracking-wider
                "
                            >
                                {stat.label}
                            </p>

                            <h3
                                className="
                  text-5xl
                  font-bold
                  text-green-400
                "
                            >
                                {stat.value}
                            </h3>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}