import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import myWorks from './assets/work.json'
// import myProjects from './assets/project.json'
// Supports weights 100-700
import NavBar from './components/navbar';
import Footer from './components/footer';
// import Welcome from './components/home';
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience';
import Projects from './pages/projects';
import { ProgramList } from './components/programs';
import { WorkCardProps } from './components/work_card';
import { ProjectCardProps } from './components/project_card';

import { useEffect, useState } from 'react';





// const programLists = [
//     {
//         "name": "Languages",
//         "stack": ["Python", "Go", "Java", "R", "TypeScript"]
//     },
//     {
//         "name": "Web",
//         "stack": ["React", "Node", "Express", "FastAPI", "Django", "Tailwind", "Bootstrap"]
//     },
//     {
//         "name": "ML",
//         "stack": ["PyTorch", "TensorFlow", "Numpy", "Langchain", "OpenCV"]
//     },
//     {
//         "name": "Database",
//         "stack": ["PostgreSQL", "MongoDB", "Hadoop", "Redis"]
//     },
//     {
//         "name": "DevOps",
//         "stack": ["GCP", "AWS", "Docker", "Git Actions"]
//     }
// ]

// const myWorks = [
//     {
//         "workplace": "Pitt HexAI Lab",
//         "title": "Graduate Student Researcher",
//         "location": "Pittsburgh, PA",
//         "duration": "Jan 25 - Present",
//         "link": "https://pitthexai.github.io/",
//         "description": [
//             "Curated and cleaned a dataset of 200+ DICOM wrist ultrasound images from UPMC for NIH-funded carpal tunnel research",
//             "Developed a pipeline with YOLOv11 (mAP@50: 0.99), U-Net (IoU: 0.86), and a custom ConvNeXt classifier (94% accuracy, 0.86 precision, 1.0 recall)",
//             "Podium abstract submitted for AMIA 2025"
//         ]
//     },

//     {
//         "workplace": "University of Pittsburgh,SCI",
//         "title": "Graduate Teaching Assistant",
//         "location": "Pittsburgh, PA",
//         "duration": "Sep 24 - Present",
//         "link": "https://www.sci.pitt.edu/academics/masters-degrees/data-science",
//         "description": [
//             "TA for Pitt’s Master’s Data Science course, assisting 150+ students in foundational math and statistics",
//             "Review and audit 12 programming labs in nbgrader for testcase accuracy and Coursera integration"
//         ]
//     },

//     {
//         "workplace": "Hamad Medical Corporation",
//         "title": "Software developer",
//         "location": "Doha, Qatar",
//         "duration": "Sep 22 - May 23",
//         "link": "https://hamad.qa/EN/Education-and-research/Medical_Research/Pages/default.aspx",
//         "description": [
//             "Built a digital twin platform to replicate surgical environments for remote surgeon-led training and telementoring",
//             "Stitched 3 AzureDK feeds in real time on LattePanda using RTX 4090 and CUDA-accelerated VTK for 3D rendering",
//             "Reduced WebRTC bandwidth by 30%, improving framerate by up to 5 FPS in surgical telementoring software",
//             "Recreated surgical scenes on Oculus with Unity, C#, and VTK; enabled bidirectional control via WebRTC data channels for interactive telementoring."
//         ]
//     },

//     {
//         "workplace": "Qatar Computing Research Center",
//         "title": "Social computing intern",
//         "location": "Doha, Qatar",
//         "duration": "May 22 - Sep 22",
//         "link": "https://www.hbku.edu.qa/en/qcri",
//         "description": [
//             "Won 2nd place for best summer internship project by building a large-scale data downloader for a flood detection pipeline",
//             "Overcame GEE's 30MB download limit by dividing images into smaller tiles, enabling downloads up to 15GB in one call",
//             "Built real-time ArcGIS + Redis dashboard used by 100+ responders during 2022 Pakistan floods"
//         ]
//     }
// ]

// const myProjects = [
//     {
//         "title": "Gosqlite (in progress)",
//         "description": "A simple implementation of sqlite written in go.",
//         "githubLink": "https://github.com/abk171/gosqlite"
//     },
//     {
//         "title": "Model Implementations (in progress)",
//         "description": "Full implementations of popular CV and NLP papers along with scripts for pretraining and testing; updated weekly",
//         "githubLink": "https://github.com/abk171/model_implementations"
//     },
//     {
//         "title": "Portfolio",
//         "description": "This website :) React, Vite and tailwindcss.",
//         "githubLink": "https://github.com/abk171/portfolio"
//     },
//     {
//         "title": "MyYOLO",
//         "description": "Dynamic tanh + ConvNext integration for YOLOv11, forked from ultralytics. Tested on MS COCO.",
//         "githubLink": "https://github.com/abk171/ultralytics"
//     },
//     {
//         "title": "InfinityGPT",
//         "description": "Multimodal LLM for images, text and speech. Conducted fine-tuning and benchmarking on well known benchmarks.",
//         "githubLink": "https://github.com/macabdul9/InfGPT"
//     },

    

//     {
//         "title": "First Patient Report",
//         "description": "BioHacks 2024 submission for an automatic transcription service for EMTs to complete hospital handover forms.",
//         "githubLink": "http://github.com/AnuragJCChaturvedi/piar-backend"
//     },

//     {
//         "title": "Paint Statistics,PPG",
//         "description": "Regression and classification of paint quality data in R.",
//         "githubLink": "https://github.com/abk171/infsci-2595"
//     },
//     {
//         "title": "Tooth x-ray dataset augmentation",
//         "description": "CycleGAN generated tooth-xray and corresponding segmentation masks in PyTorch.",
//         "githubLink": "https://github.com/abk171/Artificial-Neural-Networks/tree/main/projects"
//     }
// ]

function App() {
    const [programLists, setProgramLists] = useState<ProgramList[]>([]);
    const [myWorks, setMyWorks] = useState<WorkCardProps[]>([]);
    const [myProjects, setMyProjects] = useState<ProjectCardProps[]>([]);

    useEffect(() => {
    const loadData = async () => {
        const programs = await (await fetch('/stack.json')).json();
        const works = await (await fetch('/work.json')).json();
        const projects = await (await fetch('/project.json')).json();

        setProgramLists(programs);
        setMyWorks(works);
        setMyProjects(projects);
    };

loadData();
}, []);
   
    return(
        <>
            <div className="flex flex-col md:flex-row justify-start">
                <Router>
                    <NavBar />
                    <div className="max-w-[750px] mt-[15vh] flex-1 p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About plists={programLists}/>} />
                        <Route path="/experience" element={<Experience works={myWorks} />} />
                        <Route path="/projects" element={<Projects projects={myProjects}/>} />
                    </Routes>
                    <Footer/>
                    </div>

                </Router>
            </div>
            
        </>
    )
}

export default App
