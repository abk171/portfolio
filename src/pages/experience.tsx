import WorkCardRender from '../components/work_card_render'
import {WorkCardProps} from '../components/work_card'


function Experience({ works } : {works: WorkCardProps[]}) {
    return <WorkCardRender works={works}/>;
}

export default Experience;