// type StackCardProps = {
//     name: string;
// };

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
            <div className="shadow-lg p-4 rounded-xl bg-white transition-all duration-200 h-sm w-[90%]">
                <div className="flex flex-col sm:flex-row justify-between">
                    <a 
                        className="text-2xl font-semibold text-black-600 underline hover:underline" 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {workplace}
                    </a>
                    <div className="md:text-xl font-semibold mt-auto">{duration}</div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between italic text-gray-600">
                    <div>{title}</div>
                    <div>{location}</div>
                </div>

                <ul className="text-xs list-disc list-outside pl-5 text-left pt-2 text-gray-500">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}


export default WorkCard