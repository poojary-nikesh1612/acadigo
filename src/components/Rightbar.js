"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CloudUpload, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Searchbar from "./Searchbar";

const Rightbar = () => {
  const [isExpanded, setisExpanded] = useState(false);

  const about =
    "Acadigo is a platform dedicated to helping students by providing easy access to question papers and study materials. We believe that education should be a collaborative effort, not a competition. By sharing past question papers and useful resources, students can support each other in their learning journey. If you have question papers or study materials, you can upload them to help others who may need them. A small contribution from you can make a big difference in someone’s academic success. Together, let’s create a space where knowledge is freely shared, making learning easier and more accessible for everyone!";
  return (
    <div>
      <div className="border border-gray-400 px-3 py-5 sm:p-5 rounded-xl hidden sm:block">
        <Searchbar />
      </div>
      <Card className="p-2 mt-6 border-gray-400 flex flex-col gap-4 justify-center items-center">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-red-600">
            Share Resources!
          </CardTitle>
          <CardDescription className="text-base text-gray-700 pt-8 sm:pt-4">
            If you have question papers, notes, or study materials, please share
            them with us. Your small contribution can make a big difference in
            someone's life.Together, we can create a community where learning is
            easier for everyone!{" "}
          </CardDescription>
        </CardHeader>

        <Link href="/upload-resources">
          <button className=" flex  gap-3 bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold py-4 px-8 sm:px-4 rounded-lg mb-6">
            UPLOAD RESOURCES
            <CloudUpload size={32} />
          </button>
        </Link>
      </Card>
      
      <Card
        className="p-2 mt-6 border-gray-400 "
        onClick={() => setisExpanded(!isExpanded)}
      >
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center ">
            About us
          </CardTitle>

          <CardDescription className="text-base text-gray-700 pt-8 sm:pt-4">
            {isExpanded ? about : about.substring(0, 200) + "..."}
          </CardDescription>
        </CardHeader>
      </Card>
      <script async="async" data-cfasync="false" src="//pl25923124.effectiveratecpm.com/6f308c52b8cd2a7912d7dd8c2aac8ed7/invoke.js"></script>
<div id="container-6f308c52b8cd2a7912d7dd8c2aac8ed7"></div>
    </div>
  );
};

export default Rightbar;
