"use client";
import { AutoComplete, Option } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { AlgeriaProvinces } from "@/lib/Algeria_provinces";
import { useState } from "react";

const PostListing = () => {
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisbled] = useState(false);
  const [value, setValue] = useState<Option>();
  console.log(value?.longitude, value?.latitude);

  return (
    <main className="mt-10 md:mx-12 lg:mx-48">
      <div className="flex flex-col gap-5 items-center justify-center p-10">
        <h2 className="font-semibold text-2xl up">Post a Listing</h2>
        <div className="p-10 w-full max-sm:min-w-[350px] max-sm:px-6 md:px-28  rounded-lg border shadow-md flex flex-col gap-5">
          <h2 className="text-gray-600">
            Enter Address which you want to list{" "}
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
          <Button>Next</Button>
        </div>
      </div>
    </main>
  );
};

export default PostListing;
