"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icons";
import { navItems } from "@/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 max-w-[76.875rem] mx-auto ${
        scrolled ? "py-3 px-4 md:px-8 lg:px-16" : "py-4 px-4 md:px-0"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled ? "rounded-full bg-white shadow-lg py-2 px-4" : ""
        }`}
      >
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/logo/slack-logo.png"
              alt="Slack"
              priority
              width={100}
              height={37}
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-neutral-900 hover:text-black font-bold cursor-pointer py-1"
                >
                  <span className="font-bold text-[15px]">{item.name}</span>
                  {item.icon && <Icons.ArrowDown className="ml-1.5 h-4 w-4" />}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden text-gray-700 hover:text-black md:block">
            <Icons.Search className="h-5 w-5" />
          </button>
          <Link
            href="/signin"
            className="hidden text-gray-700 hover:text-black md:block"
          >
            Sign in
          </Link>
          <Link
            href="/sales"
            className="hidden rounded-md border border-slack-purple px-4 py-2 text-sm font-medium text-slack-purple hover:bg-purple-50 2xl:block"
          >
            TALK TO SALES
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-slack-purple px-4 py-2 text-sm font-medium text-white hover:bg-purple-900"
          >
            GET STARTED
          </Link>
          <button className="block text-gray-700 hover:text-black lg:hidden">
            <Icons.Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
