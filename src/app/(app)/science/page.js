import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import science from "/science.json";

export const metadata = {
  title:
    "PUC Science Study Materials | Physics, Chemistry & Math Notes - Acadigo",
  description:
    "Access expert study materials, past question papers, and notes for Karnataka 2nd PUC Science. Subjects include Physics, Chemistry, Math, and Biology.",
  keywords:
    "PUC Science, 2nd puc, Karnataka Board, Physics notes, Chemistry study guide, Math previous year papers, Biology, NEET preparation, JEE preparation",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title:
      "PUC Science Study Materials | Physics, Chemistry & Math Notes - Acadigo",
    description:
      "Get Karnataka 2nd PUC Science subject-wise resources, including solved question papers and expert notes.",
    url: "https://acadigo.vercel.app/science",
    type: "website",
  },
};

const Science = () => {
  return (
    <>
      <Head>
        <title>
          II PUC Science Karnataka 2025 | Subjects & Study Resources
        </title>
        <meta
          name="description"
          content="Explore II PUC Science subjects for Karnataka 2025. Get study materials, syllabus, and exam resources for Physics, Chemistry, Biology, and Mathematics."
        />
        <meta
          name="keywords"
          content="II PUC Science, Karnataka 2025, 2nd PUC, Physics, Chemistry, Biology, Mathematics, Study Material, Syllabus"
        />
      </Head>

      <section className="border sm:max-h-[98vh] border-gray-400 sm:overflow-auto rounded-lg p-4">
        <h1 className="text-4xl font-bold">II PUC SCIENCE</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {science.map((subject, index) => (
            <Card
              key={index}
              className="flex flex-col gap-2 items-center w-full h-[300px] p-2 hover:shadow-3xl hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
            >
              <Link
                href={`/science/${subject.toLowerCase()}`}
                className="bg-[url(/bg.avif)] rounded-lg w-full h-[85%] flex items-center justify-center"
              >
                <div className="text-white max-w-[90%] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
                  {subject}
                </div>
              </Link>

              <div>
                <Link href={`/science/${subject.toLowerCase()}`}>
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

export default Science;
