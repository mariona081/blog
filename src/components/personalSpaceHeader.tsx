import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


export default function PersonalSpaceHeader() {
    return (<>
     <header className="flex items-center w-full text-white p-5">
        <nav className="flex items-center justify-between w-full ">
            <div>
                <img className="w-40 h-16" src="img/brownLogo.png"/>
            </div>
            <ul className="flex items-center mt-10">
                <li className="mr-10">
                    <button className="bg-neutral-50  h-11 w-11 rounded-full flex items-center justify-center">
                <Link to="/"><HomeIcon className="h-7 w-7 text-black" /></Link> 
                </button>
                </li>
                <li className="mr-20 lg:text-lg font-semibold">
                    <button>
                        <Link to="/">My Blog</Link>
                    </button> 
                </li>   
                <li className="lg:text-lg mr-20 font-semibold">
                    <button>
                        <Link to="/blog">Mari Tabs</Link>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    </>)
}