export default function MariTabs() {
    return  (
        <div className="flex flex-col bg-black h-screen ">
            <div className="bg-neutral-100 h-1/2 w-full flex flex-col items-center justify-center gap-10">
                <h2 className="text-6xl text-amber-950">Are you up for a quiet escape?</h2>
                <div className="w-2/5 border-b-amber-950 h-0.5 bg-amber-950"></div>
                <div><span className="text-2xl text-amber-950 font-semibold">Code & Coffe | Between the Lines | On Screen | Growth Journal</span></div>
            </div>
            <div className="grid grid-cols-4 bg-white h-1/2 w-full gap-5 py-5 px-20 *:mt-15 ">
                <div className="rounded-md bg-neutral-100"/>
                <div className="rounded-md bg-neutral-100"/>
                <div className="rounded-md bg-neutral-100"/>
                <div className="rounded-md bg-neutral-100"/>
            </div>
        </div>)
}