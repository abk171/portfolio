import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="">
            <ul className="flex flex-row md:flex-col md:mt-[30vh] justify-center items-center md:items-end md:justify-end">
                <li className="p-2">
                    <Link to="/">Home<span className="inline-block md:hidden ml-2">|</span></Link>
                </li>
                {/* <li className="p-2">
                    <Link to="/about">About<span className="inline-block md:hidden ml-2">|</span></Link>
                </li> */}
                <li className="p-2">
                    <Link to="/experience">Experience<span className="inline-block md:hidden ml-2">|</span></Link>
                </li>
                <li className="p-2">
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
