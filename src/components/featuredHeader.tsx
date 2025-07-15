import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function FeaturedHeader() {
    return (<>
     <header className="flex items-center w-full text-white p-5">
        <nav className="flex items-center justify-center w-full">
            <ul className="flex items-center mt-10">
                
                <li className="mr-5 lg:text-lg font-semibold">
                    <button>
                        <Link to="/blog">my Blog</Link>
                    </button> 
                </li>   
                <li className="mr-5">
                    <button className="bg-neutral-100 h-15 w-15 rounded-full flex items-center justify-center">
                <Link to="/"><HomeIcon className="h-10 w-10 text-amber-950" /></Link> 
                </button>
                </li>
                <li className="lg:text-lg mr-5 font-semibold">
                    <button>
                        <Link to="/mariTabs">Mari tabs</Link>
                    </button>
                </li>
                
            </ul>
        </nav>
    </header>
    </>)
}