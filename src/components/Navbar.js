"use client";

import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Searchbar from "./Searchbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <div className="flex justify-between gap-4 items-center px-3 sm:px-5 py-2 border border-gray-400 shadow-md w-[96vw] rounded-xl">
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

            <li className="hover:text-blue-600 hover:underline">
              <DropdownMenu>
                <DropdownMenuTrigger>EXAMS</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href="/comedk" aria-label="COMEDK Exam papers">
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      COMEDK
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/neet" aria-label="NEET Exam papers">
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      NEET
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/kcet" aria-label="KCET Exam papers">
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      KCET
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="hover:text-blue-600 hover:underline">
              <DropdownMenu>
                <DropdownMenuTrigger>II PUC</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href="/iipuc/arts" aria-label="2nd PUC Arts">
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Arts
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/iipuc/commerce" aria-label="2nd PUC Commerce">
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Commerce
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/iipuc/science" aria-label="2nd PUC Science">
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Science
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/iipuc/languages" aria-label="2nd PUC languages">
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Languages
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/iipuc/other" aria-label="2nd PUC other subjects">
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Other
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="hover:text-blue-600 hover:underline">
              <DropdownMenu>
                <DropdownMenuTrigger>SSLC</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link
                    href="/sslc/first language"
                    aria-label="SSLC first languages"
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      First Language
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/second language"
                    aria-label="SSLC second languages"
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Second Language
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/third language"
                    aria-label="SSLC third languages"
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Third Language
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/core subjects"
                    aria-label="SSLC Core Subjects"
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Core Subjects
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/jts subjects"
                    aria-label="SSLC JTS Subjects"
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      JTS Subjects
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/nsqf subjects"
                    aria-label="SSLC NSQF Subjects"
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      NSQF Subjects
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                className="hover:text-blue-600 hover:underline"
                href="/upload-resources"
                aria-label="upload question papers"
              >
                Upload Resources
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
                aria-label="Acadigo Home Page"
                onClick={ToggleMenubar}
              >
                Home
              </Link>
            </li>

            <li className="hover:text-blue-600 hover:underline ">
              <DropdownMenu>
                <DropdownMenuTrigger>EXAMS</DropdownMenuTrigger>
                <DropdownMenuContent className="ml-5 w-52">
                  <Link
                    href="/comedk"
                    aria-label="COMEDK exam papers"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      COMEDK
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="neet"
                    aria-label="NEET exam papers"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      NEET
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="KCET"
                    aria-label="KCET exam papers"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      KCET
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="hover:text-blue-600 hover:underline ">
              <DropdownMenu>
                <DropdownMenuTrigger>II PUC</DropdownMenuTrigger>
                <DropdownMenuContent className="ml-5 w-52">
                  <Link
                    href="/iipuc/arts"
                    aria-label="2nd PUC Arts"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Arts
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/iipuc/commerce"
                    aria-label="2nd PUC Commerce"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Commerce
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/iipuc/science"
                    aria-label="2nd PUC Science"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Science
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/iipuc/languages"
                    aria-label="2nd PUC languages"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Languages
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/iipuc/other"
                    aria-label="2nd PUC other subjects"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Other
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="hover:text-blue-600 hover:underline">
              <DropdownMenu>
                <DropdownMenuTrigger>SSLC</DropdownMenuTrigger>
                <DropdownMenuContent className="ml-5 w-52">
                  <Link
                    href="/sslc/first language"
                    aria-label="SSLC first languages"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      First Language
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/second language"
                    aria-label="SSLC second languages"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Second Language
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/third language"
                    aria-label="SSLC third languages"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Third Language
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/core subjects"
                    aria-label="SSLC Core Subjects"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      Core Subjects
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/jts subjects"
                    aria-label="SSLC JTS Subjects"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      JTS Subjects
                    </DropdownMenuItem>
                  </Link>
                  <Link
                    href="/sslc/nsqf subjects"
                    aria-label="SSLC NSQF Subjects"
                    onClick={ToggleMenubar}
                  >
                    <DropdownMenuItem className="text-base font-bold cursor-pointer">
                      NSQF Subjects
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
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
