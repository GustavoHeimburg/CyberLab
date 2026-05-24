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