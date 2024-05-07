import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(number?: number): string {
  if (number === undefined) {
    number = 1;
  }
  const formattedPrice = new Intl.NumberFormat("en-DZ", {
    style: "currency",
    currency: "DZD",
  }).format(number);

  return formattedPrice;
}
