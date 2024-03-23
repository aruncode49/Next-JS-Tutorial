import Post from "@/models/post.model";
import { connectDB } from "@/lib/connectDB";

export default async function ServerAction() {
  // make db queries direct in components without api
  await connectDB();
  const posts = await Post.find();

  return (
    <div>
      ServerAction
      {posts && JSON.stringify(posts)}
    </div>
  );
}
