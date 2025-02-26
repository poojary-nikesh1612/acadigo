"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Rightbar from "@/components/Rightbar";
import { CloudDownload } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Head from "next/head";
import React from "react";
import { useEffect } from "react";

const Paper = () => {
  let { paper } = useParams();
  const searchParams = useSearchParams();
  const preview = decodeURIComponent(searchParams.get("preview"));
  const download = decodeURIComponent(searchParams.get("download"));
  const router = useRouter();
  paper = paper.replace(/%20/g, " ");

  useEffect(() => {
    document.title = `II PUC ${paper} - Question Paper Preview & Download`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        `Preview and download the II PUC ${paper} previous year question paper in PDF format for Karnataka Board exam preparation.`
      );
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        `${paper} question paper, II PUC ${paper} PDF, Karnataka Board, PUC exam papers`
      );
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute("content", "index, follow");
  }, [paper]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${paper} - II PUC Question Paper Preview & Download`,
    description: `Preview and download the II PUC ${paper} previous year question paper in PDF format for better exam preparation.`,
    url: `https://acadigo.vercel.app/preview/${paper}`,
    author: {
      "@type": "Organization",
      name: "Acadigo",
      url: "https://yourwebsite.com",
    },
  };
  const handleDownload = (e) => {
    e.preventDefault();

    const script = document.createElement("script");
    script.src =
      "//pl25970916.effectiveratecpm.com/cc/6a/f8/cc6af81f6c9b6db6dff0546b0bbec8f7.js"; // Replace with your Adsterra script URL
    script.async = true;
    document.body.appendChild(script);

    setTimeout(() => {
      router.push(download);
    }, 3000);
  };
  return (
    <div>
      <Head>
        <title>{`II PUC ${paper} - Question Paper Preview & Download`}</title>
        <meta
          name="description"
          content={`Preview and download the II PUC ${paper} previous year question paper in PDF format for Karnataka Board exam preparation.`}
        />
        <meta
          name="keywords"
          content={`${paper} question paper, II PUC ${paper} PDF, Karnataka Board, PUC exam papers`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`II PUC ${paper} - Download Previous Year Papers`}
        />
        <meta
          property="og:description"
          content={`Get II PUC ${paper} question papers and study materials for Karnataka Board exams. Preview and download PDFs easily.`}
        />
        <meta
          property="og:url"
          content={`https://acadigo.vercel.app/preview/${paper}`}
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <Navbar />
      <div className="p-2 sm:p-6 grid grid-cols-1 sm:grid-cols-[65%_auto] gap-4 min-h-[88vh]">
        <div className="border h-[600px] sm:h-screen border-gray-300 rounded-lg px-1 sm:px-4 py-4">
          <h1 className="text-3xl font-bold mb-4">{paper}</h1>
          <iframe
            src={preview}
            className="w-full h-[80%] rounded-lg border-4 border-black"
            allow="autoplay"
          ></iframe>
          <div className="flex justify-center mt-5 h-[10%]">
            <div className="w-[96%]">
              <button
                className="flex w-full gap-2 items-center justify-center bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold py-2 rounded-lg"
                onClick={handleDownload}
              >
                Download
                <CloudDownload size={24} />
              </button>
            </div>
          </div>
        </div>
        <Rightbar />
      </div>
      <Footer />
    </div>
  );
};

export default Paper;
