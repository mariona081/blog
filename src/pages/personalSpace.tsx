export default function PersonalSpace() {
    return (
        <main className="relative w-full min-h-screen overflow-hidden bg-cover bg-no-repeat bg-center " style={{backgroundImage: 'url("/img/MariTabs99.png")'}}>
            <div className="absolute inset-0 pointer-events-none z-10 bg-repeat opacity-20"
            style={{ backgroundImage: 'url("/grains.png")' }}>
            </div>
            <div className="relative z-20">
                <section className="flex flex-col justify-center items-center">
                    <div className="w-100 h-150 flex flex-col justify-center items-center gap-8 ">
                        <h3 className="text-black">This is my personal Space </h3>
                        <span className="text-black">You dont have to like it Lol</span>
                    </div>
                </section>
                <section className="flex justify-around items-center">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-60 h-auto" src="img/growth.png"/>
                        <span className="text-black">my growth</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-60 h-auto" src="img/whatIStandFor.png"/>
                        <span className="text-black">What i stand for</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-60 h-auto" src="img/interests.png"/>
                        <span className="text-black">my interests</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-60 h-auto" src="img/work.png"/>
                        <span className="text-black">my work</span>
                    </div>
                </section>
            </div>

           
        </main>
    )
}