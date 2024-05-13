"use client";
import ListingMapView from "@/components/shared/ListingMapView";
import SearchNav from "@/components/shared/navbar/SearchNav";
import { Option } from "@/components/ui/autocomplete";
import { ListingProps } from "@/types";
import { supabase } from "@/utils/supabase/client";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [value, setValue] = useState<Option>();
  const [listing, setListing] = useState<ListingProps[]>([]);
  const type = "Sell";

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

  const handleFindClick = async () => {
    console.log(value);
    const searchedAddress = value?.name;
    try {
      const { data, error } = await supabase
        .from("listing")
        .select(`*,listingImages(url,listing_id)`)
        .eq("active", true)
        .eq("type", type)
        .like("wilaya", "%" + searchedAddress + "%")
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
    <div>
      <SearchNav
        address={value}
        setValue={setValue}
        handleFindClick={handleFindClick}
      />
      <ListingMapView
        address={value}
        getLatestListing={getLatestListing}
        listing={listing}
      />
    </div>
  );
};

export default Page;
