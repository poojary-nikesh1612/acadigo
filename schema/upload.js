import { z } from "zod";

export const UploadSchema = z.object({
    subject: z.string().nonempty('Subject name required!'),
    resource: z.any().refine((file) => file, { message: "File is required" }),
});
