import { Link } from "react-router-dom";

export default function Header() {
    return( <>
    
    <header className="flex items-center justify-center  text-white p-5">
        <nav>
            <ul className="flex items-center mt-10 bg-red">
                <li className="mr-15 lg:text-lg font-semibold">
                    <button>
                        <Link to="/">Blog</Link>
                    </button>
                </li>   
                <li className="lg:text-lg mr-15 font-semibold">
                    <button>
                        <Link to="/blog">Mari Tabs</Link>
                    </button>
                </li>
                <li className="lg:text-lg font-semibold" >
                    <button>
                        <Link to="/blog">About me</Link>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    
    </>
    )
}