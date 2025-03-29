import StackCard from "./stack_card";
import githubLogo from '../assets/github-mark.svg'

export type ProjectCardProps = {
    title: string,
    description: string,
    techStack: string[],
    githubLink: string
}

// function ProjectCard({title, description, techStack, githubLink}: ProjectCardProps) {
//     return(
//         <>
//             <div className='shadow-md p-2'>
//                 {/* Project title */}
//                 <div className="text-2xl">
//                 {title}
//                 </div>

//                 {/* Project link */}
//                 <a href={githubLink} target={githubLink} rel="noopener noreferrer">
//                     <img src={githubLogo} alt={`${title} link`} className="h-[2em] w-[2em]" />
//                 </a>

//                 {/* description */}
//                 <div className="p-4">
//                     {description}
//                 </div>

            

//                 {/* Tech stack */}
//                 <div className='flex'>
//                     {techStack.map((tech) => (
//                         <StackCard name={tech}/>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

function ProjectCard({ title, description, techStack, githubLink }: ProjectCardProps) {
    return (
        <div className="shadow-lg p-4 rounded-xl bg-white hover:shadow-2xl transition-all duration-200 max-w-sm">
            {/* Title and GitHub Link */}
            <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-semibold">{title}</div>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt={`${title} GitHub`} className="h-6 w-6 hover:scale-110 transition-transform" />
                </a>
            </div>

            {/* Description */}
            <div className="p-2 text-gray-600 mb-3 text-left">{description}</div>

            {/* Tech Stack */}
            <div className="flex gap-2 flex-wrap">
                {techStack.map((tech, index) => (
                    <StackCard key={index} name={tech} />
                ))}
            </div>
        </div>
    );
}


export default ProjectCard;
