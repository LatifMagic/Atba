import ListingMapView from "@/components/shared/ListingMapView";
import SearchNav from "@/components/shared/navbar/SearchNav";

const page = () => {
  return (
    <div>
      <SearchNav />
      <ListingMapView type="Sell" />
    </div>
  );
};

export default page;
