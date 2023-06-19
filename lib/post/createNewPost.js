"use server";
import { sortMainContent } from "@/function/Cms";
import { supabase } from "../SupabaseClient";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const createNewPost = async (formData) => {
  "use server";
  const title = formData.get("Title");
  const description = formData.get("Description");
  const MainContent = formData.get("Main Content");
  const img = formData.get("img");

  await supabase.from("post").insert([
    {
      id: Math.floor(Math.random() * 10000),
      title: title,
      description: description,
      MainContent: sortMainContent(MainContent),
      img: img,
    },
  ]);
  revalidatePath("/");
  redirect("/post");
};
