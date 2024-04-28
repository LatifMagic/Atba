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

const EditListing = () => {
  return (
    <div className="md:px-10 my-10">
      <h2 className="font-bold text-2xl">Property Details</h2>

      <Formik
        initialValues={{
          type: "sell",
          propertyType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="p-8 rounded-lg shadow-md flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Choose Category</h2>
                  <RadioGroup
                    defaultValue="Sell"
                    onValueChange={(v) => (values.type = v)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Sell" id="Sell" />
                      <Label htmlFor="Sell">Sell</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Rent" id="Rent" />
                      <Label htmlFor="Rent">Rent</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Property Type</h2>
                  <Select
                    onValueChange={(e) => (values.propertyType = e)}
                    name="propertyType"
                    required
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select Property Type" />
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
                    name="bedroom"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Bathroom</h2>
                  <Input
                    type="number"
                    placeholder="Ex.2"
                    name="bathroom"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Built In</h2>
                  <Input
                    type="number"
                    placeholder="Ex.200 m²"
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
                    name="parking"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Lot Size (m²)</h2>
                  <Input
                    type="number"
                    placeholder="Ex.250"
                    name="lotSize"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Area</h2>
                  <Input
                    type="number"
                    placeholder="Ex.200"
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
                    name="sellingPrice"
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
                    name="hoa"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-slate-600">Description</h2>
                  <Textarea placeholder="" name="description" />
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
