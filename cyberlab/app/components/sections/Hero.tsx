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
            <div className="text-center space-y-6">

                <p
                    className="
            text-green-400
            uppercase
            tracking-[0.4em]
            text-sm
          "
                >
                    Automation • ESP32 • Systems
                </p>

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

                <p
                    className="
            text-zinc-400
            max-w-xl
            mx-auto
            text-lg
          "
                >
                    Building futuristic interfaces, automations,
                    embedded systems and cyber experiences.
                </p>

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
                    Explore Systems
                </button>

            </div>
        </section>
    )
}