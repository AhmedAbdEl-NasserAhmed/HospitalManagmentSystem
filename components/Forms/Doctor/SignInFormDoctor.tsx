"use client";

import CustomizedButton from "@/components/CustomizedButton";
import CustomizedInput from "@/components/CustomizedInput/CustomizedInput";
import { doctorSignInFormSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Schema = z.infer<typeof doctorSignInFormSchema>;

const SignInFormDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(doctorSignInFormSchema)
  });

  console.log(errors);

  function onSubmit() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <CustomizedInput
          register={{ ...register("email") }}
          widthValue="large"
          type="text"
          placeholder="user@example.com"
          label="Email Address"
          errorMessage={errors["email"]?.message}
        />
        <CustomizedInput
          register={{ ...register("password") }}
          widthValue="large"
          type="password"
          placeholder="Password"
          label="Password"
          errorMessage={errors["password"]?.message}
        />
      </div>
      <Link
        href="/doctor/forgetpassword"
        className="font-bold bg-clip-text bg-main-gradient !text-transparent text-[1.2rem] "
      >
        Forget your password ?
      </Link>

      <div>
        <CustomizedButton size="large" type="submit">
          Sign in
        </CustomizedButton>
      </div>
    </form>
  );
};

export default SignInFormDoctor;
