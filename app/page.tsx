import Link from "next/link";

import { Logo } from "@/components/ui/icon";

export default function Home() {
  return (
    <main className="">
      <nav className="max-w-3xl mx-auto shadow-black my-7 border-2 border-[#0b0b0b] p-4 rounded-3xl shadow-[7px_7px_#0b0b0b] flex items-center justify-between gap-2">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <Link
              className="font-bold p-3 text-lg hover:text-[#1c92ff] transition-colors duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-bold p-3 text-lg hover:text-[#1c92ff] transition-colors duration-300"
              href="/"
            >
              About
            </Link>
            <Link
              className="font-bold p-3 text-lg hover:text-[#1c92ff] transition-colors duration-300"
              href="/"
            >
              Portfolio
            </Link>
            <Link
              className="font-bold p-3 text-lg hover:text-[#1c92ff] transition-colors duration-300"
              href="/"
            >
              Blog
            </Link>
            <Link
              className="font-bold p-3 text-lg hover:text-[#1c92ff] transition-colors duration-300"
              href="/"
            >
              Shop
            </Link>
          </div>
          <Link
            className="font-bold p-3 text-lg hover:text-[#1c92ff] transition-colors duration-300"
            href="/"
          >
            cart(0)
          </Link>
        </div>
        <div className="bg-[#0b0b0b] p-2 rounded-lg w-12 h-12 text-white flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.9}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
      </nav>
    </main>
  );
}
