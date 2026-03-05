import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Background from "./components/Background"

export default function Home() {
  return (
    <main className=" text-white">
      <Background />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}