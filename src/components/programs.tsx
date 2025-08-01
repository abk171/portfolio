import { useState } from 'react';
import { FaAws, FaBootstrap, FaJava, FaNode, FaPython, FaReact, FaRProject } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { GrStatusUnknown } from 'react-icons/gr';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SiDjango, SiFastapi, SiNumpy, SiOpencv, SiPandas, SiTidyverse, SiTypescript , SiPytorch, SiTensorflow, SiLangchain, SiDocker, SiPostgresql, SiApachehadoop, SiMongodb, SiRedis, SiGooglecloud, SiGithubactions, SiExpress, SiTailwindcss} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

export type ProgramList = {
    name: string,
    stack: string[]
}

const techMap = {
    "Java": <FaJava/>,
    "Python": <FaPython/>,
    "C++": <TbBrandCpp/>,
    "TypeScript": <SiTypescript/>,
    "Go": <FaGolang/>,
    "R": <FaRProject/>,
    "React": <FaReact/>,
    "Node": <FaNode/>,
    "Express": <SiExpress/>,
    "Tailwind": <SiTailwindcss/>,
    "Django": <SiDjango/>,
    "Bootstrap": <FaBootstrap/>,
    "FastAPI": <SiFastapi/>,
    "Pandas": <SiPandas/>,
    "Numpy": <SiNumpy/>,
    "TidyVerse": <SiTidyverse/>,
    "OpenCV": <SiOpencv/>,
    "PyTorch": <SiPytorch />,
    "TensorFlow": <SiTensorflow/>,
    "Langchain": <SiLangchain/>,
    "Docker": <SiDocker/>,
    "PostgreSQL": <SiPostgresql/>,
    "Hadoop": <SiApachehadoop/>,
    "MongoDB": <SiMongodb/>,
    "Redis": <SiRedis/>,
    "GCP": <SiGooglecloud/>,
    "AWS":  <FaAws/>,
    "Git Actions": <SiGithubactions/>
}



function Programs({plists}: {plists: ProgramList[]}) {
    const [selectedCount, setSelectedCount] = useState(2);
    const [isDropdown, setDropdown] = useState(false);

    const handleClick = (count: number) => {
        setSelectedCount(count)
    }

    const handleDropdown = (open: boolean) => {
        setDropdown(!open);
    }
    if (plists.length == 0) return null

    return(
        <div className="flex flex-col">
            <h1 className="text-left text-xl text-bold pb-8 ">About</h1>
            <span className="text-sm pt-4 text-gray-500">
                Currently, I am an R&D Engineer at <a href='https://www.ansys.com/' target='_blank' rel='noopener nonreferrer'>Ansys</a>, where I am applying LLMs to augment various simulation techniques. During my masters, I was a graduate research assistant at the <a href="https://www.pitt.edu/" target="_blank" rel="noopener noreferrer">Pitt HexAI lab</a> where I was involved in applying computer vision to medical imaging problems.
                Along the way, I also took <i>Intro to deep learning</i> at <a href='https://www.cmu.edu/' rel="noopener noreferrer" target="_blank">Carnegie Mellon University</a>, to gain a more comprehensive knowledge of the subject.
            </span>
            <span className="mt-2 text-sm text-gray-500">
                Following are some of the technologies I am proficient in.
            </span>

            
            <div className="flex flex-row item-start mt-4 lg:flex-col text-gray-500 text-sm lg:items-center" >
                {/* Create the buttons here */}
                <div className="flex flex-col lg:flex-row mt-4 ">
                    {plists.map((plist, index) => {
                        let baseButtonClass = "w-[140px] flex-none text-[#646cff] !bg-[#FFFFFF] hover:!shadow-xl ";
                        let buttonClass = "";

                        if (index === 0) {
                            buttonClass = "lg:!rounded-r-none";
                        } else if (index === plists.length - 1) {
                            buttonClass = "lg:!rounded-l-none";
                        } else {
                            buttonClass = "lg:!rounded-none";
                        }
                        baseButtonClass = baseButtonClass + buttonClass + " group ";
                        // for dropdown
                        baseButtonClass = baseButtonClass + `${(index === selectedCount) || (isDropdown)? 'block': 'hidden'} lg:block`;

                        return (
                            <button key={index} className={baseButtonClass} onClick={() => {handleClick(index); handleDropdown(isDropdown);}}>
                                {plist.name}<span className={"ml-1 group-hover:rotate-180 " + `${(index == selectedCount) ? 'inline-block': 'hidden'} lg:hidden`}><MdKeyboardArrowDown /></span>
                            </button>
                        );
                    })}
                </div>
                <div className="mt-4 lg:mt-8 ml-4  h-[200px] md:h-[100px] gap-x-5 gap-y-2 flex-none grid grid-cols-1 lg:grid-cols-2 items-start content-start">
                {
                    plists[selectedCount].stack.map((st, index) => (
                        <div key={index} className="flex items-center">
                            <span className="inline-block">{techMap[st as keyof typeof techMap] ?? <GrStatusUnknown />}</span>
                            <span className="ml-2 inline-block">{st}</span>
                        </div>
                    ))
                }
                </div>
            </div>

            <h2 className="text-xl mt-10 mb-4">When I'm Not Coding...</h2>
            <ul className="list-disc list-inside text-gray-500 text-sm">
            <li>You’ll find me digging through AI papers or thinking about weird product ideas.</li>
            <li>Trying to explore all national parks in the US! I have been to smoky mountain and Shenandoah so far.</li>
            <li>Calling my mom for recipe ideas. I’m not much of a cook.</li>
            </ul>
        </div>
    );
}

export default Programs;
