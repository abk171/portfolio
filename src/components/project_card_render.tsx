import ProjectCard, {ProjectCardProps} from "./project_card";



function ProjectCardRender({ projects }: { projects: ProjectCardProps[] }) {
    return(
        <>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 max-w-[90%] mx-auto justify-items-center'>
                {projects.map((project, key) => (
                    <ProjectCard key={key} {...project}/>
                ))}
            </div>
        </>
    )
}

export default ProjectCardRender