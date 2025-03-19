import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import IIpuc from "/IIpuc.json";

export const metadata = {
  title: "Acadigo | 2nd PUC Study Materials | Previous Year Papers & Notes - Acadigo",
  description:
    "Get the best 2nd PUC study materials, previous year question papers, and expert notes. Prepare efficiently for exams with Acadigo's resources.",
  keywords:
    "2nd PUC study materials, PUC previous year question papers, PUC exam preparation, PUC notes, PUC syllabus, Karnataka PUC resources",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title: "Acadigo | 2nd PUC Study Materials & Question Papers - Acadigo",
    description:
      "Find top-quality study materials and past question papers for 2nd PUC. Boost your exam preparation with Acadigo.",
    url: "https://yourwebsite.com/ii-puc",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/ii-puc-banner.jpg",
        width: 1200,
        height: 630,
        alt: "2nd PUC Study Materials & Question Papers",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {IIpuc.map((IIpuc, index) => (
        <Card
          key={index}
          className="flex flex-col sm:flex-row gap-2 p-2 sm:items-center hover:shadow-3xl hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
        >
          <div>
            <Link href={`/ii-puc/${IIpuc.title.toLowerCase()}`}>
              <Image
                src={`/${IIpuc.title.toLowerCase()}.png`}
                alt={`2nd PUC ${IIpuc.title}`}
                className="rounded-lg w-[400px] sm:w-[500px] h-[200px] sm:h-[250px]"
                width={400}
                height={250}
              />
            </Link>
          </div>
          <div>
            <CardHeader>
              <Link href={`/ii-puc/${IIpuc.title.toLowerCase()}`}>
                <CardTitle className="text-4xl text-blue-600 hover:text-blue-700 relative inline-block after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-[2px] after:left-1/2 after:bg-blue-700 after:transition-[width_left] after:duration-200 hover:after:w-full hover:after:left-0 ">
                  {IIpuc.title}
                </CardTitle>
              </Link>
              <Link href={`/ii-puc/${IIpuc.title.toLowerCase()}`}>
                <CardDescription className="hover:text-blue-700 hover:underline text-gray-700">
                  {IIpuc.description.substring(0, 100) + "..."}
                </CardDescription>
              </Link>
            </CardHeader>
          </div>
        </Card>
      ))}
    </div>
  );
}
