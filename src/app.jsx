import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import Hero from "./components/heo"
import Cocktail from "./components/cocktail"
import About from "./components/about"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktail />
      <About />
    </main>
  )
}

export default App