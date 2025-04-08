import ProjectCard, {ProjectCardProps} from "./project_card";



function ProjectCardRender({ projects }: { projects: ProjectCardProps[] }) {
    return(
        <div className="min-h-[100vh]">
        <h1 className="text-left text-xl pb-8 text-bold">Projects</h1>
            <div className='grid gap-4'>
                {projects.map((project, key) => (
                    <ProjectCard key={key} {...project}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectCardRender