import React from "react";

import { BlogType } from "../../types/type";
import PrimaryButton from "../common/PrimaryButton";
import { useNavigate } from "react-router-dom";

type BlogProps = {
  blog: BlogType;
  key: number;
};

const Blog = ({ blog, key }: BlogProps) => {
  const navigate = useNavigate();
  let url = "https://admin.techqilla.com";
  const truncateWords = (text: string, wordLimit: number): string =>
    text.split(" ").slice(0, wordLimit).join(" ") +
    (text.split(" ").length > wordLimit ? " ..." : "");

  return (
    <div
      className="border  py-5 px-4 group hover:bg-primary hover:border-primary transition-all duration-500"
      key={key}
    >
      <div className="overflow-hidden">
        <img
          src={`${url}${blog.cover.url}`}
          alt=""
          className="object-cover h-[300px] group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="">
        <h4 className="font-kindsans-bold text-white py-7 border-b border-[#444446] group-hover:border-white transition-all duration-500">
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
  );
};

export default Blog;
