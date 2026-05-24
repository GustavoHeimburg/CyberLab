export default function Hero() {
    return (
        <section
            className="
        cyber-grid
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
        >

            {/* GRADIENT GLOW */}

            <div
                className="
          absolute
          inset-0
          bg-gradient-to-b
          from-green-500/5
          via-transparent
          to-transparent
          pointer-events-none
        "
            />

            <div className="text-center space-y-6 relative z-10">

                {/* BADGE */}

                <div
                    className="
            inline-flex
            items-center
            gap-3
            border
            border-green-400/20
            bg-green-400/10
            px-5
            py-2
            rounded-full
            text-green-400
            text-sm
            backdrop-blur-xl
          "
                >

                    <div
                        className="
              w-2
              h-2
              rounded-full
              bg-green-400
              animate-pulse
            "
                    />

                    SITE EM CONSTRUÇÃO

                </div>

                {/* TOP TEXT */}

                <p
                    className="
            text-green-400
            uppercase
            tracking-[0.4em]
            text-sm
          "
                >
                    Automação • ESP32 • Sistemas
                </p>

                {/* TITLE */}

                <h1
                    className="
            text-6xl
            md:text-8xl
            font-bold
            text-glow
          "
                >
                    CYBERLAB
                </h1>

                {/* DESCRIPTION */}

                <p
                    className="
            text-zinc-400
            max-w-xl
            mx-auto
            text-lg
            leading-relaxed
          "
                >
                    Construindo interfaces futurísticas,
                    automações inteligentes, sistemas embarcados
                    e experiências cibernéticas modernas.
                </p>

                {/* EXTRA TEXT */}

                <p
                    className="
            text-zinc-600
            text-sm
            tracking-wide
          "
                >
                    Novos módulos e sistemas serão adicionados em breve.
                </p>

                {/* BUTTON */}

                <button
                    className="
            mt-4
            border
            border-green-400
            px-6
            py-3
            rounded-xl
            text-green-400
            hover:bg-green-400
            hover:text-black
            transition-all
            duration-300
            glow
          "
                >
                    Explorar Sistemas
                </button>

            </div>

        </section>
    )
}