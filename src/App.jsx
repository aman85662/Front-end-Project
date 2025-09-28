import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktail from "./components/cocktail"
import About from "./components/About.jsx"
import Art from "./components/Art"
import Menu from "./components/Menu"
import Contact from "./components/Contact"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktail />
      <About />
      <Art />
      <Menu />
      <Contact/>
    </main>
  )
}

export default App