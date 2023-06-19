import Link from "next/link";

import { singOut } from "@/lib/auth/signOut";
const HeaderLogged = () => {
  return (
    <header className="flex justify-between py-7 shadow-md mb-6">
      <h1 className="text-4xl m-4">Your Blog</h1>
      <form className="flex  items-center">
        <Link className="m-4" href={"/post"}>
          Post
        </Link>
        <Link className="m-4" href={"/createNewPost"}>
          Create Post
        </Link>
        <Link className="m-4" href={"/home"}>
          Account
        </Link>

        <button
          formAction={singOut}
          className="flex items-center justify-center px-4 mx-4 rounded-md py-1 bg-[#5AE4A8]"
        >
          Logg Out
        </button>
      </form>
    </header>
  );
};

export default HeaderLogged;
