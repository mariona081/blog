export default function PersonalSpace() {
    return (
        <main className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-10 bg-repeat opacity-20"
            style={{ backgroundImage: 'url("/grains.png")' }}>
            </div>
            <div className="relative z-20">
                <section>
                    <div>
                        <h3>This is my personal Space </h3>
                    </div>
                    <div>
                        <p>You dont have to like it</p>
                    </div>
                </section>
                <section className="flex justify-around items-center">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-40 h-auto" src="img/growth.png"/>
                        <span>my growth</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-60 h-auto" src="img/whatIStandFor.png"/>
                        <span>What i stand for</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-60 h-auto" src="img/interests.png"/>
                        <span>my interests</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-60 h-auto" src="img/work.png"/>
                        <span>my work</span>
                    </div>
                </section>
            </div>

           
        </main>
    )
}