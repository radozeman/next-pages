import { z } from "zod"

export const registerSchema = z
    .object({
        name: z.string().min(1).max(25),
        email: z.string().email().min(1).max(25),
        password: z.string().min(1).max(25),
        avatar: z.string().min(1).max(25),
        confirmPassword: z.string().min(1).max(25),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords must match!",
        path: ["confirmPassword"],
    })
