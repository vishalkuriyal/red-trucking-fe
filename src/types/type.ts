export type BlogType = {
  cover: {
    name: string;
    url: string;
  };
  title: string;
  slug: string;
  description: string;
  name: string;
  createdAt: string;
  techqilla_authors: { name: string; image: { url: string } }[];
  content: string;
};