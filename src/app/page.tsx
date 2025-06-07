import {About} from "./components/about"
import {Contact} from "./components/contact"
import {Projects} from "./components/projects"
import {Skills} from "./components/skills"

export default function Home() {
  return(
    <main className="font-sans">
      <About />

      <Skills />
      <br></br>
      <Projects />
      <br></br>
      <br></br>
      <Contact />
      <br></br>
    </main>
  )
}
