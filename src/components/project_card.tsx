import StackCard from "./stack_card";
import githubLogo from '../assets/github-mark.svg'

export type ProjectCardProps = {
    title: string,
    description: string,
    githubLink: string
}


function ProjectCard({ title, description,githubLink }: ProjectCardProps) {
    return (
        <div className=" pt-4 border-gray-100 border-b  h-sm  flex flex-col">
            {/* Title and GitHub Link */}
            <a className='group text-xl flex items-center mb-2' href={githubLink} target="_blank" rel="noopener noreferrer">
                {title}
                <img src={githubLogo} alt={`${title} GitHub`} className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>


            {/* Description */}
            <div className="text-xs text-gray-500 mb-3 text-left">{description}</div>

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
