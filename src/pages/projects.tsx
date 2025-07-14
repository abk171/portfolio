import { ProjectCardProps } from "../components/project_card";
import ProjectCardRender from "../components/project_card_render";

function Projects({ projects } : {projects: ProjectCardProps[]}) {
    if (!projects || projects.length === 0) {
        return <div />
    }
    return <ProjectCardRender projects={projects}/>
}

export default Projects;