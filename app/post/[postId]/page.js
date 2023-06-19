import { getPostById } from "@/lib/get/getPostById";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";

const page = async ({ params }) => {
  const data = await getPostById(params.postId);
  const supabase = createServerComponentClient({ cookies });
  const session = await supabase.auth.getSession();
  console.log(data);
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center max-w-[60%]">
        <img src={data[0].img} className="h-[40vh] rounded-xl drop-shadow-lg" />
        <div className="flex flex-col my-10  self-start">
          <h1 className="text-7xl font-bold">{data[0].title}</h1>
          {data[0].MainContent.map((e) => (
            <div className="flex flex-col m-5">
              <h1 className="text-5xl font-medium ">{e.header}</h1>
              <p className="text-xl m-3">{e.content}</p>
            </div>
          ))}
        </div>
        {session.data.session.user.id === data[0].userId && (
          <button>delete</button>
        )}
        <Link
          href={"/post"}
          className="flex items-center justify-center px-4 mx-4 rounded-md py-1 bg-[#5AE4A8] my-7"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default page;
