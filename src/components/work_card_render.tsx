import WorkCard, {WorkCardProps} from './work_card'

function WorkCardRender ({ works } : {works: WorkCardProps[]}) {
    return(
        <>

        <div className="grid gap-4 grid-cols-1 max-w-[800px] p-8">
            {
                works.map(
                    (work, index) => (
                        <WorkCard key={index} {...work}/>
                    )
                )
            }
        </div>

        </>
    )
}

export default WorkCardRender