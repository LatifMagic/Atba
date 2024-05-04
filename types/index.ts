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

interface ListingProps {
  id: number;
  created_at: Date;
  address: string;
  coordinates: string;
  createdBy: string;
  active: boolean;
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
  profileImage?: string;
  fullName: string;
  listingImages: ListingImagesProps[];
}

interface ListingImagesProps {
  listing_id: number;
  url: string;
}
