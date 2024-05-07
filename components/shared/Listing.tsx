import { formatPrice } from "@/lib/utils";
import { ListingProps } from "@/types";
import { Bath, BedDouble, Expand, MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface Props {
  listing: ListingProps[];
}
const Listing = ({ listing }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listing?.length > 0
          ? listing?.map((item, index) => (
              <div
                key={index}
                className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl cursor-pointer
            transition ease-in-out duration-300  hover:border-primary/70"
              >
                <div className=" overflow-hidden">
                  <Image
                    src={
                      item?.listingImages[0]
                        ? item?.listingImages[0]?.url
                        : "/property_placeholder.jpg"
                    }
                    alt=""
                    width={800}
                    height={800}
                    className="object-cover h-[170px] transition ease-in-out duration-300 
                  hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2 p-2">
                  <h2 className="text-lg font-semibold">
                    {formatPrice(item?.price)}
                  </h2>
                  <h2 className="flex gap-1 text-sm text-gray-400">
                    <MapPin className="h-4 w-4" />
                    {item?.address}
                  </h2>

                  <p className=" text-gray-900">Beautiful House</p>
                  <div className="flex gap-2 mt-2 py-2 border-t justify-between">
                    <div className="flex ">
                      <h2 className="flex gap-2 text-sm justify-center items-center text-gray-600">
                        <BedDouble className="h-4 w-4" />
                        {item?.bedroom}
                      </h2>
                      <h2
                        className="flex gap-2 text-sm justify-center items-center text-gray-600 
                      border-x-2 px-1 mx-1"
                      >
                        <Bath className="h-4 w-4" />
                        {item?.bathroom}
                      </h2>
                      <h2 className="flex gap-2 text-sm justify-center items-center text-gray-600">
                        <Expand className="h-4 w-4" />
                        {item?.area}
                      </h2>
                    </div>
                    <div>
                      <Badge variant="outline" className="text-gray-500">
                        {item?.propertyType}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className="h-[230px] w-full bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default Listing;
