import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function AboutMePage() {
    return (
        <main className=" min-h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-amber-50 py-12 px-10 md:px-20">
             <div className="bg-black flex items-center justify-center">
        <img src="/img/Aboutme(1).png" alt="About Me 1" className="w-full h-auto object-cover max-h-[80vh]" />
      </div>
            <div className="bg-amber-950 flex flex-col justify-between">
        <nav className="flex items-center justify-between w-full">
          <ul className="flex items-center mt-10">
            <li className="mr-10">
              <button className="bg-amber-950 h-11 w-11 rounded-full flex items-center justify-center">
                <Link to="/"><HomeIcon className="h-7 w-7 text-white" /></Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-neutral-500 flex flex-col">
        <div className="bg-amber-100 h-1/2"><h5 className="">I longed for this escape</h5></div>
        <div className="bg-black h-1/2 flex items-center justify-center">
          <img src="/img/Aboutme.png" alt="About Me 2" className="w-full h-auto object-cover max-h-[80vh]" />
        </div>
      </div>
        </main>
    )
}