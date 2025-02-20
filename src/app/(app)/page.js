import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import streams from "/streams.json";

export const metadata = {
  title: "Acadigo | Learn Easily with Expert Resources & Study Materials",
  description:
    "Explore high-quality study materials, previous year question papers, and expert resources for students. Learn smarter with Acadigo.",
  keywords:
    "Acadigo, study materials, previous year question papers, exam preparation, learning resources, PUC question papers",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title: "Acadigo | Learn Easily with Expert Resources & Study Materials",
    description:
      "Access the best study materials and exam resources. Prepare smarter with Acadigo.",
    url: "https://yourwebsite.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {streams.map((stream, index) => (
        <Card
          key={index}
          className="flex flex-col sm:flex-row gap-2 p-2 sm:items-center hover:shadow-3xl  hover:shadow-blue-700 transition duration-200 ease-in-out border-gray-400"
        >
          <div>
            <Link href={`/${stream.title.toLowerCase()}`}>
              <Image
                src={`/${stream.title.toLowerCase()}.png`}
                alt={`2nd PUC ${stream.title}`}
                className="rounded-lg w-[400px] sm:w-[500px] h-[200px] sm:h-[250px]"
                width={400}
                height={250}
              />
            </Link>
          </div>
          <div>
            <CardHeader>
              <Link href={`/${stream.title.toLowerCase()}`}>
                {" "}
                <CardTitle className="text-4xl text-blue-600 hover:text-blue-700 relative inline-block after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-[2px] after:left-1/2 after:bg-blue-700 after:transition-[width_left] after:duration-200 hover:after:w-full hover:after:left-0 ">
                  {stream.title}
                </CardTitle>
              </Link>
              <Link href={`/${stream.title.toLowerCase()}`}>
                <CardDescription className="hover:text-blue-700 hover:underline text-gray-700">
                  {stream.description.substring(0, 100) + "..."}
                </CardDescription>
              </Link>
            </CardHeader>
          </div>
        </Card>
      ))}
    </div>
  );
}
