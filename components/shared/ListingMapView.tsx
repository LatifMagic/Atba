"use client";
import { supabase } from "@/utils/supabase/client";
import Listing from "./Listing";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ListingProps } from "@/types";

interface Props {
  type: string;
}

const ListingMapView = ({ type }: Props) => {
  const [listing, setListing] = useState<ListingProps[]>([]);
  useEffect(() => {
    getLatestListing();
  }, []);

  const getLatestListing = async () => {
    try {
      const { data, error } = await supabase
        .from("listing")
        .select(`*,listingImages(url,listing_id)`)
        .eq("active", true)
        .eq("type", type)
        .order("id", { ascending: false });

      if (data) {
        setListing(Array.isArray(data) ? data : [data]);
      }
    } catch (error) {
      console.log(error);
      toast("The data did not get fetched");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Listing listing={listing} />
      </div>
      <div>Map</div>
    </div>
  );
};

export default ListingMapView;
