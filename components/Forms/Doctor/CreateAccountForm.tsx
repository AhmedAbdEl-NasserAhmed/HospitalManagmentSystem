"use client";

import CustomizedButton from "@/components/CustomizedButton";
import CustomizedInput from "@/components/CustomizedInput/CustomizedInput";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import PhoneNumber from "@/components/PhoneNumber/PhoneNumber";
import { createDoctorAccountFromSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type Schema = z.infer<typeof createDoctorAccountFromSchema>;

const CreateAccountForm = () => {
  const { push } = useRouter();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(createDoctorAccountFromSchema)
  });

  function onSubmit() {
    push("/doctor/verifycodesignup");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 w-full"
    >
      <CustomizedInput
        register={{ ...register("name") }}
        widthValue="large"
        type="text"
        placeholder="Name"
        label="Name"
        errorMessage={errors["name"]?.message}
      />
      <CustomizedInput
        register={{ ...register("email") }}
        widthValue="large"
        type="text"
        placeholder="Email Address"
        label="Email Address"
        errorMessage={errors["email"]?.message}
      />
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { onChange, value } }) => (
          <PhoneNumber
            onChange={onChange}
            value={value}
            errorMessage={errors["phoneNumber"]?.message}
          />
        )}
      />
      <CustomizedInput
        register={{ ...register("password") }}
        widthValue="large"
        type="password"
        placeholder="Password"
        label="Password"
        errorMessage={errors["password"]?.message}
      />
      <div className="flex items-start gap-4 text-xl flex-col">
        <div className="flex items-center gap-4">
          <input type="checkbox" {...register("terms")} />
          <span>
            I agree to{" "}
            <span className="font-bold bg-clip-text bg-main-gradient text-transparent ">
              terms of use
            </span>{" "}
            and{" "}
            <span className="font-bold bg-clip-text bg-main-gradient text-transparent ">
              privacy policy
            </span>
          </span>
        </div>
        <ErrorMessage message={errors["terms"]?.message} />
      </div>
      <div>
        <CustomizedButton type="submit" size="large">
          Sign Up
        </CustomizedButton>
      </div>
    </form>
  );
};

export default CreateAccountForm;
