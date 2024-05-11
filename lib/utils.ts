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

export const statesOfAlgeria = [
  "",
  "Adrar",
  "Chlef",
  "Laghouat",
  "Oum el Bouaghi",
  "Batna",
  "Béjaia",
  "Biskra",
  "béchar",
  "Blida",
  "Bouira",
  "Tamanrasset",
  "Tébessa",
  "Tlemcen",
  "Tiaret",
  "Tizi Ouzou",
  "Alger",
  "Djelfa",
  "Jijel",
  "Setif",
  "Saida",
  "Skikda",
  "Sidi bel abbés",
  "Annaba",
  "Guelma",
  "Constantine",
  "Médéa",
  "Mostaganem",
  "M'sila",
  "Mascar",
  "Ouargla",
  "Oran",
  "El bayadh",
  "Illizi",
  "Bordj Bou Arreridj",
  "Boumerdés",
  "El Taraf",
  "Tindouf",
  "Tissemsilt",
  "El Oued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "Ain Defla",
  "Naama",
  "Ain Témouchent",
  "Ghardaia",
  "Relzane",
];
