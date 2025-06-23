import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function AboutMePage() {
    return (
        <main className=" min-h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-amber-50">
          <div className="bg-black flex items-center justify-end">
            <img src="/img/Aboutme(1).png" alt="About Me 1" className="w-full h-auto object-cover max-h-[80vh]" />
          </div>
      <div className="bg-amber-950 flex items-start">
        <nav className="flex items-start justify-center w-full">
          <ul className="flex items-center mt-10">
            <li className="mr-10">
              <button className="bg-amber-50 h-11 w-11 rounded-full flex items-center justify-center">
                <Link to="/"><HomeIcon className="h-7 w-7 text-amber-950" /></Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-neutral-500 flex flex-col ">
        <div className="bg-amber-100 h-1/2 flex flex-col items-start justify-center gap-8 p-10">
          <h5 className="text-black font-bold">I longed for this escape</h5> 
          <p className="text-amber-950">Something in me shifted. I saw possibilities I’d never considered before.
          For the first time in a long time, I felt curious and excited. I felt something I hadn’t felt in years: hope.</p>
          <button>
                <Link to="/blog"  className="py-2 px-6  rounded-full shadow text-amber-50 bg-amber-950 border-0 transition-all durtion-500  font-semibold">Explore my blog</Link>
            </button>
        </div>
        <div className="bg-black h-1/2 flex items-center justify-center">
          <img src="/img/Aboutme.png" alt="About Me 2" className="w-full h-auto object-cover max-h-[80vh]" />
        </div>
      </div>
        </main>
    )
}