"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Rightbar from "@/components/Rightbar";
import Comment from "@/components/Comment";

import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { notFound, useParams } from "next/navigation";
import axios from "axios";
import { slugify, unSlugify } from "@/lib/utils";

const Stream = () => {
  const Classes = ["sslc", "iipuc"];
  let { Class, stream } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  stream = unSlugify(stream);

  useEffect(() => {
    document.title = `${Class.toUpperCase()} ${stream.toUpperCase()} - Previous Year Papers & Study Materials`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        `Download ${Class.toUpperCase()} ${stream.toUpperCase()} question papers, model papers, and study materials for better exam preparation.`
      );
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        `${stream} question papers, ${Class.toUpperCase()} ${stream.toUpperCase()} previous papers, Karnataka Board, PUC study materials`
      );
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute("content", "index, follow");
  }, [stream]);

  if (!Classes.includes(Class)) return notFound();

  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await axios.get(`/api/get-subjects/${stream}`);
        setSubjects(response.data?.subjects);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getSubjects();
  }, [stream]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${Class.toUpperCase()} ${stream.toUpperCase()} Question Papers`,
    description: `Download ${Class.toUpperCase()} ${stream.toUpperCase()} previous year question papers, model papers, and study materials to prepare for Karnataka Board exams.`,
    url: `https://acadigo.vercel.app/${Class}/${slugify(stream)}`,
    author: {
      "@type": "Organization",
      name: "Acadigo",
      url: "https://acadigo.vercel.app/",
    },
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-6 bg-gray-100 dark:bg-gray-900">
        <Head>
          <title>
            Loading - {Class.toUpperCase()} {stream.toUpperCase()} Subjects
          </title>
          <meta name="robots" content="noindex, follow" />
        </Head>
        <div className="flex flex-col space-y-4">
          <Skeleton className="h-[150px] w-[300px] rounded-xl bg-gray-300 dark:bg-gray-700" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[280px] bg-gray-300 dark:bg-gray-700" />
            <Skeleton className="h-4 w-[220px] bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>
        <div className="flex space-x-4">
          <Skeleton className="h-[50px] w-[150px] rounded-lg bg-gray-300 dark:bg-gray-700" />
          <Skeleton className="h-[50px] w-[150px] rounded-lg bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
    );
  } else if (subjects.length === 0) {
    return notFound();
  } else {
    return (
      <div>
        <Head>
          <title>{`${Class.toUpperCase()} ${stream.toUpperCase()} - Previous Year Papers & Study Materials`}</title>
          <meta
            name="description"
            content={`Download ${Class} ${stream} question papers, model papers, and study materials for better exam preparation.`}
          />
          <meta
            name="keywords"
            content={`${stream} question papers,  ${Class} ${stream} previous papers, Karnataka Board, PUC study materials`}
          />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content={`${Class.toUpperCase()} ${stream.toUpperCase()} - Download Question Papers`}
          />
          <meta
            property="og:description"
            content={`Get  ${Class} ${stream} previous question papers and study materials for Karnataka Board exams.`}
          />
          <meta
            property="og:url"
            content={`https://acadigo.vercel.app/${Class}/${slugify(stream)}`}
          />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Head>

        <Navbar />
        <main className="p-2 sm:p-6 grid grid-cols-1 sm:grid-cols-[65%_auto] gap-4 min-h-[88vh]">
          <div>
            <section>
              <Head>
                <title>
                  {Class.toUpperCase()} {stream.toUpperCase()} - Explore
                  Subjects
                </title>
                <meta
                  name="description"
                  content={`Discover ${Class.toUpperCase()} ${stream.toUpperCase()} subjects. Explore various courses and enhance your knowledge in ${stream.toUpperCase()} education.`}
                />
                <meta
                  name="keywords"
                  content={`${Class.toUpperCase()} ${stream.toUpperCase()}, ${stream.toUpperCase()} Subjects, ${stream.toUpperCase()} Courses, ${Class.toUpperCase()} Syllabus`}
                />
                <meta name="author" content="Acadigo" />
                <meta
                  property="og:title"
                  content={`${Class.toUpperCase()} ${stream.toUpperCase()} Subjects - Explore Courses`}
                />
                <meta
                  property="og:description"
                  content={`Explore a wide range of ${Class.toUpperCase()} ${stream.toUpperCase()} subjects and courses to boost your knowledge and career opportunities.`}
                />
                <meta property="og:type" content="website" />
              </Head>
              <div className="border sm:max-h-[98vh] border-gray-400 sm:overflow-auto rounded-lg p-4">
                <h1 className="text-4xl font-bold">
                  {" "}
                  {Class.toUpperCase()} {stream.toUpperCase()}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {subjects.map((subject, index) => (
                    <Card
                      key={index}
                      className="flex flex-col gap-2 items-center w-full min-h-[300px] p-2 hover:shadow-3xl hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
                    >
                      <Link
                        href={`/${Class.toLowerCase()}/${slugify(
                          stream.toLowerCase()
                        )}/${slugify(subject.toLowerCase())}`}
                        className="bg-[url(/bg.avif)] rounded-lg w-full h-[85%] flex items-center justify-center"
                      >
                        <div className="text-white max-w-[90%] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
                          {subject.replace(/\d+/g, "")}
                        </div>
                      </Link>

                      <div>
                        <Link
                          href={`/${Class.toLowerCase()}/${slugify(
                            stream.toLowerCase()
                          )}/${slugify(subject.toLowerCase())}`}
                        >
                          <CardTitle className="text-2xl text-blue-600 hover:text-blue-700 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[3px] after:bottom-[1px] after:left-1/2 after:bg-blue-700 after:transition-[width_left] after:duration-200 hover:after:w-full hover:after:left-0">
                            {subject.replace(/\d+/g, "")}
                          </CardTitle>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            <Comment page_id={`${Class}/${stream}`} />
          </div>
          <Rightbar />
        </main>
        <Footer />
      </div>
    );
  }
};

export default Stream;
