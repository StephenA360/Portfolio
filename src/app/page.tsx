import {About} from "./components/about"
import {Projects} from "./components/projects"
import {Skills} from "./components/skills"

export default function Home() {
  return(
    <main className="font-sans">
      <br></br>
      <br></br>
      <About />

      <Skills />
      <br></br>
      <Projects />
      <br></br>

      <br></br>
    </main>
  )
}
