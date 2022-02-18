import img5 from '../images/img5.jpg'
import img9 from '../images/img9.jpg'


const Showcase = () => {
    return (
        <div className="mt-16 md:flex md:flex-row border p-5">
            <div className="px-5 md:basis-3/5">
                <div className="flex flex-row items-center">
                    <span className="w-4 h-0.5 bg-lightText rounded-full"></span>
                    <p className="ml-2 text-lightText text-xl">Changing the way you grow your career</p>
                </div>
                <div>
                    <h2 className="text-5xl font-light py-4">Opportunities</h2>
                    <h2 className="text-5xl font-light pb-4"><span className="font-semibold">Designed</span> for Real Life</h2>
                    <p className="text-lightText pt-2 mb-5">You can search hundreds of jobs online to find the next step in your carrer. With tools for job search, resumes, company reviews and more ...</p>
                </div>
                <div className="flex flex-row justify-between">
                    <input type="text" className="p-4 w-full focus:outline-none" placeholder="name@youremail.com"/>
                    <button className="bg-primary p-4 text-white rounded-lg">Subscribe</button>
                </div>
            </div>
            <div className="md:basis-2/5 grid grid-cols-5 md:mt-0 mt-8 px-5 grid-rows-3 grid-flow-col">
                <img src={img5} alt="pics" className="col-start-1 col-span-4 w-full h-auto"/>
                <img src={img9} alt="" className="col-start-3 col-span-3 row-start-2 row-span-2 w-full h-auto"/>
            </div>
        </div>
    )
}

export default Showcase
