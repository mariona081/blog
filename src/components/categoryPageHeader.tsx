import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


export default function CategoryPageHeader() {
    return (<>
     <header className="flex items-center w-full text-amber-900 p-5">
        <nav className="flex items-center justify-between w-full ">
            <div>
                <img className="w-32 h-auto cursor-pointer" src="/img/brownLogo.png" alt="Logo"  loading="eager"/>
            </div>
            <ul className="flex items-center mt-10">
                <li className="mr-20">
                    <button className="bg-neutral-400  h-16 w-16 rounded-full flex items-center justify-center">
                <Link to="/"><HomeIcon className="h-10 w-10 text-black" /></Link> 
                </button>
                </li>
                <li className="mr-20 lg:text-lg font-semibold">
                    <button>
                        <Link to="/">My blog</Link>
                    </button> 
                </li>   
                <li className="lg:text-lg mr-20 font-semibold">
                    <button>
                        <Link to="/blog">Mari tabs</Link>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    </>)
}