import img5 from '../images/img5.jpg'


const Showcase = () => {
    return (
        <div className="mt-16 md:flex md:flex-row">
            <div className="px-5 flex-1">
                <div className="flex flex-row items-center">
                    <span className="w-4 h-0.5 bg-black rounded-full"></span>
                    <p className="ml-2">Changing the way you grow your career</p>
                </div>
                <div>
                    <h1>Opportunities <span>Designed</span> for Real Life</h1>
                    <p>You can search hundreds of jobs online to find the next step in your carrer. With tools for job search, resumes, company reviews and more ...</p>
                </div>
                <div>
                    <input type="text"/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="md:flex-1">
                <img src={img5} alt="pics"/>
            </div>
        </div>
    )
}

export default Showcase
