// type StackCardProps = {
//     name: string;
// };
import NewTabLogo from '../assets/icons8-new-tab.svg'
export type WorkCardProps = {
    workplace: string,
    title: string,
    location: string,
    duration: string,
    link: string,
    description: string[]
}

function WorkCard({ workplace, title, location, duration, link, description }: WorkCardProps) {
    return (
        <>
            <div className=" pt-4 pb-4  border-b border-gray-100 text-left">
                {/* <div className=" flex flex-col sm:flex-row justify-between">
                    <a 
                        className="group flex items-center text-xl font-bold" 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {workplace}
                        <img src={NewTabLogo} alt={`${workplace} link`} className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity inline-block flex-shrink-0"></img>
                    </a>
                    
                    <div className=" font-semibold  self-start">{duration}</div>
                </div> */}
                <div className="flex flex-col sm:flex-row justify-between">
                    <a 
                        className="group flex items-center text-xl font-bold" 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span className="">
                            {workplace}
                            <img 
                                src={NewTabLogo} 
                                alt={`${workplace} link`} 
                                className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity inline-block flex-shrink-0"
                            />
                        </span>
                    </a>
                    
                    <div className="font-semibold self-start">{duration}</div>
                </div>

                <div className="text-xs flex flex-col sm:flex-row justify-between italic text-gray-500">
                    <div>{title}</div>
                    <div>{location}</div>
                </div>

                <ul className="text-xs list-disc list-outside pl-3  pt-2 text-gray-500">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}


export default WorkCard