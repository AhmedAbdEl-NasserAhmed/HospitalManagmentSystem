import { z } from "zod";

export const doctorSignInFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Please enter a password " })
});

export const VerifyForgetPasswordEmailSchema = z.object({
  mobileNumber: z.string().min(1, { message: "invalid Mobile number" })
});

export const doctorResetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "Please enter a password" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
        {
          message:
            "Password must be at least 10 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        }
      ),
    resetPassword: z.string().min(1, { message: "Please enter a password" })
  })
  .refine((data) => data.password === data.resetPassword, {
    path: ["resetPassword"], // Points to `resetPassword` for the error message
    message: "Passwords must match"
  });

export const VerifyForgetPasswordOTPSchema = z.object({
  OTP: z
    .string({
      required_error: "Please enter a valid OTP"
    })
    .length(4, { message: "Please enter a valid OTP " })
});
