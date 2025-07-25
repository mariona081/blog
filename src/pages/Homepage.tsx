import { Link } from "react-router-dom";
import { HomeIcon } from '@heroicons/react/24/outline';
import Header from "../components/Header";


export default function HomePage() {
    return <div className="relative w-screen h-screen overflow-hidden bg-cover bg-no-repeat bg-center">
        <div className="absolute t-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 pointer-events-none z-20 bg-repeat opacity-20"
            style={{ backgroundImage: 'url("/img/heroGrains.svg")' }}>
        </div>
        <div className="relative z-30">
            <Header/>
            <section className="flex flex-col  items-center justify-center text-center h-screen">
                <div className=" relative group flex flex-col items-center justify-center">
                    <div className="relative w-80 ">
                        <img className="w-80 h-auto group-hover:opacity-0 transition-opacity duration-200 cursor-pointer" src="/img/marion.png"/>
                        <img className="w-90 h-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer" src="/img/marionHover.png"/>
                    </div>
                    <h6 className="font-thin opacity-100 group-hover:opacity-0 transition-opacity duration-500 mt-6">i'm quietly crafting <span className="text-amber-50 " style={{fontFamily: 'Brightwall'}}>my perfection </span>of the world through <span className="text-amber-50" style={{fontFamily: 'Brightwall'}}>a different lens</span></h6>
                    <button className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Link to="/aboutMe"  className="py-2 px-6  rounded-full shadow text-amber-900 bg-amber-50 border-0 transition-all durtion-500  font-semibold">Explore my blog</Link>
                    </button>
                </div>
                <div className="flex items-end justify-center h-40 ">
                    <div className="bg-white h-13 w-13 rounded-full flex items-center justify-center">
                    <Link to="/"><HomeIcon className="h-8 w-8 text-black" /></Link> 
                    </div>
                </div>
            
            </section>    
        </div>
    </div>
}

 