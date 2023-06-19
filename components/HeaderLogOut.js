import Link from "next/link";
import React from "react";

const HeaderLogOut = () => {
  return (
    <header className="flex justify-between py-7 shadow-md mb-6">
      <h1 className="text-4xl m-4">Your Blog</h1>
      <div className="flex  items-center">
        <option></option>
        <Link className="m-4" href={"/post"}>
          Post
        </Link>
        <Link
          href={"/LoggIn"}
          className="flex items-center justify-center px-4 mx-4 rounded-md py-1 bg-[#5AE4A8]"
        >
          Loggin
        </Link>
      </div>
    </header>
  );
};

export default HeaderLogOut;
