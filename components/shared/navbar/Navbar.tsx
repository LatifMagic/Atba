"use client";
import { logout } from "@/app/(root)/logout/action";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { UserButton, useUser } from "@clerk/nextjs";
import { User } from "@supabase/supabase-js";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const path = usePathname();
  // const { user, isSignedIn } = useUser();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();

      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.log("no user");
      } else {
        setUser(data.user);
      }
    }
    getUser();
  }, []);

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

      <div className="flex gap-2 items-center">
        <Button className="flex gap-1">
          <Plus className="h-4 w-4" />
          Post an Ad
        </Button>
        {user ? (
          <form action={logout}>
            <Button type="submit">Logout</Button>
          </form>
        ) : (
          <Link href={"/login"}>
            <Button variant="outline" className="hover:text-white">
              Log in
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
