import { useEffect, useState } from "react";
import TopBlogPostHeader from "../components/topBlogPostHeader";
import client from "../Client";

interface Post {
  title: string;
  slug: {
    current: string;
  };
  body: any[];
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

export default function TopBlogPostIntroduction() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type =="post"] | order(_createdAt desc){
          title, 
          slug,
          body, 
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setIsLoading(false);
      });
  }, []);

  const heroShrink = scrollY > 300;
  const flowerClasses = heroShrink ? "w-[400px] fixed right-12 top-32 transition-all duration-700 ease-out z-10" : "w-[90vw] max-w-5xl mx-auto transition-all duration-700 ease-out z-10"
   const flowerWrapperStyle = heroShrink ? {} : {transform: `translateY(${scrollY * 0.2}px)`}

  return (
    <div className="min-h-screen bg-neutral-100 w-full overflow-x-hidden">
      <TopBlogPostHeader />

      {/* Hero section */}
      <div className="pt-32 pb-32 text-center transition-opacity duration-700 ease-out flex flex-col gap-7">
        <h2 className={`text-5xl md:text-6xl  text-black transition-opacity duration-500 ${heroShrink ? "opacity-0" : "opacity-100"}`} style={{fontFamily: 'Brightwall'}}>Are you up for a quiet escape?</h2>
        <div className={`w-2/5 mx-auto h-0.5 bg-black mt-4 mb-6 transition-opacity duration-500 ${heroShrink ?"opacity-0" : "opacity-100" }`} ></div>
        <span className={`text-lg text-black md:text-2xl font-semibold transition-opacity duration-500 ${heroShrink ? "opacity-0" : "opacity-100"}`}>
          Code & Coffee | Between the Lines | On Screen | Growth Journal
        </span>
      </div>

      {/* Floating flower */}
      <div className="relative h-[500px]">
        <div
          className={flowerClasses}
          style={flowerWrapperStyle}
        >
          <img 
            className="w-[110vw] max-w-[900px] object-contain scale-110"
            src="/img/blackRose.svg"
            alt="Floating flower"
            loading="eager"
          />
        </div>
      </div>

    {/* blog post grid */}
      <div className={`pt-40 pb-20 px-4 transition-opacity duration-700 ease-in ${heroShrink ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2  px-4 lg:gap-10 gap-8">
            {isLoading ? (
              <div className="col-span-2 text-center text-xl text-gray-600">Loading...</div>
            ) : posts.length ? (
              posts.map((post) => (
                <div
                  key={post.slug.current}
                  className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
            
                    {post.mainImage?.asset?.url && (
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage?.alt || post.title}
                        className="w-full aspect-[4/3] object-cover  rounded-2xl"
                         loading="eager"
                      />
                    )}
                  
                  <div className=" mt-4 px-4">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h4>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center text-red-500">No blog posts found</div>
            )}
          </div>
        </div>
      </div>
    
  );
}
