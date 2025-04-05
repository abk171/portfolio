function NavBar() {
    return (
        <nav className=" bg-white">
            <ul className="flex flex-row md:flex-col md:mt-[30vh] justify-center items-center md:items-end md:justify-end">
                <li className="p-2">
                    <a href="#home">Home<span className="inline-block md:hidden ml-2">|</span></a>
                </li>
                <li className="p-2">
                    <a href="#about">About<span className="inline-block md:hidden ml-2">|</span></a>
                </li>
                <li className="p-2">
                    <a href="#experience">Experience<span className="inline-block md:hidden ml-2">|</span></a>
                </li>
                <li className="p-2">
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
