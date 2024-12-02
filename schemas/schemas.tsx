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

export const PersonalDetailsFormSchema = z.object({
  image: z.string({
    required_error: "Please upload an image"
  }),
  title: z.string({
    required_error: "Please choose a title"
  }),
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must not exceed 50 characters" }),
  doctorSpecialties: z
    .array(
      z.enum([
        "Internal Medicine",
        "Pediatrics",
        "General Surgery",
        "Family Medicine",
        "Obstetrics and Gynecology (OB-GYN)",
        "Orthopedics",
        "Cardiology",
        "Dermatology",
        "Psychiatry",
        "Ophthalmology"
      ])
    )
    .nonempty("Please select at least one specialty."),
  doctorLanguages: z
    .array(
      z.enum([
        "English",
        "Chinese",
        "Hindi",
        "Spanish",
        "French",
        "Arabic",
        "Bengali",
        "Russian",
        "Portuguese"
      ])
    )
    .nonempty("Please select at least one language."),
  doctorExperience: z.enum([
    "Less than 1 year",
    "1-2 years",
    "3-5 years",
    "6-9 years",
    "10-14 years",
    "15+ years"
  ]),
  city: z
    .string({
      required_error: "City is required."
    })
    .min(2, "City must have at least 2 characters."),
  doctorGender: z.enum([
    "Male",
    "Female",
    "Non-Binary",
    "Prefer not to say",
    "Other"
  ]),
  dateOfBirth: z
    .string({
      required_error: "Date of Birth is required."
    })
    .refine((date) => !isNaN(new Date(date).getTime()), {
      message: "Invalid Date of Birth format."
    }),
  aboutMe: z
    .string({
      required_error: "Please write a brief about your self"
    })
    .min(1, "About Me must not be least 20 characters.")
    .max(500, "About Me must not exceed 500 characters.")
});
