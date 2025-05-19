import { useEffect, useState } from "react";
import { fetchBlogs } from "../../service/service";
import { BlogType } from "../../types/type";
import Blog from "./Blog";

const BlogsListing = () => {
  const [blogs, setBlogs] = useState<BlogType[]>();

  useEffect(() => {
    (async () => {
      const blogsResponse = await fetchBlogs();
      if (blogsResponse.status === 200) {
        setBlogs(blogsResponse.blogs as BlogType[]);
      }
    })();
  }, []);

  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20">
        <h3 className="anton-regular text-5xl md:text-[128px] md:leading-[114px] gradient-stroke-primary absolute -top-10 uppercase">
          READ OUR BLOGS
        </h3>
      </div>
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs?.map((blog, idx) => (
            <Blog blog={blog} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsListing;
