export default function Navbar() {
    return (
        <header
            className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-white/5
        backdrop-blur-xl
        bg-black/30
      "
        >
            <div
                className="
          max-w-7xl
          mx-auto
          px-6
          h-16
          flex
          items-center
          justify-between
        "
            >

                {/* LOGO */}

                <div
                    className="
            flex
            items-center
            gap-3
          "
                >

                    <div
                        className="
              text-green-400
              font-bold
              tracking-[0.3em]
              text-sm
            "
                    >
                        CYBERLAB
                    </div>

                    {/* VERSION */}

                    <div
                        className="
              hidden
              md:flex
              items-center
              border
              border-green-400/20
              bg-green-400/10
              px-3
              py-1
              rounded-full
              text-[10px]
              tracking-[0.2em]
              text-green-400
              font-mono
            "
                    >
                        v0.3 ALPHA
                    </div>

                </div>

                {/* NAVIGATION */}

                <nav
                    className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
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
                        Início
                    </a>

                    <a
                        href="#"
                        className="
              hover:text-green-400
              transition-colors
            "
                    >
                        Tecnologias
                    </a>

                    <a
                        href="#"
                        className="
              hover:text-green-400
              transition-colors
            "
                    >
                        Projetos
                    </a>

                    <a
                        href="#"
                        className="
              hover:text-green-400
              transition-colors
            "
                    >
                        Contato
                    </a>

                </nav>

            </div>
        </header>
    )
}