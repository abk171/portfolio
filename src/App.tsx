import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import myWorks from './assets/work.json'
import myProjects from './assets/project.json'
// Supports weights 100-700
import NavBar from './components/navbar';
import Footer from './components/footer';
// import Welcome from './components/home';
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience';
import Projects from './pages/projects';


const programLists = [
    {
        "name": "Languages",
        "stack": ["Python", "Go", "Java", "R", "TypeScript"]
    },
    {
        "name": "Web",
        "stack": ["React", "Node", "Express", "FastAPI", "Django", "Tailwind"]
    },
    {
        "name": "ML",
        "stack": ["PyTorch", "TensorFlow", "HuggingFace", "Langchain"]
    },
    {
        "name": "Database",
        "stack": ["PostgreSQL", "MongoDB", "FAISS", "Neo4j"]
    },
    {
        "name": "DevOps",
        "stack": ["GCP", "AWS", "Docker", "Git Actions"]
    }
]

function App() {
   
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
