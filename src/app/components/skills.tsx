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
            <h1 className="text-4xl text-center p-10">Skills</h1>
            <div className="grid grid-cols-3 mx-auto">
                <div className="mx-auto items-center w-70 h-65 border p-5 rounded-2xl">
                    <h2 className="text-center">Programming Languages</h2>
                    <br></br>
                    <ul className="list-image-none list-inside space-y-2 ml-15">
                    {
                        languages.map((language, idx) => (
                            <li key={idx} className="before:content-['›'] before:mr-2">{language}</li>
                        ))
                    }
                    </ul>
                </div>
                <div className="mx-auto items-center w-70 h-65 border p-5 rounded-2xl">
                    <h2 className="text-center">Frameworks & Libraries</h2>
                    <br></br>
                    <ul className="list-image-none list-inside space-y-2 ml-15">
                    {
                        frameworks.map((framework, idx) => (
                            <li key={idx} className="before:content-['›'] before:mr-2">{framework}</li>
                        ))
                    }
                    </ul>
                </div>
                <div className="mx-auto items-center w-70 h-65 border p-5 rounded-2xl">
                    <h2 className="text-center">Tools & Technologies</h2>
                    <br></br>
                    <ul className="list-image-none list-inside space-y-2 ml-15">
                    {
                        tools.map((tool, idx) => (
                            <li key={idx} className="before:content-['›'] before:mr-2">{tool}</li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            </div>
    )
}