import { z } from "zod";

export const commentSchema = z.object({
  comment: z
    .string()
    .min(5, { message: "comment must be atleast 5 characters" })
    .max(300, { message: "Comment should be within 300 characters" })
    .nonempty("Comment can't be empty"),
  username: z
    .string()
    .nonempty("Username is required")
    .min(3, { message: "Username must be atleast 3 characters" })
    .max(20, { message: "Username Must be under 20 characters" })
    .regex(
      /^[a-zA-Z][a-zA-Z0-9-_]*$/,
      "Username should not contain special characters"
    ),
});
