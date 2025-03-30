import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StackCard from './components/stack_card';
import ProjectCard, {ProjectCardProps} from './components/project_card';
import ProjectCardRender from './components/project_card_render';

function App() {
    const myProject: ProjectCardProps = {
        title: "First Patient Report",
        description: "BioHacks 2024 submission for an automatic transcription service for EMTs to complete hospital handover forms.",
        techStack: ["React", "OpenAI", "FastAPI"],
        githubLink: "http://github.com/AnuragJCChaturvedi/piar-backend",
    };
    const myProjects:ProjectCardProps[] = Array(4).fill(myProject);
    return(
        <>
            {/* <ProjectCard {... myProject}/> */}
            <ProjectCardRender projects={myProjects}/>
        </>
    )
}

export default App
