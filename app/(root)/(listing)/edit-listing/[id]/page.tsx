"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Formik } from "formik";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
interface FormValues {
  type: string;
  propertyType: string;
  bedroom?: number;
  bathroom?: number;
  builtIn?: number;
  parking?: number;
  lotSize?: number;
  area?: number;
  price?: number;
  hoa?: number;
  description?: string;
}

interface Props {
  params: { id: string };
}
const EditListing = ({ params }: Props) => {
  console.log(params);
  const { user } = useUser();
  const router = useRouter();
  const [listing, setListing] = useState<Partial<FormValues>>({});
  console.log(listing?.type);

  useEffect(() => {
    user && verifyUserRecord();
  }, [user]);

  const verifyUserRecord = async () => {
    const { data, error } = await supabase
      .from("listing")
      .select("*")
      .eq("createdBy", user?.primaryEmailAddress?.emailAddress)
      .eq("id", params.id);

    if (data) {
      setListing(data[0]);
    }

    if (data && data.length <= 0) {
      router.replace("/");
    }
  };
  const onSubmitHandler = async (formValue: FormValues) => {
    const { data, error } = await supabase
      .from("listing")
      .update(formValue)
      .eq("id", params.id)
      .select();

    if (data) {
      toast("Listing Updated and Published");
    }
  };

  return (
    <div className="md:px-10 my-10">
      <h2 className="font-bold text-2xl">Property Details</h2>

      <Formik
        initialValues={{
          type: "Sell",
          propertyType: "",
          profileImage: user?.imageUrl,
          fullName: user?.fullName,
        }}
        onSubmit={(values) => {
          console.log(values);
          onSubmitHandler(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="p-8 rounded-lg shadow-md flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Choose Category</h2>
                  <RadioGroup
                    defaultValue={listing?.type}
                    onValueChange={(v) => (values.type = v)}
                  >
                    <div className="flex items-center space-x-2">
                      {listing?.type === "Sell" ? (
                        <RadioGroupItem value="Sell" id="Sell" checked />
                      ) : (
                        <RadioGroupItem value="Sell" id="Sell" />
                      )}
                      <Label htmlFor="Sell">Sell</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      {listing?.type === "Rent" ? (
                        <RadioGroupItem value="Rent" id="Rent" checked />
                      ) : (
                        <RadioGroupItem value="Rent" id="Rent" />
                      )}
                      <Label htmlFor="Rent">Rent</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Property Type</h2>
                  <Select
                    onValueChange={(e) => (values.propertyType = e)}
                    name="propertyType"
                    defaultValue={listing?.propertyType}
                    required
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue
                        placeholder={
                          listing?.propertyType
                            ? listing.propertyType
                            : "Select Property Type"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="House">House</SelectItem>
                      <SelectItem value="Apartment">Apartment</SelectItem>
                      <SelectItem value="Land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Bedroom</h2>
                  <Input
                    type="number"
                    placeholder="Ex.2"
                    defaultValue={listing?.bedroom}
                    name="bedroom"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Bathroom</h2>
                  <Input
                    type="number"
                    placeholder="Ex.2"
                    defaultValue={listing?.bathroom}
                    name="bathroom"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Built In</h2>
                  <Input
                    type="number"
                    placeholder="Ex.200 m²"
                    defaultValue={listing?.builtIn}
                    name="builtIn"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Parking</h2>
                  <Input
                    type="number"
                    placeholder="Ex.2"
                    defaultValue={listing?.parking}
                    name="parking"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Lot Size (m²)</h2>
                  <Input
                    type="number"
                    placeholder="Ex.250"
                    defaultValue={listing?.lotSize}
                    name="lotSize"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Area</h2>
                  <Input
                    type="number"
                    placeholder="Ex.200"
                    defaultValue={listing?.area}
                    name="area"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">
                    Selling Price (DZD)
                  </h2>
                  <Input
                    type="number"
                    placeholder="8000000"
                    defaultValue={listing?.price}
                    name="price"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">
                    Hoa (Per Month) (DZD)
                  </h2>
                  <Input
                    type="number"
                    placeholder="25000"
                    defaultValue={listing?.hoa}
                    name="hoa"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Description</h2>
                  <Textarea
                    placeholder=""
                    name="description"
                    defaultValue={listing?.description}
                  />
                </div>
              </div>
              <div className="flex gap-5 justify-end">
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:text-white hover:border-accent"
                >
                  Save
                </Button>
                <Button className="">Save & Publish</Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditListing;
