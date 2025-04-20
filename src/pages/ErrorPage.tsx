import { Link } from "react-router-dom";

export default function Error() {
    return (<div className=" flex flex-col items-center justify-center h-screen "><h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl">Error 404 | page not found</h1> <Link to="/" className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all durtion-500 hover:text-black font-bold">Back to homepage</Link> </div>)
}