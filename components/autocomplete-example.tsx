"use client";
import { useState } from "react";
import { AutoComplete, Option } from "./ui/autocomplete";
import { AlgeriaProvinces } from "../lib/Algeria_provinces";

export function AutocompleteExample() {
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisbled] = useState(false);
  const [value, setValue] = useState<Option>();

  return (
    <div className="">
      <AutoComplete
        options={AlgeriaProvinces}
        emptyMessage="No resulsts."
        placeholder="Search for State in Algeria"
        isLoading={isLoading}
        onValueChange={setValue}
        value={value}
        disabled={isDisabled}
      />
    </div>
  );
}
