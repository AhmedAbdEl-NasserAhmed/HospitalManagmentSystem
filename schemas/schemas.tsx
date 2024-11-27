import { z } from "zod";

export const doctorSignInFormSchema = z.object({
  email: z.string().email(),
  password: z.number().min(1)
});
