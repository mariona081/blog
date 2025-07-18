import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


export default function MariTabsHeader() {
    return (<>
     <header className="flex items-center w-full text-white">
        <nav className="flex items-center justify-between w-full">
            <div>
                <img className="w-40 h-16" src="img/brownLogo.png"/>
            </div>
            <ul className="flex items-center mt-10">
                <li className="mr-10">
                    <button className="bg-amber-950  h-11 w-11 rounded-full flex items-center justify-center">
                <Link to="/"><HomeIcon className="h-7 w-7 text-white" /></Link> 
                </button>
                </li>
                <li className="mr-20 lg:text-lg font-semibold">
                    <button>
                        <Link to="/blog">Blog</Link>
                    </button> 
                </li>   
                <li className="lg:text-lg mr-20 font-semibold">
                    <button className="text-amber-950">
                        <Link to="/mariTabs">Mari Tabs</Link>
                    </button>
                </li>
                
            </ul>
        </nav>
    </header>
    </>)
}
