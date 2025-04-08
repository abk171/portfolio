import { useState } from 'react';
import { FaJava, FaPython, FaRProject } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiTypescript } from 'react-icons/si';
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
    "R": <FaRProject/>
}

function Programs({plists}: {plists: ProgramList[]}) {
    const [selectedCount, setSelectedCount] = useState(1);

    const handleClick = (count: number) => {
        setSelectedCount(count)
    }

    return(
        <div className="min-h-[100vh] flex flex-col">
            <h1 className="text-left text-xl text-bold pb-8 ">About</h1>
            <span className="text-sm pt-4 text-gray-500">
                Currently, I am a graduate student at the <a>University of Pittsburgh</a>. 
                I have also taken <i>Intro to deep learning</i> at <a>Carnegie Mellon University</a>, to gain a more comprehensive knowledge of the subject.
            </span>
            <span className="mt-2 text-sm text-gray-500">
                Following are some of the technologies I am proficient in.
            </span>

            {/* <div className="flex flex-row mt-4 text-gray-500 ">
                {plists.map((plist, index) => {
                    let buttonClass = "regular-button-style";

                    if (index === 0) {
                        buttonClass = "!rounded-r-none";
                    } else if (index === plists.length - 1) {
                        buttonClass = "!rounded-l-none";
                    } else {
                        buttonClass = "!rounded-none";
                    }

                    return (
                        <button key={index} className={buttonClass} onClick={() => handleClick(index)}>
                            {plist.name}
                        </button>
                    );
                })}
            </div> */}
            {/* <div className="mt-4 text-gray-500 grid grid-cols-2">
                {
                    plists[selectedCount].stack.map((st, index) => (
                        <div key={index} className="flex items-center">
                            <span className="inline-block">{techMap[st]}</span>
                            <span className="ml-2 inline-block">{st}</span>
                        </div>
                    ))
                }
            </div> */}


        </div>
    );
}

export default Programs;