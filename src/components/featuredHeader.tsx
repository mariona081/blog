import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function FeaturedHeader() {
    return (<>
     <header className="flex items-center w-full bg-amber-100 text-white p-5">
        <nav className="flex items-center justify-between w-full">
            <div>Logo</div>
            <ul className="flex items-center mt-10">
                <li className="mr-10">
                    <button className="bg-amber-950  h-11 w-11 rounded-full flex items-center justify-center">
                <Link to="/"><HomeIcon className="h-7 w-7 text-white" /></Link> 
                </button>
                </li>
                <li className="mr-20 lg:text-lg font-semibold">
                    <button>
                        <Link to="/">Blog</Link>
                    </button> 
                </li>   
                <li className="lg:text-lg mr-20 font-semibold">
                    <button>
                        <Link to="/blog">Mari Tabs</Link>
                    </button>
                </li>
                <li className="lg:text-lg font-semibold mr-20" >
                    <button>
                        <Link to="/blog">About me</Link>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    </>)
}