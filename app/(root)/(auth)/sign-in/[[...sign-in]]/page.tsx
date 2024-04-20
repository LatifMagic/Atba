import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-full lg:grid-cols-12">
        <aside
          className="max-lg:hidden mt-10 relative block h-16 lg:order-last lg:col-span-5
         lg:h-full xl:col-span-6"
        >
          <Image
            src="/login.png"
            alt="house-searching"
            height={500}
            width={600}
            className=" absolute inset-0 object-cover"
          />
        </aside>

        <main
          className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7
         lg:px-16  xl:col-span-6 lg:mt-10"
        >
          <SignIn />
        </main>
      </div>
    </section>
  );
}
