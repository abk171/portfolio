import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StackCard from './components/stack_card';
import ProjectCard, {ProjectCardProps} from './components/project_card';
import ProjectCardRender from './components/project_card_render';
import WorkCard, {WorkCardProps} from './components/work_card';
import WorkCardRender from './components/work_card_render';
import myWorks from './assets/work.json'
import myProjects from './assets/project.json'
// Supports weights 100-700
import '@fontsource-variable/roboto-mono';
import NavBar from './components/navbar';
import Footer from './components/footer';


function App() {
    // const myProject: ProjectCardProps = {
    //     title: "First Patient Report",
    //     description: "BioHacks 2024 submission for an automatic transcription service for EMTs to complete hospital handover forms.",
    //     techStack: ["React", "OpenAI", "FastAPI"],
    //     githubLink: "http://github.com/AnuragJCChaturvedi/piar-backend",
    // };

    // const myWork: WorkCardProps = {
    //     workplace: "Pitt Health + Explainability AI Lab",
    //     title: "Graduate Student Researcher",
    //     location: "Pittsburgh, PA",
    //     duration: "Jan 25 - Present",
    //     link: "https://pitthexai.github.io/",
    //     description: [
    //         "Curated and cleaned a dataset of 200+ DICOM wrist ultrasound images from UPMC for NIH-funded carpal tunnel research",
    //         "Developed a pipeline with YOLOv11 (mAP@50: 0.99), U-Net (IoU: 0.86), and a custom ConvNeXt classifier (94% accuracy, 0.86 precision, 1.0 recall)",
    //         "Podium abstract submitted for AMIA 2025"
    //     ]
    // }
    // const myProjects:ProjectCardProps[] = Array(4).fill(myProject);
    // const myWorks: WorkCardProps[] = Array(4).fill(myWork);

    return(
        <>
            <div className="flex flex-col md:flex-row h-screen">
                <NavBar />
                <div className="flex-1 p-4">
                    <WorkCardRender works={myWorks} />
                    <ProjectCardRender projects={myProjects} />
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App
