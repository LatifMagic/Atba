"use client";
import { supabase } from "@/utils/supabase/client";
import Listing from "./Listing";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ListingProps } from "@/types";
import { usePathname } from "next/navigation";

interface Props {
  type: string;
}

const ListingMapView = ({ type }: Props) => {
  const [listing, setListing] = useState<ListingProps[]>([]);
  const path = usePathname();
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
      <div className="px-10 py-4">
        <h2 className="mb-4 text-xl font-medium text-gray-800">
          Properties for {path === "/rent" ? "Rent" : "Sale"} in Algeria
        </h2>
        <Listing listing={listing} />
      </div>
      <div>Map</div>
    </div>
  );
};

export default ListingMapView;
