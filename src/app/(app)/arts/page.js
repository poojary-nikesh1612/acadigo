import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import arts from "/arts.json";

export const metadata = {
  title: "PUC Arts Study Materials | Previous Year Papers & Notes - Acadigo",
  description:
    "Get expert study materials, solved papers, and notes for 2nd PUC Arts Karnataka Board. Access history, political science, sociology & more resources.",
  keywords:
    "PUC Arts, Karnataka Board, 2nd Puc, study materials, previous year papers, history notes, sociology study guide, political science, exam preparation",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title: "PUC Arts Study Materials | Previous Year Papers & Notes - Acadigo",
    description:
      "Download Karnataka 2nd PUC Arts subject-wise materials and question papers. Prepare smarter with Acadigo.",
    url: "https://acadigo.vercel.app/arts",
    type: "website",
  },
};

const Arts = () => {
  return (
    <>
      <Head>
        <title>II PUC Arts Subjects - Explore Courses</title>
        <meta
          name="description"
          content="Discover II PUC Arts subjects. Explore various courses and enhance your knowledge in arts education."
        />
        <meta
          name="keywords"
          content="II PUC Arts, Arts Subjects, Arts Courses, II PUC Syllabus"
        />
        <meta name="author" content="Your Website Name" />
        <meta
          property="og:title"
          content="II PUC Arts Subjects - Explore Courses"
        />
        <meta
          property="og:description"
          content="Explore a wide range of II PUC Arts subjects and courses to boost your knowledge and career opportunities."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="border sm:max-h-[98vh] border-gray-400 sm:overflow-auto rounded-lg p-4">
        <h1 className="text-4xl font-bold"> II PUC ARTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {arts.map((subject, index) => (
            <Card
              key={index}
              className="flex flex-col gap-2 items-center w-full h-[300px] p-2 hover:shadow-3xl hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
            >
              <Link
                href={`/arts/${subject.toLowerCase()}`}
                className="bg-[url(/bg.avif)] rounded-lg w-full h-[85%] flex items-center justify-center"
              >
                <div className="text-white max-w-[90%] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
                  {subject}
                </div>
              </Link>

              <div>
                <Link href={`/arts/${subject.toLowerCase()}`}>
                  <CardTitle className="text-2xl text-blue-600 hover:text-blue-700 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[3px] after:bottom-[1px] after:left-1/2 after:bg-blue-700 after:transition-[width_left] after:duration-200 hover:after:w-full hover:after:left-0">
                    {subject}
                  </CardTitle>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Arts;
