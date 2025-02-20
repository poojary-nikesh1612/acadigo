import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import other from "/other.json";

export const metadata = {
  title: "PUC Study Resources | Extra Subjects & Elective Materials - Acadigo",
  description:
    "Find Karnataka 2nd PUC automobile,beauty & wellness ,IT , extra subject resources, elective courses, and past exam papers for specialized learning.",
  keywords:
    "PUC Karnataka Board,2nd puc, extra subjects, elective courses, additional study materials, previous year papers, exam preparation",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title:
      "PUC Study Resources | Extra Subjects & Elective Materials - Acadigo",
    description:
      "Get additional Karnataka 2nd PUC study materials for elective subjects and special courses.",
    url: "https://yourwebsite.com/other",
    type: "website",
  },
};

const Other = () => {
  return (
    <>
      <Head>
        <title>II PUC Other Subjects | Vocational Courses in Karnataka</title>
        <meta
          name="description"
          content="Explore II PUC vocational courses in Karnataka, including Automobile, IT, Beauty & Wellness, Retail, and Home Science. Get subject-wise details and study resources."
        />
        <meta
          name="keywords"
          content="II PUC Other Subjects, Vocational Courses, Automobile, IT, Beauty & Wellness, Retail, Home Science, Karnataka 2nd PUC, Study Material"
        />
      </Head>

      <section className="border sm:max-h-[98vh] border-gray-400 sm:overflow-auto rounded-lg p-4">
        <h1 className="text-4xl font-bold">
          II PUC Vocational & Other Subjects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {other.map((subject, index) => (
            <Card
              key={index}
              className="flex flex-col gap-2 items-center w-full h-[300px] p-2 hover:shadow-3xl hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
            >
              <Link
                href={`/other/${subject.toLowerCase()}`}
                className="bg-[url(/bg.avif)] rounded-lg w-full h-[85%] flex items-center justify-center"
              >
                <div className="text-white max-w-[90%] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
                  {subject}
                </div>
              </Link>

              <div>
                <Link href={`/other/${subject.toLowerCase()}`}>
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

export default Other;
