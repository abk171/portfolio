import ProjectCard, {ProjectCardProps} from "./project_card";



function ProjectCardRender({ projects }: { projects: ProjectCardProps[] }) {
    return(
        <>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                {projects.map((project, key) => (
                    <ProjectCard key={key} {...project}/>
                ))}
            </div>
        </>
    )
}

export default ProjectCardRender