import WebsiteImage from '/website_photo.jpg'
function Welcome() {
    return(
        <div className="text-left flex flex-col">
            <div className="flex flex-row  pb-8">
                <div className="h-[240px] w-[240px] overflow-hidden hidden md:inline-block rounded-lg">
                    <img 
                        src={WebsiteImage} 
                        className="object-cover brightness-120  object-center  w-full h-full" 
                        alt="Cropped Image"
                    />
                </div>
                
                <div className="ml-0 md:ml-5  flex flex-col mt-auto">
                    <h1 className=" font-semibold">
                    👋🏼 Hey, I am Abhigyan!
                    </h1>
                    <span className="pt-4 text-xl text-gray-500">A deep learning enthusiast.</span>
                </div>
            </div>
            <span className='pt-3 text-gray-500'>Welcome to my portfolio!</span>
            <span className='pt-3 text-gray-500'>I am a graduate student at the University of Pittsburgh. I am interested in everything related to deep learning. In my free time, I like to draw, play pickleball and read.</span>
            <span className='pt-3 text-gray-500'>Here is my <a href='https://drive.google.com/file/d/1JSHhcARW4gOtUaF1JQ8jwB_BzV1rdGHu/view?usp=sharing' target="_blank" 
                            rel="noopener noreferrer">resume</a>.</span>
            <span className='pt-3 text-gray-500'>Feel free to browse around 😄</span>

        </div>
    )
}

export default Welcome;