import { Link } from "react-router-dom"
import logo from "../assets/CasualCraft-removebg-preview.png"

const Nav2 = () => {
    return (

        <nav className="sticky top-0 z-50">
            <div className="h-20 py-4 px-6 bg-white flex justify-between">
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <Link to="/" >
                        <img style={{ height: '50px' }} src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="lg:flex-col mt-2" id="navbar-cta">
                    <ul className="inline-flex lg:mr-6 xl:mr-10 items-center text-sm font-bold text-rhino-700 hover:text-rhino-400">
                        <li>
                            <Link to="/" className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 mr-6" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <a href="/#Products" className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 mr-6">Products</a>
                        </li>
                    </ul>
                </div>


                <div className="lg:flex-col items-center mt-2">
                    <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5 mt-1 md:mt-0 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 ">
                        <a className="p-2 w-full flex items-center text-sm text-black hover:text-gray-400 focus:outline-none focus:text-gray-400 " href="#">
                            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
                                <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
                            </svg>
                        </a>
                    </div>

                </div>

            </div>
        </nav>

    )
}

export default Nav2