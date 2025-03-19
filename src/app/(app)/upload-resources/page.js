"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadSchema } from "../../../../schema/upload";
import axios from "axios";
import { Loader2, UploadCloud } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const UploadResources = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(UploadSchema),
    defaultValues: {
      ClassName: "",
      subject: "",
      uploader: "",
      resource: null,
    },
  });

  const onSubmit = async (data) => {
   
    setIsUploading(true);
    const formData = new FormData();

    formData.append("ClassName", data.ClassName);
    formData.append("uploader", data.uploader === ""?"Anonymous":data.uploader);
    formData.append("subject", data.subject);

    for (const file of data.resource) {
      formData.append("resource", file);
    }

    try {
      const res = await axios.post("/api/resource-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        form.reset();
        toast({
          title: "File uploaded successfully !",
          description: res.data.message,
        });
      } else {
        toast({
          title: "Upload failed !",
          description: res.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error in Uploading Files",
        description: "An error occurred during file upload. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-600">Upload Resource</h1>
      <div className="mt-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col  items-center"
          >
            <FormField
  control={form.control}
  name="ClassName"
  render={({ field }) => (
    <FormItem className="w-full">
      <FormLabel className='font-bold text-lg'>Class</FormLabel>
      <FormControl>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="II-PUC">II-PUC</SelectItem>
            <SelectItem value="SSLC">SSLC</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel  className='font-bold text-lg'>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter subject name"
                      {...field}
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resource"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel  className='font-bold text-lg'>Upload Files</FormLabel>
                  <FormControl>
                    <div>
                      <div className="h-32 border  border-gray-300 rounded-xl flex justify-center items-center cursor-pointer">
                        <label className="w-full h-full flex justify-center items-center cursor-pointer">
                          <input
                            name="resource"
                            type="file"
                            multiple
                            className="hidden"
                            onChange={(e) => field.onChange(e.target.files)}
                          />
                          <div className="flex flex-col items-center">
                            <UploadCloud size={44} />
                            <span className="text-blue-600 underline font-bold">
                              Choose Files
                            </span>
                          </div>
                        </label>
                      </div>
                      {field.value && field.value.length > 0 && (
                        <div className="p-3 border border-gray-300 rounded-md mt-2">
                          <p className="font-semibold text-sm mb-2">
                            Selected Files:
                          </p>
                          <ul className="text-sm">
                            {Array.from(field.value).map((file, index) => (
                              <li key={index} className="truncate">
                                {file.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
 <FormField
  control={form.control}
  name="showCredit"
  render={({ field }) => (
    <FormItem className="w-full mt-4">
      <FormLabel  className='font-bold text-lg'>Do you want to show your name as credit?</FormLabel>
      <FormControl>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="yes"
              checked={field.value === "yes"}
              onChange={() => field.onChange("yes")}
               
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="no"
              checked={field.value === "no"}
              onChange={() => field.onChange("no")}
            />
            No
          </label>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

{form.watch("showCredit") === "yes" && (
  <FormField
    control={form.control}
    name="uploader"
    render={({ field }) => (
      <FormItem className="w-full mt-4">
        <FormLabel  className='font-bold text-lg'>Enter Your Name</FormLabel>
        <FormControl>
          <Input
            placeholder="Enter your name"
            {...field}
            className="h-12"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)}
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 w-[70%] sm:w-[40%]"
              disabled={isUploading}
            >
              {isUploading ? <Loader2 className="animate-spin" /> : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UploadResources;
