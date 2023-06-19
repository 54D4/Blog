import Post from "@/components/Post";
import { getAllPosts } from "@/lib/get/getAllPost`s";
import React from "react";

export const revalidate = 0;

const page = async () => {
  const data = await getAllPosts();

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 w-[60%]">
        {data.map((e) => (
          <Post
            title={e.title}
            id={e.id}
            img={e.img}
            description={e.description}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
