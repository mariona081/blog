import { useState, useEffect } from "react"
import client from "../Client"
import { Link } from "react-router-dom"
import FeaturedHeader from "../components/featuredHeader"
import { supabase } from "../supabaseClient"

interface Post {
  title: string
  slug: {
    current: string
  }
  body: any[]
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    message: '' 
  })

  useEffect(() => {
    client
      .fetch(
        `*[_type =="post"] | order(_createdAt desc)[0...3]{
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
        setPosts(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Fetch error:", err)
        setIsLoading(false)
      })
  }, []) 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement
    | HTMLTextAreaElement >) => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async () => {
    try {
      const { error } = await supabase.from("messages").insert([FormData]);
      if (error) {
        console.error("Supabase insert error:", error);
        alert("Supabase insert failed: " + error.message);
        return;
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
  
      if (!res.ok) {
        console.error("Email API failed:", data);
        alert("Email sending failed: " + (data.error || "unknown error"));
        return;
      }
  
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("Unexpected error details:", err.message || err);
      alert("Unexpected error: " + (err.message || "Check console for details"));
    }
  };
  

  return (
    <div className="flex flex-col  min-h-screen w-full text-white">
      <FeaturedHeader/>
      <div className="flex justify-center items-center pt-16">
          <h3 className="text-4xl text-white font-light text-center md:text-5xl" style={{fontFamily: 'Brightwall'}}>A glimpse of my articles</h3>
      </div>
      <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full  gap-10 py-12 px-10 md:px-20">
        {isLoading ? (
          <p className="col-span-3 text-center text-xl text-white">Loading...</p>
        ) : posts.length ? (
          posts.map((post) => (
            <Link
              key={post.slug.current}
              to={`/blog/${post.slug.current}`}
              className="rounded-md  overflow-hidden shadow-md hover:shadow-lg transition group"
            >
              {post.mainImage?.asset?.url && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage?.alt || post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
              )} 
              <div className="p-4 bg-transparent">
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <p className="text-sm text-gray-400 mt-1 ">Click to read more</p>
              </div>
            </Link> 
          ))
        ) : (
          <p className="col-span-3 text-center text-red-500">No blog posts found.</p>
        )}
      </div>
      <section className="w-full px-6 md:px-20 py-20  text-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h3 className="text-4xl md:text-5xl font-light text-center" style={{fontFamily: 'Brightwall'}}>I'd love to hear from you.</h3>

          <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}} className="w-full flex flex-col gap-6">
           <div className="flex flex-col   w-full">
              <div className="flex-1">
                <label htmlFor="name" className="text-sm block mb-2"></label>
                <input type="text" name="name" id="name" value={FormData.name} onChange={handleInputChange} placeholder="Name" className="w-full px-4 py-2 bg-white/20 backdrop-blur rounded-md"/>
              </div>
              <div className="flex-1">
                <label htmlFor="name" className="text-sm block mb-2"></label>
                <input type="email" name="email" id="email" value={FormData.email} onChange={handleInputChange} placeholder="Email" className="w-full px-4 py-2 bg-white/20 backdrop-blur rounded-md"/>
              </div>
           </div>
            <div>
              <label htmlFor="message" className="text-sm block mb-2"></label>
              <textarea  name="message" id="message" rows={4} value={FormData.message} onChange={handleInputChange} placeholder="Message" className="w-full px-4 py-2 bg-white/20 backdrop-blur rounded-md"/>
            </div> 
            <div className="pt-4">
              <button type="submit" className="bg-white text-amber-950 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                Send Message
              </button>
            </div>
          </form> 
        </div>
      </section>
    </div>
  )
}

// S9Vmwqi_+d!SCS9 my => supabasefor 
 