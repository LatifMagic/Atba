"use client";
import { AutoComplete } from "@/components/ui/autocomplete";
import { AlgeriaProvinces } from "@/lib/AlgeriaProvinces";

const SearchNav = () => {
  return (
    <div className="flex border-b border-gray-200 px-10 py-1">
      <AutoComplete
        options={AlgeriaProvinces}
        emptyMessage="No results."
        placeholder="Choose a State"
      />
    </div>
  );
};

export default SearchNav;
