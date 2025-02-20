"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";
import arts from "/arts.json";
import commerce from "/commerce.json";
import science from "/science.json";
import languages from "/languages.json";
import other from "/other.json";
import Link from "next/link";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const data = {
    arts,
    commerce,
    science,
    languages,
    other,
  };

  const subjectMap = new Map();

  Object.entries(data).flatMap(([stream, subjects]) =>
    subjects.map((subject) => {
      if (!subjectMap.has(subject)) {
        subjectMap.set(subject, { subject, stream });
      }
    })
  );
  const allSubjects = Array.from(subjectMap.values());

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const searchResults = allSubjects.filter((subject) =>
        subject.subject.toLowerCase().startsWith(value.toLowerCase())
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
                  href={`/${result.stream.toLowerCase()}/${result.subject.toLowerCase()}`}
                >
                  <div className="flex gap-4 items-center p-2 border-b border-gray-400">
                    <div className="bg-[url(/bg.avif)] rounded-lg w-[150px] h-[100px] flex items-center justify-center text-white  text-center">
                      {result.subject.toUpperCase()}
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                      {result.subject}
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
