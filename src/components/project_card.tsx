import StackCard from "./stack_card";
import githubLogo from '../assets/github-mark.svg'

export type ProjectCardProps = {
    title: string,
    description: string,
    techStack: string[],
    githubLink: string
}


function ProjectCard({ title, description, techStack, githubLink }: ProjectCardProps) {
    return (
        <div className="shadow-lg p-4 rounded-xl bg-white transition-all duration-200  h-sm w-sm flex flex-col">
            {/* Title and GitHub Link */}
            <a className='flex justify-between items-center mb-2' href={githubLink} target="_blank" rel="noopener noreferrer">
                <div className="text-2xl font-semibold">{title}</div>
                <img src={githubLogo} alt={`${title} GitHub`} className="h-6 w-6 hover:scale-110 transition-transform" />
            </a>


            {/* Description */}
            <div className="text-xs p-2 text-gray-500 mb-3 text-left">{description}</div>

            {/* Tech Stack */}
            <div className="flex gap-2 flex-wrap mt-auto">
                {techStack.map((tech, index) => (
                    <StackCard key={index} name={tech} />
                ))}
            </div>
        </div>
    );
}


export default ProjectCard;
