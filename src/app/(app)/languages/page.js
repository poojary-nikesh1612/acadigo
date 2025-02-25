import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import languages from "/languages.json";

export const metadata = {
  title:
    "PUC Language Study Materials | English, Kannada, Hindi & More - Acadigo",
  description:
    "Find Karnataka 2nd PUC Language resources, including English, Kannada, Hindi, and Sanskrit previous year papers and grammar guides.",
  keywords:
    "PUC Languages,2nd puc, Karnataka Board, English grammar, Kannada study materials, Hindi notes, Sanskrit previous year papers, language exam preparation",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title:
      "PUC Language Study Materials | English, Kannada, Hindi & More - Acadigo",
    description:
      "Download Karnataka 2nd PUC Language subject-wise question papers and study guides.",
    url: "https://acadigo.vercel.app/languages",
    type: "website",
  },
};

const Languages = () => {
  return (
    <>
      <Head>
        <title>
          II PUC Languages Karnataka 2025 | Study Material & Syllabus
        </title>
        <meta
          name="description"
          content="Explore II PUC Languages for Karnataka 2025. Find study materials, syllabus, and resources for Kannada, Hindi, Sanskrit, English, and more."
        />
        <meta
          name="keywords"
          content="II PUC Languages, Karnataka 2025, 2nd PUC, Kannada, Hindi, Sanskrit, English, Study Material, Syllabus"
        />
      </Head>

      <section className="border sm:max-h-[98vh] border-gray-400 sm:overflow-auto rounded-lg p-4">
        <h1 className="text-4xl font-bold">II PUC LANGUAGES</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {languages.map((subject, index) => (
            <Card
              key={index}
              className="flex flex-col gap-2 items-center w-full h-[300px] p-2 hover:shadow-3xl hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
            >
              <Link
                href={`/languages/${subject.toLowerCase()}`}
                className="bg-[url(/bg.avif)] rounded-lg w-full h-[85%] flex items-center justify-center"
              >
                <div className="text-white max-w-[90%] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
                  {subject}
                </div>
              </Link>

              <div>
                <Link href={`/languages/${subject.toLowerCase()}`}>
                  <CardTitle className="text-2xl text-blue-600 hover:text-blue-700 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[3px] after:bottom-[1px] after:left-1/2 after:bg-blue-700 after:transition-[width_left] after:duration-200 hover:after:w-full hover:after:left-0 ">
                    {subject}
                  </CardTitle>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Languages;
