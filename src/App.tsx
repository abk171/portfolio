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
                    <div className="max-w-[750px] mt-[15vh]  p-4">
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
