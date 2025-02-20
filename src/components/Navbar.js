"use client";

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const menubarRef = useRef(null);

  const ToggleMenubar = () => {
    if (menubarRef.current) {
      menubarRef.current.style.marginLeft =
        menubarRef.current.style.marginLeft === "0px" ? "-100%" : "0px";
    }
    menubarRef.current.style.marginLeft === "-100%"
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  return (
    <>
      <nav
        className="flex flex-col items-center mt-3 relative "
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="flex justify-between items-center px-3 sm:px-5 py-2 border border-gray-400 shadow-md w-[96vw] rounded-xl">
          <Menu
            onClick={ToggleMenubar}
            className="sm:hidden cursor-pointer"
            size={38}
            aria-label="Open Menu"
          />
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Acadigo Logo"
              title="Go to Acadigo Home Page"
              priority
            />
          </Link>
          <ul className="sm:flex gap-5 text-base md:text-lg  font-bold hidden">
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/"
                aria-label="Acadigo Home Page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/arts"
                aria-label="2nd PUC Arts"
              >
                Arts
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/commerce"
                aria-label="2nd PUC Commerce"
              >
                Commerce
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/science"
                aria-label="2nd PUC Science"
              >
                Science
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/languages"
                aria-label="2nd PUC Languages"
              >
                Languages
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/other"
                aria-label="upload question papers"
              >
                Other
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[94vw] sm:hidden">
          <Searchbar />
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        ref={menubarRef}
        className="menubar w-screen h-screen z-10 -mt-[11.5rem] absolute ml-[-100%] transition-all duration-300 ease-in-out"
      >
        <div
          className=" h-[90vh]  w-[85vw]  border border-gray-400 shadow-md bg-white rounded-r-lg py-4 "
          role="navigation"
          aria-label="Mobile Navigation"
          aria-hidden="true"
        >
          <div className="flex gap-5 justify-between px-2">
            <Link href="/" aria-label="Home">
              <Image
                src="/logo.png"
                width={200}
                height={200}
                alt="Acadigo Logo"
                title="Go to Acadigo Home Page"
                loading="lazy"
              />
            </Link>
            <X
              size={34}
              className="cursor-pointer"
              onClick={ToggleMenubar}
              aria-label="Close Menu"
            />
          </div>
          <ul className="flex flex-col gap-5 text-lg font-bold px-5 mt-5">
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/"
                aria-label="Home"
                onClick={ToggleMenubar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/arts"
                aria-label="2nd PUC Arts"
                onClick={ToggleMenubar}
              >
                Arts
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/commerce"
                aria-label="2nd PUC Commerce"
                onClick={ToggleMenubar}
              >
                Commerce
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/science"
                aria-label="2nd PUC Science"
                onClick={ToggleMenubar}
              >
                Science
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/languages"
                aria-label="2nd PUC Languages"
                onClick={ToggleMenubar}
              >
                Languages
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/other"
                aria-label="upload question papers"
                onClick={ToggleMenubar}
              >
                Other
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/upload-resources"
                aria-label="upload question papers"
                onClick={ToggleMenubar}
              >
                Upload Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
