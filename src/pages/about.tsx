import { ProgramList } from "../components/programs";
import Programs from "../components/programs";



function About({plists}:{plists: ProgramList[]}) {
    if (!plists || plists.length === 0) {
        return <div />
    }
    return(
        <>
            <Programs plists={plists}/>
        </>
    );
}

export default About;