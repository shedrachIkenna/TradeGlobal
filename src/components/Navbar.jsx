import rec from '../images/rec.svg'

const Navbar = () => {

    const openMenu = () => {
        console.log('menu opened')
        document.getElementById('menu').style.right = '0'

    }

    const closeMenu = () => {
        console.log('menu closed')
        document.getElementById('menu').style.right = '-32rem'
    }

    return (
        <div>
            <div className="flex flex-row justify-between px-5 md:py-8 pt-8 pb-2 items-center">
                <div className="flex flex-row justify-between items-center">
                    <div className="">
                        <img src={rec} alt="logo" className="w-8"/>
                    </div>
                    <span className="text-xl pl-3">TradeGlobal</span>
                </div>
                <div className="flex flex-row items-center">
                    <a href="" className="ml-9 hidden md:inline cursor-pointer">Home</a>
                    <a href="" className="ml-9 hidden md:inline cursor-pointer">About</a>
                    <a href="" className="ml-9 hidden md:inline cursor-pointer">Sponsors</a>
                    <a href="" className="ml-9 hidden md:inline cursor-pointer">Projects</a>
                    <a href="" className="ml-9 hidden md:inline cursor-pointer">Contact</a>
                    <a href="" className="ml-9 px-8 py-2 border rounded-3xl hidden md:inline cursor-pointer">Enroll</a>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={openMenu} className="h-8 w-8 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
            <div id="menu" className="h-full w-2/3 bg-white px-5 py-3 border flex flex-col fixed top-18 -right-[32rem] overflow-x-hidden z-20 md:hidden mt-4 transistion duration-500 ease-out">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={closeMenu} className="h-8 w-8 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <a href="" className="flex flex-row py-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="pl-3">Home</span>
                </a>
                <a href="" className="flex flex-row py-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="pl-3">About</span>
                </a>
                <a href="" className="flex flex-row py-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="pl-3">Sponsors</span>
                </a>
                <a href="" className="flex flex-row py-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                    </svg>
                    <span className="pl-3">Projects</span>
                </a>
                <a href="" className="flex flex-row py-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="pl-3">Contact</span>
                  </a>
                  <a href="" className="hover:bg-primary hover:text-white px-6 mt-8 py-2 border rounded-3xl cursor-pointer text-center">Enroll</a>
            </div>
        </div>
    )
}

export default Navbar