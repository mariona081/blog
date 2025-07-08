export default function FeaturedPage() {
    return(
    <div className="flex flex-col bg-black h-screen">
        <div className="bg-amber-100 h-1/2 w-full"></div>
        <div className="flex items-center justify-between bg-amber-50 h-1/2 w-full">
            <div className="w-1/2">
                <div className="w-180 ml-40 bg-amber-100 h-70 rounded-2xl "></div>
            </div>
            <div className="w-1/2">
                <div className="m-20  w-150 h-70 flex flex-col gap-5 items-center justify-center text-left">
                </div> 
            </div>
        </div>
    </div>)
}