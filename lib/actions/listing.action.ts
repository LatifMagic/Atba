import { supabase } from "@/utils/supabase/client";

interface CreateListingParams {
  address: string;
  coordinates: {
    lat: string;
    long: string;
  };
  createdBy: string;
}

export async function createListing({ params: CreateListingParams }) {
  const { value, coordinates, user } = params;
  const { data, error } = await supabase
    .from("listing")
    .insert([{ address: value, coordinates, createdBy: user }])
    .select();
}
