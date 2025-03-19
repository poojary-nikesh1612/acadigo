import { z } from "zod";

export const UploadSchema = z.object({
    ClassName: z.string().nonempty('Class name required!'),
    subject: z.string().nonempty('Subject name required!'),
    uploader: z.string(),
    resource: z.any().refine((file) => file, { message: "File is required" }),
});
