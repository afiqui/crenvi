import { z } from "zod";

export const RegisterFormInput = z
  .object({
    fullName: z.string().min(20).max(255),
    email: z.string().email(),
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20),
    acceptTerms: z.boolean().refine((data) => data === true, {
      message: "Você deve aceitar os termos de uso",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "A senha e confirmação devem ser iguais",
    path: ["confirmPassword"],
  });

export type RegisterFormInput = z.infer<typeof RegisterFormInput>;
