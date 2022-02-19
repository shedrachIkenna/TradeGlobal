import img5 from '../images/img5.jpg'
import img9 from '../images/img9.jpg'


const Showcase = () => {
    const handleClick = () => {
        const inputValue = document.getElementById('email');
        inputValue.value = ''
    }

    return (
        <div className="md:mt-10 mt-4 pt-8 md:flex md:flex-row md:p-5">
            <div className="px-5 md:basis-1/2">
                <div className="flex flex-row items-center">
                    <span className="w-4 h-0.5 bg-lightText rounded-full"></span>
                    <p className="ml-2 text-lightText text-md md:text-xl">Changing the way you grow your career</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-3xl md:text-5xl font-light md:py-4 mb-2 md:mb-0">Opportunities</h2>
                    <h2 className="leading-tight text-3xl md:text-5xl font-light md:pb-4 pb-2"><span className="font-semibold">Designed</span> for Real Life</h2>
                    <p className="text-lightText pt-2 mb-5 text-md md:text-xl">You can search hundreds of jobs online to find the next step in your carrer. With tools for job search, resumes, company reviews and more ...</p>
                </div>
                <div className="flex flex-row justify-between">
                    <input id="email" type="text" className="p-4 w-full focus:outline-none" placeholder="name@youremail.com"/>
                    <button className="bg-primary p-4 text-white rounded-lg" onClick={handleClick}>Subscribe</button>
                </div>
            </div>
            <div className="md:basis-1/2 grid grid-cols-5 md:mt-0 mt-14 px-5">
                <div className="col-start-1 col-span-4 row-start-1 row-span-2">
                    <img src={img5} alt="pics" className="w-full"/>
                </div>
                <div className="col-start-3 col-span-3 row-start-2 row-span-2">
                    <img src={img9} alt="" className="w-full"/>
                </div>
            </div>
        </div>
    )
}

export default Showcase
