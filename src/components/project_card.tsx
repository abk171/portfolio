
import githubLogo from '../assets/github-mark.svg'

export type ProjectCardProps = {
    title: string,
    description: string,
    githubLink: string
}


function ProjectCard({ title, description,githubLink }: ProjectCardProps) {
    return (
        <div className=" pt-4 border-gray-100 border-b  h-sm  flex flex-col text-left">
            {/* Title and GitHub Link */}
            <a 
                className="group flex items-center text-xl font-bold" 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <span className="">
                    {title}
                    <img 
                        src={githubLogo} 
                        alt={`github link`} 
                        className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity inline-block flex-shrink-0"
                    />
                </span>
            </a>

            {/* Description */}
            <div className="text-sm text-gray-500 mb-3 ">{description}</div>

            {/* Tech Stack */}
            {/* <div className="flex gap-2 flex-wrap mt-auto">
                {techStack.map((tech, index) => (
                    <StackCard key={index} name={tech} />
                ))}
            </div> */}
        </div>
    );
}


export default ProjectCard;
