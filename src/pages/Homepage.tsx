import { Link } from "react-router-dom";
import { HomeIcon } from '@heroicons/react/24/outline';
import Header from "../components/Header";


export default function HomePage() {
    return <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-10 bg-repeat opacity-20"
            style={{ backgroundImage: 'url("/grains.png")' }}>
        </div>
        <div className="relative z-20">
            <Header/>
            <section className="flex flex-col  items-center justify-center text-center h-screen gap-10 ">
                <div className="flex flex-col  items-center justify-center text-center ">
                    <h1 className=" font-bold text-4xl tracking-wide  md:text-6xl lg:text-8xl"> I'marion</h1>
                    <h6 className="font-semibold">i'm quietly crafting <span className="text-amber-50 ">my perfection </span>of the world through <span className="text-amber-50">a different lens</span></h6>
                </div>
                <button>
                    <Link to="/blog"  className="py-2 px-6  rounded-full shadow text-amber-900 bg-amber-50 border-0 transition-all durtion-500  font-semibold">Explore my blog</Link>
                </button>
                <div className="flex items-end justify-center h-40 ">
                    <div className="bg-white h-13 w-13 rounded-full flex items-center justify-center">
                    <Link to="/"><HomeIcon className="h-8 w-8 text-black" /></Link> 
                    </div>
                </div>
            
            </section>    
        </div>
    </div>
}

 