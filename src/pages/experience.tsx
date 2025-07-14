import WorkCardRender from '../components/work_card_render'
import {WorkCardProps} from '../components/work_card'


function Experience({ works } : {works: WorkCardProps[]}) {
    if (!works || works.length === 0) {
        return <div />
    }
    return <WorkCardRender works={works}/>;
}

export default Experience;