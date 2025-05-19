import { useNavigate } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";
import { BlogType } from "../../types/type";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../../service/service";
import Blog from "../blogpage/Blog";

const HomeExploreBlogs = () => {
    const [blogs, setBlogs] = useState<BlogType[]>();
  const navigate = useNavigate()

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
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28 flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
        <div className="md:w-[25%] flex flex-col gap-4 md:gap-8 justify-between">
          <div className="">
            <h3 className="text-white anton-regular text-4xl md:text-[64px] md:leading-[66px] mb-8">
              <span className="text-primary">EXPLORE</span> <br />
              OUR BLOGS
            </h3>
            <p className="font-kindsans-regular text-white">
              Stay up to date with the latest in the trucking and logistics
              industry. From safety tips and compliance news to market trends
              and operational insights, our blog keeps you informed, prepared,
              and ahead of the curve.
            </p>
          </div>
          <div className="">
            <PrimaryButton onClick={() => {
                navigate("/blogs");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}>Go to Blogs</PrimaryButton>
          </div>
        </div>
        <div className="md:w-[70%] grid md:grid-cols-3 gap-6">
          {blogs?.slice(0, 3).map((blog, idx) => (
            <Blog blog={blog} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeExploreBlogs;
