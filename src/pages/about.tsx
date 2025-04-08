import { ProgramList } from "../components/programs";
import Programs from "../components/programs";



function About({plists}:{plists: ProgramList[]}) {
    return(
        <>
            <Programs plists={plists}/>
        </>
    );
}

export default About;