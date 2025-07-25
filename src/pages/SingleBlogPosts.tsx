import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../Client"
import { PortableText } from "@portabletext/react"

interface Post {
  title: string
  body: any[]
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    if (!slug) return

    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          body,
          mainImage {
            asset->{
              _id,
              url
            },
            alt
          }
        }`,
        { slug }
      )
      .then((data) => {
        setSinglePost(data) 
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Fetch error:", err)
        setIsLoading(false)
      })
  }, [slug])

  return (
    <>
      {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading....
        </h1>
      ) : singlePost ? (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-8xl text-center mt-5">
            {singlePost.title}
          </h1>

          {singlePost.mainImage?.asset?.url && (
            <div className="w-full max-w-4xl mx-auto">
              <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="w-full h-auto rounded-lg object-contain"
               loading="eager"
            />
            </div>
          )}

          {Array.isArray(singlePost.body) && (
            <div className="prose prose-xl  md:prose-2xl max-w-none mt-10 text-black">
              <PortableText value={singlePost.body} />
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
            >
              Read more articles
            </Link>
          </div>
        </section>
      ) : (
        <h1 className="text-center text-red-500 mt-10 text-3xl">
          Post not found 😢
        </h1>
      )}
    </>
  )
}
