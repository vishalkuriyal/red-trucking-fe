import { useEffect } from "react";
import HomeContactUs from "../homepage/HomeContactUs";
import BlogPageHero from "./BlogPageHero";
import BlogsListing from "./BlogsListing";

const BlogPage = () => {
  useEffect(() => {
    // Set Page Title
    document.title = "Trucking & Logistics Blog | R.E.D. Trucking";

    // --- Description ---
    let metaDescription = document.querySelector<HTMLMetaElement>(
      "meta[name='description']",
    );
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Explore trucking and logistics insights from R.E.D., including freight transportation, supply chain trends, industry news, and helpful resources.",
    );

    // --- Keywords ---
    // let metaKeywords = document.querySelector<HTMLMetaElement>(
    //   "meta[name='keywords']",
    // );
    // if (!metaKeywords) {
    //   metaKeywords = document.createElement("meta");
    //   metaKeywords.name = "keywords";
    //   document.head.appendChild(metaKeywords);
    // }
    // metaKeywords.setAttribute(
    //   "content",
    //   "Digital Marketing & IT Services Company",
    // );
    // --- Canonical ---
    // let linkTag = document.querySelector<HTMLLinkElement>(
    //   "link[rel='canonical']",
    // );
    // if (!linkTag) {
    //   linkTag = document.createElement("link");
    //   linkTag.rel = "canonical";
    //   document.head.appendChild(linkTag);
    // }
    // linkTag.setAttribute("href", "https://www.techqilla.com");
  }, []);
  return (
    <div>
      <BlogPageHero />
      <BlogsListing />
      <HomeContactUs />
    </div>
  );
};

export default BlogPage;
