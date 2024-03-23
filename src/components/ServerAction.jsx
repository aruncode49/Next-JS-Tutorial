import Post from "@/models/post.model";
import { connectDB } from "@/lib/connectDB";

export default async function ServerAction() {
  // make db queries direct in components without api
  await connectDB();
  //   const posts = await Post.find();

  async function createDocument(formData) {
    "use server";
    try {
      const doc = await Post.create({
        title: formData.get("title"),
        body: formData.get("body"),
      });
      if (doc) console.log(doc);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      {/* ServerAction
      {posts && JSON.stringify(posts)} */}

      {/* post form data in db */}
      <form
        action={createDocument}
        className="flex flex-col gap-1 w-auto p-4 text-black items-center"
      >
        <input type="text" name="title" className="px-3 py-2" />
        <br />
        <input type="text" name="body" className="px-3 py-2" />
        <br />
        <button className="bg-white text-black px-3 py-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
