"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <div
      className="flex justify-between items-center py-1 px-10 shadow-sm w-full bg-white 
    relative z-10"
    >
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
        <li
          className={`hover:text-accent font-medium text-sm cursor-pointer ${
            path === "/rent" && "text-accent"
          }`}
        >
          Rent
        </li>
        <li
          className={`hover:text-accent font-medium text-sm cursor-pointer ${
            path === "/commercial" && "text-accent"
          }`}
        >
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

      <div className="flex gap-2 items-center">
        <Button className="flex gap-1 ">
          <Plus className="h-4 w-4" />
          Post an Ad
        </Button>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10 ",
              },
              variables: {
                colorPrimary: "#FF4D4D",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Button variant="outline" className="hover:text-white">
              Log in
            </Button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
