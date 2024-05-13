"use client";
import { AutoComplete, Option } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { AlgeriaProvinces } from "@/lib/AlgeriaProvinces";
import { Search } from "lucide-react";

interface Props {
  address?: Option | undefined;
  handleFindClick: () => void;
  setValue?: (address: Option) => void;
}

const SearchNav = ({ address, setValue, handleFindClick }: Props) => {
  return (
    <div className="flex items-center gap-2 border-b border-gray-200 px-10 py-1">
      <AutoComplete
        options={AlgeriaProvinces}
        emptyMessage="No results."
        placeholder="Choose a State"
        onValueChange={setValue}
        value={address}
      />
      <Button className="flex gap-2" onClick={() => handleFindClick()}>
        <Search className="h-4 w-4" /> Find
      </Button>
    </div>
  );
};

export default SearchNav;
