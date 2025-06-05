import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import sslc from "/sslc.json";
import Comment from "@/components/Comment";
import { slugify } from "@/lib/utils";

export const metadata = {
  title:
    "Acadigo | SSLC Study Materials, Previous Year Papers & Exam Resources",
  description:
    "Find high-quality SSLC study materials, previous year question papers, and expert resources to excel in your exams. Prepare smarter with Acadigo.",
  keywords:
    "SSLC study materials, previous year question papers, Karnataka SSLC syllabus, exam preparation, learning resources, SSLC board exams",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title: "Acadigo | SSLC Study Materials & Exam Resources",
    description:
      "Get the best SSLC study materials and previous year papers to enhance your exam preparation. Join Acadigo for smarter learning!",
    url: "https://acadigo.vercel.app/sslc",
    type: "website",
    image: "https://acadigo.vercel.app/images/sslc-preview.png",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {sslc.map((sslc, index) => (
        <Card
          key={index}
          className="flex flex-col sm:flex-row gap-2 p-2 sm:items-center hover:shadow-3xl  hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
        >
          <div>
            <Link href={`/sslc/${slugify(sslc.title.toLowerCase())}`}>
              <Image
                src={`/${sslc.title.toLowerCase()}.png`}
                alt={`SSLC ${sslc.title}`}
                className="rounded-lg w-[400px] sm:w-[500px] h-[200px] sm:h-[250px]"
                width={400}
                height={250}
              />
            </Link>
          </div>
          <div>
            <CardHeader>
              <Link href={`/sslc/${slugify(sslc.title.toLowerCase())}`}>
                <CardTitle className="text-4xl text-blue-600 hover:text-blue-700 relative inline-block after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-[2px] after:left-1/2 after:bg-blue-700 after:transition-[width_left] after:duration-200 hover:after:w-full hover:after:left-0 ">
                  {sslc.title}
                </CardTitle>
              </Link>
              <Link href={`/sslc/${slugify(sslc.title.toLowerCase())}`}>
                <CardDescription className="hover:text-blue-700 hover:underline text-gray-700">
                  {sslc.description.substring(0, 100) + "..."}
                </CardDescription>
              </Link>
            </CardHeader>
          </div>
        </Card>
      ))}
      <Comment page_id="sslc" />
    </div>
  );
}
