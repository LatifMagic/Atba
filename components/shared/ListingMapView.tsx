"use client";
import { supabase } from "@/utils/supabase/client";
import Listing from "./Listing";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ListingProps } from "@/types";
import { usePathname } from "next/navigation";
import { Option } from "../ui/autocomplete";

interface Props {
  address: Option | undefined;
  getLatestListing: () => void;
  listing: ListingProps[];
}

const ListingMapView = ({ address, getLatestListing, listing }: Props) => {
  const path = usePathname();
  useEffect(() => {
    getLatestListing();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-10 py-4">
        <h2 className="mb-4 text-xl font-medium text-gray-800">
          Properties for {path === "/rent" ? "Rent" : "Sale"} in Algeria
        </h2>
        {listing.length > 0 ? (
          <Listing listing={listing} />
        ) : (
          <h3>There is no property posted in this Wilaya.</h3>
        )}
      </div>
      <div>Map</div>
    </div>
  );
};

export default ListingMapView;
