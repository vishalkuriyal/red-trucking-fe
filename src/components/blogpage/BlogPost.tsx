import { useEffect, useState } from "react";
import { BlogType } from "../../types/type";
import { useParams } from "react-router-dom";
import { fetchBlogBySlug } from "../../service/service";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import HomeContactUs from "../homepage/HomeContactUs";

const BlogPost = () => {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await fetchBlogBySlug(slug || "");
        setBlog(data.blog as BlogType);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    getBlog();
  }, []);

  console.log("blog", blog);

  const url = "https://admin.techqilla.com";
  return (
    <div className="bg-secondary md:pt-[130px]">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-0 md:pl-20 py-8 sm:py-0 md:pt-8">
        <div className="relative">
          <p className="font-kindsans-medium text-white">
            HOME &gt; <span className="text-primary uppercase">blogs</span>{" "}
          </p>
          <h1 className="anton-regular text-white text-[40px] relative z-20 uppercase">
            r.e.d. BLOGS
          </h1>
          <p className="gradient-stroke-primary anton-regular text-[72px] leading-[70px] relative bottom-7 z-10 uppercase">
            r.e.d. BLOGS
          </p>
        </div>
        <div className="relative">
          <img
            className="w-full object-cover"
            src={`${url}${blog?.cover.url}`}
            alt=""
          />
          <div className="h-full w-[20%] bg-gradient-to-r from-transparent to-primary/50 absolute top-0 right-0"></div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20">
        <h3 className="anton-regular text-[128px] leading-[114px] gradient-stroke-primary absolute -top-10 uppercase">
          READ OUR BLOGS
        </h3>
      </div>
      <div className="py-4 sm:py-10 px-4 sm:px-6 lg:px-20  max-w-screen-2xl mx-auto relative z-20 content">
         {blog?.title && (
          <h2 className="anton-regular uppercase text-4xl mb-8">
            {(() => {
              const words = blog.title.split(' ');
              const halfLength = Math.ceil(words.length / 2);
              const firstHalf = words.slice(0, halfLength).join(' ');
              const secondHalf = words.slice(halfLength).join(' ');
              
              return (
                <>
                  <span className="text-white">{firstHalf}</span>
                  {secondHalf && <span className="text-primary"> {secondHalf}</span>}
                </>
              );
            })()}
          </h2>
        )}
        <p className="font-kindsans-regular text-white text-xl">{ blog?.description}</p>
        <Markdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h3: ({ node, children, ...props }) => {
              // Split the heading text by words
              const text = children?.toString() || "";
              const words = text.split(" ");
              const halfLength = Math.ceil(words.length / 2);

              // Divide the words into two halves
              const firstHalf = words.slice(0, halfLength).join(" ");
              const secondHalf = words.slice(halfLength).join(" ");

              return (
                <h3
                  className="text-3xl mb-4 uppercase anton-regular"
                  {...props}
                >
                  <span className="text-white">{firstHalf}</span>
                  {secondHalf && (
                    <span className="text-primary"> {secondHalf}</span>
                  )}
                </h3>
              );
            },
            p: ({ node, ...props }) => (
              <p
                className="text-[#F5F5F5] my-4 font-kindsans-regular text-lg leading-relaxed"
                {...props}
              />
            ),
            img: ({ node, src, alt, ...props }) => (
              <div className="my-8 relative">
                <img
                  src={src}
                  alt={alt || ""}
                  className="w-full object-cover shadow-lg"
                  {...props}
                />
              </div>
            ),
          }}
        >
          {blog?.content}
        </Markdown>
      </div>
      <HomeContactUs/>
    </div>
  );
};

export default BlogPost;
