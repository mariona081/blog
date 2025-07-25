import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function AboutMePage() {
    return (
        <main className=" overflow-hidden h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-amber-50">
          <div className="bg-black flex items-center justify-end">
            <img  src="/img/Aboutme.svg" alt="About Me 1" className=" object-cover h-[85vh] w-auto" loading="eager" />
          </div>
      <div className=" relative bg-amber-950 flex items-center justify-center px-8">
        <div className="relative text-center max-w-md z-10 flex flex-col justify-center items-center gap-4">
            <p className="text-5xl font-medium" style={{fontFamily: 'Brightwall'}}>I'm <span className="text-5xl font-bold" style={{fontFamily: 'Brightwall'}}>Marion</span></p>
            <p className="mt-2 tetx-sm text-start">
            With me it’s all about: a little bit of code, a little bit of cozy. 
            I love stories, quiet days, and finding meaning in the small things.
            </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
            <div className="absolute top-0 left-0 w-20 h-20">
              <div className="w-full h-1 bg-white"></div>
              <div className="w-1 h-full bg-white"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 flex flex-col items-end justify-end">
              <div className="w-1 h-full bg-white"></div>
              <div className="w-full h-1 bg-white"></div>
            </div>
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
      <div className=" flex flex-col justify-start items-center h-screen ">
        <div className="h-1/2 bg-amber-50 flex flex-col justify-center p-8 relative z-10">
          <h5 className="text-black font-bold text-xl">I longed for this escape</h5> 
          <p className="text-amber-950 mt-4 text-sm leading-relaxed">Something in me shifted. I saw possibilities I’d never considered before.
          For the first time in a long time, I felt curious and excited. I felt something I hadn’t felt in years: hope.</p>
          <div>
            <button>
                  <Link to="/blog"  className="mt-6 inline-block py-2 px-6  rounded-full shadow text-amber-50 bg-amber-900 ">Explore my blog</Link>
              </button>
          </div>
        </div>
        <div className="flex-1 h-1/2 bg-black flex items-center justify-center">
          <img src="/img/Aboutme(1).svg" alt="About Me 2" className="object-cover h-[85vh] w-auto shadow-2xl top-20" loading="eager"/>
        </div>
      </div>
        </main>
    )
} 