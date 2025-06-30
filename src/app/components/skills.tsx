import {SkillCard} from "./skill-card";

const languages: string[] = [
    "Javascript",
    "Java",
    "Python",
    "HTML/CSS",
    "TypeScript"
]

const frameworks: string[] = [
    "Node.js (Express)",
    "React.js",
    "Next.js",
    "EJS",
    "TailwindCSS",
]

const tools: string[] = [
    "Git & Github",
    "MongoDB"
]

export function Skills(){
    return(
        <div id="skills">
            <h1 className="text-4xl text-center p-10 font-bold">Skills</h1>
            <div className="grid grid-cols-3 mx-auto mr-30 ml-30">
                <SkillCard title={"Programming Languages"} examples={languages}/>
                <SkillCard title={"Frameworks & Libraries"} examples={frameworks}/>
                <SkillCard title={"Tools and Technologies"} examples={tools}/>
            </div>
        </div>
    )
}