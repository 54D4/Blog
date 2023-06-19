"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const loading = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return (
    <div className="flex w-full h-[100vh] overflow-hidden justify-center items-center ">
      <h1 className=" text-5xl">Loading...</h1>
    </div>
  );
};

export default loading;
