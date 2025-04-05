import ProjectCard, {ProjectCardProps} from "./project_card";



function ProjectCardRender({ projects }: { projects: ProjectCardProps[] }) {
    return(
        <>
            <div className='grid gap-4 max-w-[800px] p-8'>
                {projects.map((project, key) => (
                    <ProjectCard key={key} {...project}/>
                ))}
            </div>
        </>
    )
}

export default ProjectCardRender