"use client";

import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "../../schema/comment";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

const Comment = ({ page_id }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(`/api/comment?page_id=${page_id}`);

        setComments(res.data?.comments);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [page_id]);

  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
      username: "",
    },
  });

  const onSubmit = async (data) => {
    setIsCommenting(true);

    try {
      let res = await axios.post(
        "/api/comment",
        {
          page_id,
          comment: data.comment,
          username: data.username,
        },
        {
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      if (res.data.success) {
        toast({
          title: "Comment shared successfully",
          description: res.data.message,
        });
        setComments((prev) => [
          {
            username: data.username,
            comment: data.comment,
            createdAt: Date.now(),
          },
          ...prev,
        ]);
        form.reset();
      } else {
        toast({
          title: res.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error in posting comment",
        description:
          "An error occurred during posting a comment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCommenting(false);
    }
  };
  return (
    <div className=" mt-5 p-4 sm:p-10 border  border-gray-400 rounded-xl ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col  items-center"
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    className="w-full p-2 border rounded-md"
                    rows="2"
                    {...field}
                    placeholder={
                      comments.length === 0
                        ? "Be the first comment..."
                        : "Add a comment..."
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full mt-2">
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

          <div className="flex justify-end w-full">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 mt-5 py-3 px-10 font-bold text-lg"
              disabled={isCommenting}
            >
              {isCommenting ? <Loader2 className="animate-spin" /> : "Post"}
            </Button>
          </div>
        </form>
      </Form>

      <div className="mt-10">
        <div className="sm:flex gap-4 items-center">
          <p className="font-bold  text-gray-700 ">
            {comments.length} Comments
          </p>
          <hr className="border-2 flex-1 border-blue-800 mt-1 sm:mt-0" />
        </div>

        <div className="mt-5 sm:max-h-[75vh] sm:overflow-auto">
          {comments.map((content, index) => (
            <div className="mt-3" key={index}>
              <div className="flex items-center gap-1">
                <Image
                  src={
                    content.username === "admin_nikesh"
                      ? "/icon.png"
                      : "/profile.png"
                  }
                  alt="Profile avatar"
                  className="rounded-full border-2 border-blue-300 border-double "
                  width={50}
                  height={50}
                />
                <div>
                  <div className="font-bold text-sm text-blue-950 ">
                    {content.username === "admin_nikesh" ? (
                      <div className="flex gap-1">
                        Acadigo{" "}
                        <Image
                          src="/check.png"
                          width={15}
                          height={15}
                          alt="blue tick image"
                        />
                      </div>
                    ) : (
                      content.username
                    )}
                  </div>
                  <p className="font-bold text-xs text-gray-600 ">
                    {" "}
                    {new Date(content.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
              <p className=" ml-14 mb-4">{content.comment}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
