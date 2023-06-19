"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export const singOut = async () => {
  const supabase = createServerActionClient({ cookies });
  await supabase.auth.signOut();
};
