"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const logIn = async (formData) => {
  const email = formData.get("Email");
  const password = formData.get("Password");
  const supabase = createServerActionClient({ cookies });
  await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  redirect("/post");
};
