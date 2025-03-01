import { z } from "zod";

export const feedbackSchema = z.object({
  message: z.string().nonempty("Feedback Can't empty!"),
});
