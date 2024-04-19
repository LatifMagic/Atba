import { login, signup } from "./actions";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            src="/House-searching.svg"
            alt="house-searching"
            height={400}
            width={400}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16  xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Atba
            </h1>
            <p className="my-4 leading-relaxed text-gray-500">
              Discover your dream home - your ultimate real estate destination.
              Find, explore, and secure your perfect property with ease.
            </p>
            <form>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" required />
              <label htmlFor="password">Password:</label>
              <input id="password" name="password" type="password" required />
              <button formAction={login}>Log in</button>
              <button formAction={signup}>Sign up</button>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
