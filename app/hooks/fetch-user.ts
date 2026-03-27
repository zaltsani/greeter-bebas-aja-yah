import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "~/lib/supabase-client";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
      
      if (authError || !user) return null;

      const { data, error } = await supabaseClient
        .from("profiles")
        .select("name, gender") 
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error.message);
        throw error;
      }

      return data;
    },
  });
}