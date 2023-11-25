import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().trim().min(4, "Title must contain at least 4 characters"),
  description: z.string().optional(),
});

export type NoteData = z.infer<typeof noteSchema>;
