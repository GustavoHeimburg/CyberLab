import Hero from "./components/sections/Hero"
import Background from "./components/background/Background";
import Terminal from "./components/terminal/Terminal";
import Navbar  from "./components/ui/Navbar";
import Technologies from "./components/sections/Technologies";
import Projects from "./components/sections/Projects";
import MouseGlow from "./components/ui/MouseGlow";
import Reveal from "./components/ui/Reveal";
import Stats from "./components/sections/Stats";
import Console from "./components/terminal/Console";
import Footer from "./components/ui/Footer";

export default function Home() {
    return (
        <main>
            <Background />
            <Hero />
            <Terminal />
            <Navbar/>
            <Technologies/>
            <Projects />
            <MouseGlow />
            <Reveal />
            <Stats />
            <Console />
            <Footer />

        </main>
    )
}