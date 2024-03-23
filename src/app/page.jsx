"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    try {
      const res = await fetch("/api/blog/post");
      if (!res.ok) throw new Error("something went wrong");

      const data = await res.json();
      if (data) setPosts(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    // getAllPosts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      <Link href={"/user/3"}>Go to User</Link>

      <button
        onClick={() => router.push("/parallel")}
        className="bg-gray-600 px-2 py-2 rounded-lg"
      >
        Click With Use Router
      </button>

      {/* data fetching */}
      {/* get all posts using our custom api */}

      {posts.length > 0 ? (
        posts.map((post) => <p key={post.id}>{post.title}</p>)
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
}
