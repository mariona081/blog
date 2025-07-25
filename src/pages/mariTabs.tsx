import { useNavigate } from "react-router-dom";
import PersonalSpaceHeader from "../components/personalSpaceHeader";

type CategoryId = "growth" | "whatIStandFor" | "interests" | "work"

export default function PersonalSpace() {
    const navigate = useNavigate()
    const handleCategoryClick = (category: CategoryId) => {
        navigate(`/category/${category}`)
    }
    return (
        <main className="relative w-full min-h-screen overflow-hidden bg-cover bg-no-repeat bg-center " style={{backgroundImage: 'url("/img/MariTabs99.svg")'}}>
            <div className="absolute inset-0 pointer-events-none z-10 bg-repeat opacity-20"
            style={{ backgroundImage: 'url("/grains.png")' }}>
            </div>
            {<PersonalSpaceHeader/>}
            <div className="relative z-20">
                <section className="flex flex-col justify-center items-center">
                    <div className="w-200 h-150 flex flex-col justify-center items-center gap-8 ">
                        <h3 className="text-black  font-extrabold  text-5xl md:text-4xl ">This is my personal touch Space </h3>
                        <span className="text-black text-3xl font-light mt-4" style={{fontFamily: 'Brightwall'}}>You don't have to like it lol</span>
                    </div>
                </section>
                <section className="w-full max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-12 mx-auto">
                    <div className="flex flex-col gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleCategoryClick("growth")}>
                        <img className="w-36 md:w-48 h-auto" src="img/growth.svg"  loading="eager"/>
                        <span className="text-black text-2xl" style={{fontFamily: 'Brightwall'}}>my growth</span>
                    </div>
                    <div className="flex flex-col gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleCategoryClick("whatIStandFor")}>
                        <img className="w-36 md:w-48 h-auto" src="img/values.svg"  loading="eager"/>
                        <span className="text-black text-2xl" style={{fontFamily: 'Brightwall'}}>What i stand for</span>
                    </div>
                    <div className="flex flex-col gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleCategoryClick("interests")}>
                        <img className="w-36 md:w-48 h-auto" src="img/interests.svg"  loading="eager"/>
                        <span className="text-black text-2xl" style={{fontFamily: 'Brightwall'}}>my interests</span>
                    </div>
                    <div className="flex flex-col gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleCategoryClick("work")}>
                        <img className="w-36 md:w-48 h-auto"src="img/work.svg"  loading="eager"/>
                        <span className="text-black text-2xl" style={{fontFamily: 'Brightwall'}}>my work</span>
                    </div>
                </section>
            </div>

           
        </main>
    )
}




