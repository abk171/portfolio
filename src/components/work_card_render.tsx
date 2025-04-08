import WorkCard, {WorkCardProps} from './work_card'

function WorkCardRender ({ works } : {works: WorkCardProps[]}) {
    return(
        <div className="min-h-[100vh]">
        <h1 className="text-left text-xl text-bold pb-8">Experience</h1>
        <div className="grid gap-4 grid-cols-1">
            {
                works.map(
                    (work, index) => (
                        <WorkCard key={index} {...work}/>
                    )
                )
            }
        </div>

        </div>
    )
}

export default WorkCardRender