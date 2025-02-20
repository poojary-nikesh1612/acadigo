import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import commerce from "/commerce.json";

export const metadata = {
  title:
    "PUC Commerce Study Materials | Business, Accounts & Economics - Acadigo",
  description:
    "Find Karnataka 2nd PUC Commerce resources, including business studies, accountancy, and economics question papers and study guides.",
  keywords:
    "PUC Commerce, 2nd puc, Karnataka Board, business studies, accountancy, economics, previous year question papers, study materials, commerce exam prep",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title:
      "PUC Commerce Study Materials | Business, Accounts & Economics - Acadigo",
    description:
      "Download PUC Commerce notes, solved papers, and study materials for Karnataka 2nd PUC. Prepare smarter with Acadigo.",
    url: "https://yourwebsite.com/commerce",
    type: "website",
  },
};

const Commerce = () => {
  return (
    <>
      <Head>
        <title>
          II PUC Commerce Karnataka 2025 | Subjects & Study Material
        </title>
        <meta
          name="description"
          content="Explore II PUC Commerce subjects for Karnataka 2025. Find study material, syllabus, and resources for Accountancy, Business Studies, Economics, and more."
        />
        <meta
          name="keywords"
          content="II PUC Commerce, Karnataka 2025, 2nd PUC Commerce Subjects, Study Material, Syllabus, Accountancy, Business Studies, Economics"
        />
      </Head>

      <section className="border sm:max-h-[98vh] border-gray-400 sm:overflow-auto rounded-lg p-4">
        <h1 className="text-4xl font-bold">II PUC COMMERCE </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {commerce.map((subject, index) => (
            <Card
              key={index}
              className="flex flex-col gap-2 items-center w-full h-[300px] p-2 hover:shadow-3xl hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
            >
              <Link
                href={`/commerce/${subject.toLowerCase()}`}
                className="bg-[url(/bg.avif)] rounded-lg w-full h-[85%] flex items-center justify-center"
              >
                <div className="text-white max-w-[90%] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
                  {subject}
                </div>
              </Link>

              <div>
                <Link href={`/commerce/${subject.toLowerCase()}`}>
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

export default Commerce;
