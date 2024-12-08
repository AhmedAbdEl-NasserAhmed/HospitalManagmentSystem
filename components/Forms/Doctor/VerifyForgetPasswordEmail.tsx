"use client";

import CustomizedButton from "@/components/CustomizedButton";
import CustomizedInput from "@/components/CustomizedInput/CustomizedInput";
import { VerifyForgetPasswordEmailSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Schema = z.infer<typeof VerifyForgetPasswordEmailSchema>;

const VerifyForgetPasswordEmail = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(VerifyForgetPasswordEmailSchema)
  });

  function onSubmit() {
    push("/doctor/verifycode");
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <CustomizedInput
        register={{ ...register("mobileNumber") }}
        widthValue="large"
        type="text"
        placeholder="Phone Number"
        label="Mobile Number"
        errorMessage={errors["mobileNumber"]?.message}
      />
      <CustomizedButton size="large" type="submit">
        Send Code
      </CustomizedButton>
    </form>
  );
};

export default VerifyForgetPasswordEmail;
