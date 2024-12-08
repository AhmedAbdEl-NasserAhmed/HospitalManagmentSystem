"use client";

import CustomizedButton from "@/components/CustomizedButton";
import OtpCode from "@/components/OtpCode/OtpCode";
import { VerifyForgetPasswordOTPSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type Schema = z.infer<typeof VerifyForgetPasswordOTPSchema>;

const VerifyCodeForm = ({
  to,
  handleOnSubmit = () => {}
}: {
  to: string;
  handleOnSubmit?: () => void;
}) => {
  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(VerifyForgetPasswordOTPSchema)
  });

  function onSubmit(data: Schema) {
    push(to);
    handleOnSubmit();
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-textMuted text-xl">Verification Code</h2>
      <Controller
        control={control}
        name="OTP"
        render={({ field: { onChange, value } }) => (
          <OtpCode
            errorMessage={errors["OTP"]?.message}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <CustomizedButton size="large" type="submit">
        Verify
      </CustomizedButton>
    </form>
  );
};

export default VerifyCodeForm;
