"use client";
import Input from "@/components/Input";
import { logIn } from "@/lib/auth/login";

const page = () => {
  return (
    <div className="flex flex-col items-center ">
      <form className="p-5 my-20 bg-[#5AE4A8] rounded-md">
        <Input name={"Email"} />
        <Input name={"Password"} />
        <div className="flex justify-center">
          <button className="px-6 m-3 bg-white rounded-md" formAction={logIn}>
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
