"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CloudUpload, Loader2, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Searchbar from "./Searchbar";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { feedbackSchema } from "../../schema/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import axios from "axios";

const Rightbar = () => {
  const [isExpanded, setisExpanded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      message:""
    },
  });

  const onSubmit = async (data) => {
    console.log(data.message)
    setIsUploading(true);
    
    try {
      const res = await axios.post("/api/feedback",{message:data.message}, {
       
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.success) {
        form.reset();
        toast({
          title:"Thank you for your valuable feedback!", 
          description:res.data.message,
          
        });
      } else {
        toast({
          title:res.data.message, 
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error in submitting feedback",
        description: "An error occurred during feedback submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };


  const about =
    "Acadigo is a platform dedicated to helping students by providing easy access to question papers and study materials. We believe that education should be a collaborative effort, not a competition. By sharing past question papers and useful resources, students can support each other in their learning journey. If you have question papers or study materials, you can upload them to help others who may need them. A small contribution from you can make a big difference in someone’s academic success. Together, let’s create a space where knowledge is freely shared, making learning easier and more accessible for everyone!";
  return (
    <div>
      <div className="border border-gray-400 px-3 py-5 sm:p-5 rounded-xl hidden sm:block">
        <Searchbar />
      </div>
      <Card className="p-2 mt-6 border-gray-400 flex flex-col gap-4 justify-center items-center">
      <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-6 flex flex-col  w-full items-center"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-2xl font-bold text-center text-red-600">Submit Your Feedback</FormLabel>
                  <FormControl>
                  <textarea
          className="w-full p-2 border rounded-md"
          rows="4"
          {...field}
          placeholder="Enter your feedback..."
          />
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           

            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 w-[70%] mt-2 sm:w-[40%]"
              disabled={isUploading}
            >
              {isUploading ? <Loader2 className="animate-spin" /> : "Submit"}
            </Button>
          </form>
        </Form>
    </Card>
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
