import { supabase } from "../SupabaseClient";

export const getAllPosts = async () => {
  const { data, error } = await supabase.from("post").select("*");
  if (error) {
    return;
  }
  return data;
};
