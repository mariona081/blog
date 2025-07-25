import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


export default function TopBlogPostHeader() {
    return (<>
     <header className="w-full relative h-24">
        <nav className="flex items-center max-w-7xl mx-auto  px-6 h-full relative">
            <div className="flex items-center">
                <img className="w-32 h-auto" src="img/brownLogo.png"  loading="eager"/>
            </div>
            <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-10  text-amber-900">
                
                <li className="mr-10 lg:text-lg font-semibold">
                    <button>
                        <Link to="/blog">My blog</Link>
                    </button> 
                </li>   
                <li className="mr-10">
                    <button className="  h-11 w-11 rounded-full flex items-center justify-center">
                <Link to="/"><HomeIcon className="h-12 w-12  font-extrabold text-black" /></Link> 
                </button>
                </li>
                <li className="lg:text-lg mr-10 font-semibold">
                    <button>
                        <Link to="/mariTabs">Mari tabs</Link>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    </>)
}
