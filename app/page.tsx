import { getAllBlogPosts } from "@/lib/blog-data";
import HomeClient from "./home-client";

export default async function Home() {
  let firstThree: Awaited<ReturnType<typeof getAllBlogPosts>> = [];
  try {
    const posts = await getAllBlogPosts();
    firstThree = posts.slice(0, 3);
  } catch {
    // Database not available; HomeClient will show empty or fallback
  }

  return <HomeClient initialBlogPosts={firstThree} />;
}
