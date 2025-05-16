import { useEffect, useState } from "react";
import { fetchBlogs } from "../../service/service";
import { BlogType } from "../../types/type";
import PrimaryButton from "../common/PrimaryButton";
import { useNavigate } from "react-router-dom";

const BlogsListing = () => {
  const [blogs, setBlogs] = useState<BlogType[]>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const blogsResponse = await fetchBlogs();
      if (blogsResponse.status === 200) {
        setBlogs(blogsResponse.blogs as BlogType[]);
      }
    })();
  }, []);

  let url = "https://admin.techqilla.com";

  const truncateWords = (text: string, wordLimit: number): string =>
    text.split(" ").slice(0, wordLimit).join(" ") +
    (text.split(" ").length > wordLimit ? " ..." : "");

  console.log(blogs);
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
            <div className="border py-5 px-4" key={idx}>
              <img
                src={`${url}${blog.cover.url}`}
                alt=""
                className="object-cover h-[300px]"
              />
              <div className="">
                <h4 className="font-kindsans-bold text-white py-7 border-b border-[#444446]">
                  {blog.title}
                </h4>
                <div className="py-6">
                  <p className="font-kindsans-regular text-white">
                    {truncateWords(blog.description, 10)}
                  </p>
                </div>
                <PrimaryButton
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate(`/blog/${blog.slug}`, { replace: true });
                  }}
                >
                  Read More
                </PrimaryButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsListing;
