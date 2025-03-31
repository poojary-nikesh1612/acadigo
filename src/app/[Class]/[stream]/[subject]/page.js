"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Rightbar from "@/components/Rightbar";
import { Card, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { CloudDownload, Eye } from "lucide-react";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { useToast } from "@/hooks/use-toast";

const Subject = () => {
  const Classes = ["sslc", "iipuc", "kcet"];
  let { Class, stream, subject } = useParams();
   const { toast } = useToast();
  const [papers, setPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    document.title = `${Class.toUpperCase()} ${subject.toUpperCase()} - Previous Year Papers & Study Materials`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        `Download ${Class.toUpperCase()} ${subject} question papers, model papers, and study materials for better exam preparation.`
      );
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        `${subject} question papers, ${Class.toUpperCase()} ${subject} previous papers, Karnataka Board`
      );
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute("content", "index, follow");
  }, [subject]);

  if (!Classes.includes(Class)) return notFound();

  subject = subject.replace(/%20/g, " ");

  useEffect(() => {
    const getPapers = async () => {
      try {
        const response = await axios.get(`/api/get-papers/${subject}`);
        setPapers(response.data?.papers);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getPapers();
  }, [subject]);

  const getFileId = (url) => {
    const id = url.split("/d/")[1]?.split("/")[0];
    return id;
  };

  const handleDownload = (paper) => {
    router.push(
      "https://drive.google.com/uc?export=download&id=" +
        getFileId(paper.preview)
    );

    toast({
      title: "Your Download Has Started",
      description:
        "Your file is now downloading. It will complete in a few seconds.",
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${Class.toUpperCase()} ${subject} Question Papers`,
    description: `Download ${Class.toUpperCase()} ${subject} previous year question papers, model papers, and study materials to prepare for Karnataka Board exams.`,
    url: `https://acadigo.vercel.app/${Class}/${stream}/${subject}`,
    author: {
      "@type": "Organization",
      name: "Acadigo",
      url: "https://acadigo.vercel.app",
    },
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-6 bg-gray-100 dark:bg-gray-900">
        <Head>
          <title>
            Loading - ${Class.toUpperCase()} {subject.toUpperCase()} Papers
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
  } else if (papers.length === 0) {
    return notFound();
  } else {
    return (
      <div>
        <Head>
          <title>{`${Class.toUpperCase()} ${subject.toUpperCase()} - Previous Year Papers & Study Materials`}</title>
          <meta
            name="description"
            content={`Download ${Class.toUpperCase()} ${subject} question papers, model papers, and study materials for better exam preparation.`}
          />
          <meta
            name="keywords"
            content={`${subject} question papers, ${Class.toUpperCase()} ${subject} previous papers, Karnataka Board, PUC study materials`}
          />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content={`${Class.toUpperCase()} ${subject.toUpperCase()} - Download Question Papers`}
          />
          <meta
            property="og:description"
            content={`Get ${Class.toUpperCase()} ${subject} previous question papers and study materials for Karnataka Board exams.`}
          />
          <meta
            property="og:url"
            content={`https://acadigo.vercel.app/${Class}/${stream}/${subject}`}
          />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Head>

        <Navbar />
        <main className="p-2 sm:p-6 grid grid-cols-1 sm:grid-cols-[65%_auto] gap-4 min-h-[88vh]">
          <section className="border sm:max-h-[98vh] border-gray-400 sm:overflow-auto rounded-lg p-4">
            <h1 className="text-4xl font-bold">
              {Class.toUpperCase()} {subject.toUpperCase().replace(/\d+/g, "")}
            </h1>
            <div className="bg-[url(/bg.avif)] mt-4 rounded-lg w-full h-[200px] sm:h-[350px] flex items-center justify-center">
              <div className="text-white max-w-[90%] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
                {subject.toUpperCase().replace(/\d+/g, "")}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
              {papers.map((paper, index) => (
                <Card
                  key={index}
                  className="flex flex-col gap-6 items-center w-full min-h-[120px] p-2 mt-5 hover:shadow-3xl hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
                >
                  <CardTitle className="text-2xl">{paper.title}</CardTitle>
                  <div className="flex justify-between sm:justify-around w-full">
                    <Link
                      href={`/preview/${Class}/${subject}/${
                        paper.title
                      }?preview=${encodeURIComponent(
                        paper.preview
                      )}&download=${encodeURIComponent(
                        "https://drive.google.com/uc?export=download&id=" +
                          getFileId(paper.preview)
                      )}`}
                    >
                      <button className="flex gap-2 items-center justify-center bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold py-2 px-4 sm:px-8 lg:px-4 xl:px-8 rounded-lg mb-2">
                        Preview <Eye size={24} />
                      </button>
                    </Link>
                   <button
                                         className="flex gap-2 items-center justify-center bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold py-2 px-4 sm:px-8 lg:px-4 xl:px-8 rounded-lg mb-2"
                                         onClick={() => handleDownload(paper)}
                                       >
                                         Download <CloudDownload size={24} />
                                       </button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Rightbar />
        </main>
        <Footer />
      </div>
    );
  }
};

export default Subject;
