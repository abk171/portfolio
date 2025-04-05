import WebsiteImage from '../assets/website_photo.jpg'
function Welcome() {
    return(
        <div className="text-left flex flex-col">
            <div className="flex flex-row  pb-8">
                <div className="h-[240px] w-[240px] overflow-hidden hidden md:inline-block rounded-lg">
                    <img 
                        src={WebsiteImage} 
                        className="object-cover brightness-120 object-center  w-full h-full" 
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
            <span className='p-3 text-gray-500'>Welcome to my portfolio!</span>
            <span className='p-3 text-gray-500'>I am a graduate student at the University of Pittsburgh. I am interested in everything related to deep learning. In my free time, I like to draw, play pickleball and read.</span>
            <span className='p-3 text-gray-500'>Here is my <a href='https://s3.amazonaws.com/attachments.angel.co/12061550-a8ca66fee6886b51a7b729ba5c3ca228.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQ5WAPSITE%2F20250405%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250405T111621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3sxrYyLuFCR952gFDcxwpJUnlGIHxi8cZ21mhehgo1AiBby1%2B9FHTFLQuS2JKEk9dl3XOUF6cO5QIgr%2B9I%2BicdTyqLBQgsEAAaDDIwNzU4MzI3MDQzMyIMOzLyjPHcR0TUujekKugEIa9%2FIm85TD2CDTOnvlRlX0wQJPxSmVlbzeg6PVhYTacjJXWQU7mjjUO6YAs%2FIql9jQq9A0M6xU%2Fc9ZJ0PKic0L8Fawy0aLN8PW%2Bt6xWJoRlUNwvz3Vz8inb7qy6SqSDmyRmqAlySTRht7DkIcAjz9BNziL79lQYGZ85yxcSPSGUDOQiVa1nsXY%2Bz5bwdtJLWCTpaA%2BLU%2FMNk3skD%2FypbDcQxr%2FjbHQeH2rtj%2FBC5%2FXgsE53IXmOjxdokBOEuJJlG%2FYd17gYxYDFWjLxPJH2SbBfb%2FtGT2oLoNUdkeW%2F9ZIpG6cXS%2FcT1NsBeIPDMn2zru6iZmoufwwzYynWZl%2FlPZBmV%2FQxrbIgouK%2B1d%2FnNbpgYqk5UR6UEZT98I2LXs0%2Bp3iEKe%2BRl3nLkn3lzto4IA5WAKGT5RBZ%2FPx9Bp0PyOihEbUgk9iwS5rw%2FOeV%2BXaA0oJ%2FH4j4GvqIMkYpE8e4LxxYPlMfvoCzrwj2%2FARrFEzYJytdB5NMz4aLk2YE039pC86bjBRZo3ydv2B7ibTYXDGUhzz5DqdZYoMJBXNHYpIu9wy63tgsqvYhIEbUaIHR1eqdz8%2BpfpV6dnOhvfc2L8AeSumcB5EQYsPP9wsEYrVZwaqfYRL2EfvpL%2BTZKB2BzbBl%2Fq6kgisrw6LEQAztC5IKYSVPxU6nTeBjvtawM96WmWxD0A3yJt3PJamFETaNgxdihk1POoi%2B25%2FJ4FJICxcOKCd5hyj4UyzMmKAqut77rMvhQa6bQSOaVrCaCgFyftpYxkY7W3y1LsSOJjiIWpZjD8YJDPWuCL5G1i4j8NnOUomBGs1h9OTDLksS%2FBjqbAfSgpUp0KSAnC77do3Gd3Zhp699BG3a5UbeWbtirdZEM0vU2hoi2%2F%2Fw3Z%2BD8DHsjlTpSGF37ukLKFpdBp59ekTRnWP0bEyklRpmjGPP3jBJLeegyG%2BVMjng4i9Z3ZKMk5SQPi8E3poI%2Br9LlLgCYtj2gIohVMQMO8pFvl7Wre9idYcjJ1JXX0%2FDVKlAxQLJQ%2FLAOGd6k5rhBHlXa&X-Amz-SignedHeaders=host&X-Amz-Signature=473a5f97f5deac9006927bfd3b76949f0617e08e0b7748fefcd18e9dddbc8409' target="_blank" 
                            rel="noopener noreferrer">resume</a>.</span>
            <span className='p-3 text-gray-500'>Feel free to browse around 😄</span>

        </div>
    )
}

export default Welcome;