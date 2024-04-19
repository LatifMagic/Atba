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
          <div className="max-lg:mt-6 max-w-xl lg:max-w-3xl ">
            <h1 className=" text-3xl  font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Atba
            </h1>
            <p className="my-4 leading-relaxed text-gray-500">
              Discover your dream home - your ultimate real estate destination.
              Find, explore, and secure your perfect property with ease.
            </p>
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
