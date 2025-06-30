'use client'

export type Skill = {
    title : string,
    examples : string[]
}
    

export function SkillCard({title, examples} : Skill){
    return(
        <div className="mx-auto items-center w-70 h-65 border-2 p-5 rounded-2xl hover:drop-shadow-2xl hover:-translate-y-3 hover:brightness-110 ease-in-out duration-300 bg-white">
            <h2 className="text-center font-bold">{title}</h2>
            <br></br>
            <ul className="list-image-none list-inside space-y-2 ml-15">
            {
                examples.map((example, idx) => (
                    <li key={idx} className="before:content-['›'] before:mr-2 hover:translate-x-3 hover:font-bold ease-in-out duration-300">{example}</li>
                ))
            } 
            </ul>
        </div>
    )
}