export default function Footer() {
    return (
        <footer
            className="
        relative
        border-t
        border-white/5
        mt-32
      "
        >

            {/* GLOW */}

            <div
                className="
          absolute
          inset-0
          bg-gradient-to-t
          from-green-500/5
          to-transparent
          pointer-events-none
        "
            />

            <div
                className="
          max-w-7xl
          mx-auto
          px-6
          py-16
        "
            >

                {/* TOP */}

                <div
                    className="
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-10
          "
                >

                    {/* LEFT */}

                    <div>

                        <p
                            className="
                text-green-400
                uppercase
                tracking-[0.3em]
                text-sm
                mb-4
              "
                        >
                            CYBERLAB
                        </p>

                        <h3
                            className="
                text-3xl
                font-bold
                mb-4
              "
                        >
                            Building futuristic systems.
                        </h3>

                        <p
                            className="
                text-zinc-500
                max-w-md
                leading-relaxed
              "
                        >
                            Automation, embedded systems,
                            cyber interfaces and modern
                            digital experiences.
                        </p>

                    </div>

                    {/* RIGHT */}

                    <div
                        className="
              flex
              flex-col
              gap-3
              text-zinc-400
            "
                    >

                        <a
                            href="#"
                            className="
                hover:text-green-400
                transition-colors
              "
                        >
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="
                hover:text-green-400
                transition-colors
              "
                        >
                            LinkedIn
                        </a>

                        <a
                            href="#"
                            className="
                hover:text-green-400
                transition-colors
              "
                        >
                            Contact
                        </a>

                    </div>

                </div>

                {/* BOTTOM */}

                <div
                    className="
            mt-16
            pt-6
            border-t
            border-white/5
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-4
          "
                >

                    <p className="text-zinc-600 text-sm">
                        © 2026 CYBERLAB. All systems operational.
                    </p>

                    <p
                        className="
              text-green-400
              text-sm
              font-mono
            "
                    >
                        STATUS: ONLINE
                    </p>

                </div>

            </div>

        </footer>
    )
}