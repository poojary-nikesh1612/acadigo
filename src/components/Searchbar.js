"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";

import Link from "next/link";
import IIpucsub from "/IIpucsub.json";
import sslcsub from "/sslcsub.json";
import { slugify } from "@/lib/utils";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const datasets = {
    IIpucsub,
    sslcsub,
  };

  const allSubjects = [];

  Object.entries(datasets).forEach(([Class, data]) => {
    Class = Class.replace("sub", "");
    Object.entries(data).forEach(([stream, subjects]) => {
      subjects.forEach((subject) => {
        allSubjects.push({
          Class,
          stream,
          subject,
        });
      });
    });
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const searchResults = allSubjects.filter((Subject) =>
        Subject.subject.toLowerCase().startsWith(value.toLowerCase())
      );
      setSearchResults(searchResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <div className="flex justify-center relative gap-2 outline outline-1 outline-black focus-within:outline-2 rounded-full p-3 my-5 ">
        <input
          className="outline-none w-full "
          value={query}
          placeholder="Search subjects..."
          onChange={handleSearch}
        />
        <Search size={24} />

        {query.length > 0 && (
          <div className="absolute bg-white border border-gray-300 w-full max-h-[500px] mt-12 z-10 rounded-lg overflow-y-auto p-2">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <Link
                  key={index}
                  href={`/${result.Class.toLowerCase()}/${slugify(
                    result.stream.toLowerCase()
                  )}/${slugify(result.subject.toLowerCase())}`}
                >
                  <div className="flex gap-4 items-center p-2 border-b border-gray-400">
                    <div className="bg-[url(/bg.avif)] rounded-lg w-[150px] h-[100px] flex items-center justify-center text-white  text-center">
                      {result.subject.toUpperCase().replace(/\d+/g, "")}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">
                        {result.subject.replace(/\d+/g, "")}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {result.Class.toUpperCase()}(
                        <span className="text-gray-500 text-xs">
                          {result.stream}
                        </span>
                        )
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center">No results!</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Searchbar;
