import HomeContactUs from "../homepage/HomeContactUs"
import BlogPageHero from "./BlogPageHero"
import BlogsListing from "./BlogsListing"

const BlogPage = () => {
  return (
    <div>
      <BlogPageHero />
      <BlogsListing />
      <HomeContactUs/>
    </div>
  )
}

export default BlogPage