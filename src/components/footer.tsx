import LinkedinLogo from '../assets/linkedin.svg'
import GithubLogo from '../assets/github-mark.svg'

function Footer() {
    return(
        <>
            <div className="flex flex-row justify-center items-center pt-8 pb-4">
                <a href='https://www.linkedin.com/in/abhigyan-kishor' target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinLogo} alt='LinkedIn Link' className='ml-2 h-8 w-8'></img>
                </a>
                <a href='https://github.com/abk171' target="_blank" rel="noopener noreferrer">
                    <img src={GithubLogo} alt='Github Link' className='ml-4 h-8 w-8'></img>
                </a>
                
            </div>
            <span className='p-4 text-l'>Made with ❤️</span>
            
        </>
    )
}

export default Footer;