import { Link } from "react-router-dom";

export default function HomePage() {
    return <div>
        <section className="flex flex-col  items-center justify-center text-center h-screen gap-5 ">
            <div className="flex flex-col  items-center justify-center text-center ">
                <h1 className=" font-bold text-4xl tracking-wide  md:text-6xl lg:text-8xl"> I'marion</h1>
                <h6 className="font-semibold">i'm quietly crafting<span>my perfection</span>of the world through <span>a different lens</span></h6>
            </div>
            <button>
                <Link to="/blog"  className="py-2 px-6 rounded-full shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all durtion-500 hover:text-black font-bold">Explore my blog</Link>
            </button>
        </section>    
    </div>
}

 