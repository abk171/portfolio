

import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
function Footer() {
    return(
        <>
            <div className="mt-20 flex flex-row justify-center items-center pt-8 pb-4 ">
                <a href='https://www.linkedin.com/in/abhigyan-kishor' target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className="ml-2 h-7 w-8 !text-gray-950"/>
                </a>
                <a href='https://github.com/abk171' target="_blank" rel="noopener noreferrer">
                    <SiGithub className="ml-4 h-8 w-8 !text-gray-950"/>
                </a>
                <a href='mailto:abk171@pitt.edu' target="_blank" rel="noopener noreferrer">
                    <MdEmail className="ml-4 h-8 w-8 !text-gray-950"/>
                </a>
                
            </div>
            <span className='pt-4 text-lg inline-block text-center w-full'>Made with ❤️</span>
            
            
        </>
    )
}

export default Footer;