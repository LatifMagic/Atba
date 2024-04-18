"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="flex justify-between items-center py-1 px-10 shadow-sm w-full bg-white">
      <ul className="hidden md:flex gap-6">
        <Link href="/">
          <li
            className={`hover:text-accent font-medium text-sm cursor-pointer ${
              path === "/" && "text-accent"
            }`}
          >
            Buy
          </li>
        </Link>
        <li className="hover:text-accent font-medium text-sm cursor-pointer">
          Rent
        </li>
        <li className="hover:text-accent font-medium text-sm cursor-pointer">
          Commercial
        </li>
      </ul>
      <Link href="/">
        <Image
          src="/atba-4.svg"
          alt="atba-logo"
          height={220}
          width={220}
          className="relative m-[-30px] cursor-pointer"
        />
      </Link>

      <div className="flex gap-2">
        <Button className="flex gap-1">
          <Plus className="h-4 w-4" />
          Post an Ad
        </Button>
        <Button variant="outline" className="hover:text-white">
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
