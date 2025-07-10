import { useState, useEffect } from "react"
import client from "../Client"
import { Link } from "react-router-dom"

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
        setPosts(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Fetch error:", err)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white w-full  gap-10 py-12 px-10 md:px-20">
        {isLoading ? (
          <p className="col-span-3 text-center text-xl text-gray-600">Loading...</p>
        ) : posts.length ? (
          posts.map((post) => (
            <Link
              key={post.slug.current}
              to={`/blog/${post.slug.current}`}
              className="rounded-md bg-neutral-200 overflow-hidden shadow hover:shadow-lg transition group"
            >
              {post.mainImage?.asset?.url && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage?.alt || post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-amber-950">{post.title}</h3>
                <p className="text-sm text-gray-700 mt-2 line-clamp-3">Click to read more</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-3 text-center text-red-500">No blog posts found.</p>
        )}
      </div>
    </div>
  )
}

// S9Vmwqi_+d!SCS9 my => supabasefor