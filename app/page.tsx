import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Background from "./components/Background"
import CustomCursor from "./components/CustomCursor"

export default function Home() {
  return (
    <main className="relative text-white">
      <CustomCursor />
      <Background />
      <Hero />
      <About />
      <Skills />
      <Technologies />
      <Timeline />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
