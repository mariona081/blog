import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function AboutMePage() {
    return (
        <main className=" overflow-hidden h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-amber-50">
          <div className="bg-black flex items-center justify-end">
            <img  src="/img/Aboutme.png" alt="About Me 1" className=" object-cover h-[85vh] w-auto" />
          </div>
      <div className=" relative bg-amber-950 flex items-center justify-center px-8">
        <div className="relative text-center max-w-md z-10">
            <p className="text-lg font-medium">I'm <span className="text-2xl font-bold">Marion</span></p>
            <p className="mt-2 tetx-sm">
            With me it’s all about: a little bit of code, a little bit of cozy. 
            I love stories, quiet days, and finding meaning in the small things.
            </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">

    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
      <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-white" />
      <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-white" />
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-white" />
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-white" />
    </div>
  </div>
        <nav className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center mt-10">
            <li className="mr-4 lg:text-lg font-semibold">
                    <button>
                        <Link to="/">my Blog</Link>
                    </button> 
            </li>   
            <li className="mr-4">
              <button className="bg-amber-50 h-15 w-15 rounded-full flex items-center justify-center">
                <Link to="/"><HomeIcon className="h-10 w-10 text-amber-950" /></Link>
              </button>
            </li>
            <li className="lg:text-lg mr-4 font-semibold">
                    <button>
                        <Link to="/blog">Mari tabs</Link>
                    </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" flex flex-col h-screen relative ">
        <div className="bg-amber-50  flex flex-col  justify-center flex-1 p-10 z-20 relative text-left">
          <h5 className="text-black font-bold text-xl">I longed for this escape</h5> 
          <p className="text-amber-950 mt-4 text-sm leading-relaxed">Something in me shifted. I saw possibilities I’d never considered before.
          For the first time in a long time, I felt curious and excited. I felt something I hadn’t felt in years: hope.</p>
          <button className="mt-6">
                <Link to="/blog"  className=" inline-block py-2 px-6  rounded-full shadow text-amber-50 bg-amber-950 border-0 transition-all durtion-500  font-semibold">Explore my blog</Link>
            </button>
        </div>
        <div className="bg-black  flex items-center justify-center flex-1 relative -mt-12 z-10">
          <img src="/img/Aboutme(1).png" alt="About Me 2" className="object-cover h-[85vh] w-auto shadow-2xl" />
        </div>
      </div>
        </main>
    )
} 