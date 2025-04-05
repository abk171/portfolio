import ProjectCard, {ProjectCardProps} from "./project_card";



function ProjectCardRender({ projects }: { projects: ProjectCardProps[] }) {
    return(
        <>
        <h1 className="text-left text-xl pb-8 text-bold">Projects</h1>
            <div className='grid gap-4'>
                {projects.map((project, key) => (
                    <ProjectCard key={key} {...project}/>
                ))}
            </div>
        </>
    )
}

export default ProjectCardRender