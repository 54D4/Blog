import { TextArea } from "@/components/TextArea";
import { createNewPost } from "@/lib/post/createNewPost";
const page = async () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <form
          className="w-[80%] flex flex-col items-center"
          action={createNewPost}
        >
          <div className="flex">
            <input
              placeholder="image"
              className="border w-28 h-28 mx-6 px-3 rounded-md shadow-md"
              name="img"
              required
            />
            <TextArea name={"Title"} rows={1} cols={40} />
          </div>
          <TextArea name={"Description"} rows={4} cols={80} />
          <TextArea name={"Main Content"} rows={20} cols={80} />
          <div className="flex my-5">
            <button
              className="flex items-center justify-center px-4 mx-4 rounded-md py-1 bg-[#5AE4A8]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
