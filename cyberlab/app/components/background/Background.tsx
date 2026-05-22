export default function Background() {
    return (
        <>

            <div
                className="
          fixed
          inset-0
          -z-50
          opacity-20
        "
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* GLOW 1 */}

            <div
                className="
          fixed
          top-[-200px]
          left-[-200px]
          w-[500px]
          h-[500px]
          rounded-full
          blur-[120px]
          bg-green-500/20
          -z-40
        "
            />

            {/* GLOW 2 */}

            <div
                className="
          fixed
          bottom-[-200px]
          right-[-200px]
          w-[500px]
          h-[500px]
          rounded-full
          blur-[120px]
          bg-emerald-400/10
          -z-40
        "
            />

            {/* NOISE */}

            <div
                className="
          fixed
          inset-0
          opacity-[0.03]
          mix-blend-screen
          pointer-events-none
          -z-30
        "
                style={{
                    backgroundImage:
                        "url('https://grainy-gradients.vercel.app/noise.svg')",
                }}
            />
        </>
    )
}