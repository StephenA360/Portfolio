import {ProjectCard} from "./project-card"
import {Project} from "./project-card"
/*
export type Project = {
    id: string,
    name: string,
    description: string,
    tools: string[],
    media?: StaticImageData[],
    github?: string
    demo?: string
}

--background: #ECFAE5;
  --foreground: #1F4D4D;
*/
const projects: Project[]= [
    {
        id: "1",
        name: "Rock Paper Scissors Lizard Spock (Pokemon)",
        description: "A Pokemon twist on the five-option version of Rock Paper Scissors: Rock Paper Scissors Lizard Spock!",
        tools: ["HTML", "CSS", "Javascript"],
        demo: "https://pokemon-rpsls-9339792.codehs.me/index.html"
    },
    {
        id: "2",
        name: "OmniList",
        description: "A full-stack to-do list website where users can create accounts and store tasks.",
        tools: ["Node.js", "Express.js", "MongoDB", "TailwindCSS", "EJS", "Git"],
        github: "https://github.com/StephenA360/OmniList"
    },
    {
        id: "3",
        name: "Sword Game",
        description: "A class rpg-styled Roblox game where players can fight monsters and get stronger with friends.",
        tools: ["Roblox Studio", "Lua", "Blender"],
        demo: "https://www.roblox.com/games/7960557622/Sword-Game"
    },
    {
        id: "4",
        name: "Autoclicker",
        description: "A simple python autoclicker allowing the user to set the clicking speed and position to click.",
        tools: ["Python"],
        demo: "https://www.roblox.com/games/7960557622/Sword-Game"
    }
]


export function Projects(){
    return(
        <div id="projects">
            <h1 className="text-4xl text-center p-10 font-bold">Projects</h1>
            <div className="grid grid-cols-2 gap-y-10 gap-x-0 place-items-center mx-50">
                
                {
                    projects.map((project: Project) => (
                        <ProjectCard 
                            key={project.id} 
                            id={project.id}
                            name={project.name} 
                            description={project.description} 
                            tools={project.tools} 
                            media={project.media?.length ? project.media : undefined}
                            github={project.github?.length ? project.github : undefined}
                            demo={project.demo?.length ? project.demo : undefined}
                        />
                    ))
                }
            </div>
        </div>
    )
}