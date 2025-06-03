import { useEffect, useState } from "react"

interface QuoteProps {
    quote: string
    author: string
}

export default function FeaturedPage() {
    const quoteBook = [{quote: "The world is a book and those who do not travel read only", author: "Saint Augustine"},
        {quote: "I have no special talent, i am only passionately curious", author: "Albert Einstein"},
        {quote: "if you can dream it, you can do it", author: "Walt Disney"},
        {quote: "You only live once, but if you do it right, once is enough", author: "May West"}]

        const [dailyQuote, setDailyQuote] = useState<QuoteProps>({quote: "", author: ""}) 

        useEffect(() => {
            const randomQuote = quoteBook[Math.floor(Math.random() * quoteBook.length)];
            setDailyQuote(randomQuote)
        }, [])

    return(
    <div className="flex flex-col bg-black h-screen">
        <div className="bg-amber-100 h-1/2 w-full"></div>
        <div className="flex items-center justify-between bg-amber-50 h-1/2 w-full">
            <div className="w-1/2">
                <div className="w-180 ml-40 bg-amber-100 h-70 rounded-2xl "></div>
            </div>
            <div className="w-1/2">
                <div className="m-20  w-150 h-70 flex flex-col gap-5 items-center justify-center text-left">
                    <span className="text-amber-950 font-bold  text-right">"{dailyQuote.quote}"</span>
                    <span className="text-amber-950 font-bold  text-center">-{dailyQuote.author}</span>
                </div> 
            </div>
        </div>
    </div>)
}