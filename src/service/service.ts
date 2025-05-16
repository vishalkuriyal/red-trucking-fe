import { axiosClient } from "../api/axiosClient"
import { BlogType } from "../types/type"

export const fetchBlogs = async (): Promise<{
  blogs: BlogType[] | null;
  status: number;
}> => {
  try {
    const response = await axiosClient.get("/red-trucking-blogs", {
      params: {
        populate: {
          cover: {
            populate: "*"
          }
        }

      }
    });

    if (response.status === 200) {
      return { blogs: response.data.data, status: response.status };
    }
  } catch (error) {
    console.error("Error:", error);
  }
  return { blogs: null, status: 500 };
}

export const fetchBlogBySlug = async (slug: string): Promise<{
  blog: BlogType | null;
  status: number
}> => {
  try {
    const response = await axiosClient.get("/red-trucking-blogs", {
      params: {
        "filters[slug][$eq]": slug,
        populate: {
          cover: {
            populate: "*",
          },
        },
      },
    });
    if (response.status === 200) {
      return { blog: response.data.data[0], status: response.status };
    }
  } catch (error) {
    console.error("Error:", error);
  }
  return { blog: null, status: 500 }
}