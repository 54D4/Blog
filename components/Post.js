import Link from "next/link";
import React from "react";

const Post = ({ id, title, img, description }) => {
  return (
    <Link href={`/post/${id}`} className="m-5 drop-shadow-lg ">
      <div className="h-[10vw]  flex justify-center items-center  rounded-md  ">
        <img
          src={img}
          alt="image not found"
          className=" scale-110 rounded-md"
        />
      </div>
      <div className="flex flex-col py-4">
        <p className=" text-md">{title}</p>
        <p className=" text-xs">{description}</p>
      </div>
    </Link>
  );
};

export default Post;
