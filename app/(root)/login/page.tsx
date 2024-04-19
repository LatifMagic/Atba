import { Button } from "@/components/ui/button";
import { login, signup } from "./actions";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="bg-white mt-10  mb-4">
      <div className="lg:grid lg:min-h-full lg:grid-cols-12">
        <aside className="max-lg:hidden relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            src="/login.png"
            alt="house-searching"
            height={500}
            width={600}
            className=" absolute inset-0 object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16  xl:col-span-6 lg:mt-10">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Atba
            </h1>
            <p className="my-4 leading-relaxed text-gray-500">
              Discover your dream home - your ultimate real estate destination.
              Find, explore, and secure your perfect property with ease.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 h-10 w-full rounded-md border-2 border-gray-300 
                  bg-primary/10 text-sm text-gray-700 shadow-sm"
                  required
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 h-10 w-full rounded-md border-2 border-gray-300 
                  bg-primary/10 text-sm text-gray-700 shadow-sm"
                  required
                />
              </div>

              {/* <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="passwordConfirmation"
                  name="password_confirmation"
                  className="mt-1 p-2 h-10 w-full rounded-md border-2 border-gray-300 
                  bg-primary/10 text-sm text-gray-700 shadow-sm"
                  required
                />
              </div> */}

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button
                  className="inline-block shrink-0 rounded-md px-12  "
                  formAction={signup}
                >
                  Create an account
                </Button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="#" className="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
