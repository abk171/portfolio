import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
// import Welcome from './components/home';
import Home from './pages/home'
import Experience from './pages/experience';
import Projects from './pages/projects';


function App() {
   
    return(
        <>
            <div className="flex flex-col md:flex-row h-screen">
                <Router>
                    <NavBar />
                    <div className="max-w-[750px] mt-[15vh] flex-1 p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/about" element={<About />} /> */}
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
