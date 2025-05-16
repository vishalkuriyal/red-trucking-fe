import { useNavigate } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";

const HomeExploreBlogs = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28 flex justify-between">
        <div className="md:w-[25%] flex flex-col gap-4 md:gap-8 justify-between">
          <div>
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
        <div className="grid grid-cols-3 gap-10">
        </div>
      </div>
    </div>
  );
};

export default HomeExploreBlogs;
