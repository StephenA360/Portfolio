'use client'
import type { StaticImageData } from 'next/image';
import Image from 'next/image'

export type Project = {
    id: string,
    name: string,
    description: string,
    tools: string[],
    media?: StaticImageData[],
    github?: string,
    demo?: string
}

export function ProjectCard({name, description, tools, media, github, demo}: Project){
    return(
        <div className="flex flex-col border-2 rounded-2xl h-80 w-100 justify-center items-center text-center p-5 leading-relaxed hover:drop-shadow-2xl hover:brightness-110 hover:-translate-y-3 ease-in-out duration-300 bg-white">
            <h3 className="font-bold">{name}</h3>
            <br></br>
            <p>{description}</p>
            {
                media && media.length>0 &&
                <div className="py-5 grid grid-cols-2">
                    {media?.map((medium) => (
                        <Image src={medium.src} key={medium.src} alt={name}/>
                    ))}
                </div>
            }
            <br></br>
            <div className="flex flex-wrap justify-center gap-3 bg-white">
                {
                    tools.map((tool, i) => (
                        <div className="flex border h-10 items-center justify-center p-3 hover:drop-shadow-md hover:text-[#ECFAE5] hover:bg-[#1F4D4D] ease-in-out duration-300" key={i}>
                            <p>{tool}</p>
                        </div>
                    ))
                }
            </div>
            <br></br>
            <div className="flex flex-row gap-2">
                <a href={github} target="_blank" rel="noopener noreferrer">
                    {
                        github && github.length > 0 &&
                        <img src="/project-media/github.png" alt="GitHub" width={100}></img>
                    }
                </a>
                {
                demo &&
                <button onClick={() => demo && window.open(demo, '_blank')} className="border rounded-md w-25 h-10 hover:text-[#ECFAE5] hover:bg-[#1F4D4D] ease-in-out duration-300">
                    Live Demo
                </button>
                }
            </div>
            
        </div>
    )
}