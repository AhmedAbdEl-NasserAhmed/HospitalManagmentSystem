"use client";

import CustomizedButton from "@/components/CustomizedButton";
import CustomizedInput from "@/components/CustomizedInput/CustomizedInput";
import { doctorResetPasswordFormSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";



type Schema = z.infer<typeof doctorResetPasswordFormSchema>;

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(doctorResetPasswordFormSchema)
  });

  function onSubmit() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <CustomizedInput
        register={{ ...register("password") }}
        widthValue="large"
        type="password"
        placeholder="Password"
        label="Password"
        errorMessage={errors["password"]?.message}
      />
      <CustomizedInput
        register={{ ...register("resetPassword") }}
        widthValue="large"
        type="password"
        placeholder="Password"
        label="Confirm Password"
        errorMessage={errors["resetPassword"]?.message}
      />
      <div>
        <CustomizedButton size="large" type="submit">
          Reset Password
        </CustomizedButton>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
