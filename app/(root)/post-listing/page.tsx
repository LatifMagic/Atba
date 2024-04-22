"use client";
import { AutoComplete, Option } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { AlgeriaProvinces } from "@/lib/Algeria_provinces";
import { createListing } from "@/lib/actions/listing.action";
import { supabase } from "@/utils/supabase/client";
import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PostListing = () => {
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisbled] = useState(false);
  const [value, setValue] = useState<Option>();
  const { user } = useUser();

  const coordinates = { lat: value?.latitude, long: value?.longitude };

  const nextHandler = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("listing")
        .insert([
          {
            address: value?.name,
            coordinates,
            createdBy: user?.primaryEmailAddress?.emailAddress,
          },
        ])
        .select();
      if (data) {
        console.log("New listing has been added, ", data);
        toast("New address added for listing");
      }
    } catch (error) {
      console.log(error);
      toast("Server side error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mt-10 md:mx-12 lg:mx-48">
      <div className="flex flex-col gap-5 items-center justify-center p-10">
        <h2 className="font-semibold text-2xl up">Post a Listing</h2>
        <div className="p-10 w-full max-sm:min-w-[350px] max-sm:px-6 md:px-28  rounded-lg border shadow-md flex flex-col gap-5">
          <h2 className="text-gray-600">
            Enter Address which you want to list
          </h2>
          <AutoComplete
            options={AlgeriaProvinces}
            emptyMessage="No resulsts."
            placeholder="Search for State in Algeria"
            isLoading={isLoading}
            onValueChange={setValue}
            value={value}
            disabled={isDisabled}
          />
          <Button
            disabled={!value || !coordinates || isLoading}
            onClick={nextHandler}
          >
            {isLoading ? <Loader className="animate-spin" /> : "Next"}
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PostListing;
