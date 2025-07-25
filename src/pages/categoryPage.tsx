import { useEffect, useState } from "react";
// import PersonalSpaceHeader from "../components/personalSpaceHeader";
import { useNavigate, useParams } from "react-router-dom";
import CategoryPageHeader from "../components/categoryPageHeader";

interface Category {
    id:string,
    title: string,
    image: string
}
type CategoryId = "growth" | "whatIStandFor" | "interests" | "work"

export default function CategoryPage() {
    const {categoryId} = useParams<{categoryId: CategoryId}>()
    const [selectedCategory, setSelectedCategory] = useState<CategoryId | undefined>(categoryId as CategoryId);
    const navigate = useNavigate()
    const categories: Category[] = [
        {
            id: "growth",
            title: "my growth", 
            image: "/img/growth.png"
        },
        {
            id: "whatIStandFor",
            title: "what i stand for", 
            image: "/img/whatIStandFor.png"
        },
        {
            id: "interests",
            title: "my interests", 
            image: "/img/interests.png"
        },
        {
            id: "work",
            title: "my work", 
            image: "/img/work.png"
        }
    ]

    useEffect(() => {
        setSelectedCategory(categoryId);
     }, [categoryId])
    
    const handleCategoryClick = (category:CategoryId) => {
        setSelectedCategory(category)
        navigate(`/category/${category}`)
    }
    const getSelectedCategory = () => {
        return categories.find(cat => cat.id === selectedCategory)
    }
    const getOtherCategories = () => {
        return categories.filter(cat => cat.id !== selectedCategory)
    }
    return (
        <main className="relative w-full min-h-screen overflow-hidden bg-cover bg-no-repeat bg-center  bg-neutral-300">
            <div className="absolute inset-0 pointer-events-none z-10 bg-repeat opacity-20"
            style={{ backgroundImage: 'url("/grains.png")' }}>
            </div>
            {<CategoryPageHeader/>}
            <div className="relative z-20">
                {selectedCategory && (
                    <div className="flex items-center justify-around">
                        <div className="flex items-center justify-between px-8 py-12 min-h-[70vh]">
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="flex flex-col gap-4 items-center">
                                    <img className="w-96 md:96 h-auto" src={getSelectedCategory()?.image} alt={getSelectedCategory()?.title} loading="eager"/>
                                    <span className="text-black text-3xl font-medium" style={{fontFamily: 'Brightwall'}}>{getSelectedCategory()?.title}</span>
                                </div>
                            </div>
                        </div> 
                        <div className="flex flex-col gap-8 items-center">
                            {getOtherCategories().map((category) => (
                            <div key={category.id} className="flex flex-col gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleCategoryClick(category.id as CategoryId )}>
                                <img className="w-20 md:w-24 h-auto" src={category.image} alt={category.title} loading="eager"/>
                                <span className="text-black text-sm text-center" style={{fontFamily: 'Brightwall'}}>{category.title}</span>
                            </div>
                            ))}  
                        </div>
                    </div>
                )}
            </div>

           
        </main>
    )

}





