"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  async function getAllUsers() {
    const res = await fetch("https://jsonplaceholder.org/users");
    if (!res.ok) throw new Error("something went wrong");

    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    getAllUsers();
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
      {/* get users */}

      {users.length > 0 ? (
        users.map((user) => <p key={user.id}>{user.firstname}</p>)
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
}
