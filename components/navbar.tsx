"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icons";
import { navItems } from "@/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 max-w-[76.875rem] mx-auto ${
          scrolled ? "py-3 px-4 md:px-8 lg:px-16" : "py-4 px-4 md:px-0"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between transition-all duration-300 ${
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
                    {item.icon && (
                      <Icons.ArrowDown className="ml-1.5 h-4 w-4" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden text-neutral-900 hover:text-black min-[420px]:block">
              <Icons.Search className="h-5 w-5" />
            </button>
            <Link
              href="/signin"
              className="hidden text-neutral-900 hover:text-black sm:block"
            >
              Sign in
            </Link>
            <Link
              href="/sales"
              className="hidden rounded-md border border-slack-purple px-4 py-3 hover:py-2.75 hover:px-3.75 h-11 font-bold text-nowrap w-[132px] text-sm text-slack-purple hover:border-2 2xl:block"
            >
              TALK TO SALES
            </Link>
            <Link
              href="/signup"
              className="hidden min-[420px]:block rounded-md bg-slack-purple px-4 py-3 text-sm font-bold h-11 text-white hover:bg-purple-900"
            >
              TRY FOR FREE
            </Link>
            <button
              className="block text-gray-700 hover:text-black lg:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            >
              <Icons.Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/">
              <Image
                src="/logo/slack-logo.png"
                alt="Slack"
                width={100}
                height={37}
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-black"
            >
              <Icons.X className="h-6 w-6 cursor-pointer" />
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[17px] font-bold">{item.name}</span>
                    {item.icon && <Icons.ArrowDown className="h-5 w-5" />}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="fixed flex gap-4 justify-between items-center bottom-0 left-0 right-0 p-4">
            <Link
              href="/sales"
              className="rounded-md border border-slack-purple w-full text-center px-4 py-3 hover:py-2.75 hover:px-3.75 h-11 font-bold text-nowrap text-sm text-slack-purple hover:border-2"
            >
              TALK TO SALES
            </Link>
            <Link
              href="/signup"
              className="rounded-md w-full text-center bg-slack-purple px-4 py-3 text-sm font-bold h-11 text-white hover:bg-purple-900"
            >
              TRY FOR FREE
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
