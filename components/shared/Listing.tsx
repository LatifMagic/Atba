import { ListingProps } from "@/types";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import Image from "next/image";

interface Props {
  listing: ListingProps[];
}
const Listing = ({ listing }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listing?.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 shadow-sm rounded-xl cursor-pointer 
            transition ease-in-out duration-300 hover:border-primary"
          >
            <Image
              src={item?.listingImages[0]?.url}
              alt=""
              width={800}
              height={800}
              className="object-cover rounded-t-lg h-[170px]"
            />
            <div className="flex flex-col gap-2 mt-2 p-2">
              <h2 className="text-lg font-semibold">{item?.price} DZD</h2>
              <h2 className="flex gap-1 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                {item?.address}
              </h2>
              <div className="flex gap-2 mt-2">
                <h2 className="flex gap-2 text-sm justify-center items-center text-gray-600">
                  <BedDouble className="h-4 w-4" />
                  {item?.bedroom}
                </h2>
                <h2 className="flex gap-2 text-sm justify-center items-center text-gray-600 border-x-2 px-2">
                  <Bath className="h-4 w-4" />
                  {item?.bathroom}
                </h2>
                <h2 className="flex gap-2 text-sm justify-center items-center text-gray-600">
                  <Ruler className="h-4 w-4" />
                  {item?.area}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
