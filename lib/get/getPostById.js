import { supabase } from "../SupabaseClient";

export const getPostById = async (id) => {
  const { data, error } = await supabase.from("post").select("*").eq("id", id);
  if (error) {
    return;
  }
  return data;
};
