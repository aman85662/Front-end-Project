import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/NavbarPage.jsx"
import Hero from "./components/HeroPage.jsx"
import Cocktail from "./components/CocktailPage.jsx"
import About from "./components/AboutPage.jsx"
import Art from "./components/ArtPage.jsx"
import Menu from "./components/MenuPage.jsx"
import Contact from "./components/ContactPage.jsx"

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