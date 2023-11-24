import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email(),
  name: z.string().trim().min(3, "Name must contain at least 3 characters"),
  password: z
    .string()
    .trim()
    .min(6, "Password must contain at least 6 characters"),
});

export type SignupCredentials = z.infer<typeof signupSchema>;