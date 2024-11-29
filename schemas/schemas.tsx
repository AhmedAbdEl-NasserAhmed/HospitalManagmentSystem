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

export const createDoctorAccountFromSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must not exceed 50 characters" }),

  email: z.string().email({ message: "Invalid email address" }),

  phoneNumber: z
    .string({
      required_error: "Please enter a valid Phone Number"
    })
    .regex(/^\d{10,15}$/, {
      message: "Phone number must be between 10 and 15 digits"
    }),

  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
      {
        message:
          "Password must be at least 10 characters, include uppercase, lowercase, a number, and a special character"
      }
    ),

  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and privacy policy"
  })
});

export const doctorRegisterDocumentsFormSchema = z.object({
  resumeDocument: z
    .instanceof(File, { message: "Please upload a valid resume file" })
    .refine((file) => file !== null && file !== undefined, {
      message: "Resume file is required"
    }),
  idDocument: z
    .instanceof(File, { message: "Please upload a valid ID document file" })
    .refine((file) => file !== null && file !== undefined, {
      message: "ID document file is required"
    })
});
