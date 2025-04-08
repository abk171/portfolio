import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="">
            <ul className="flex flex-row md:flex-col md:mt-[30vh] md:w-[100px] justify-center items-center md:items-end md:justify-end place-self-start divide-solid">
                <li className="p-2">
                    <Link to="/">Home</Link><span className="inline-block md:hidden ml-2">|</span>
                </li>
                <li className="p-2">
                    <Link to="/about">About</Link><span className="inline-block md:hidden ml-2">|</span>
                </li>
                <li className="p-2">
                    <Link to="/experience">Experience</Link><span className="inline-block md:hidden ml-2">|</span>
                </li>
                <li className="p-2">
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
