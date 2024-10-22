"use client";

import CustomizedButton from "@/components/CustomizedButton";
import Links from "@/ui/Links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";

interface FieldType {
  emailAddress?: string;
}

const FrogetPassword = () => {
  const { push } = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    push("/doctor/forgetpassword/verifycode");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-secondary h-screen flex flex-col">
      <div className="h-[10rem] px-[15rem] py-[5rem]">
        <Image src="/images/logo.png" alt="Logo" height={38} width={130} />
      </div>
      <div className="flex flex-col px-[2.4rem] py-[3.2rem]  h-[40rem] w-[40rem] rounded-xl bg-white m-auto gap-[2.4rem]">
        <Link
          href="/doctor/login"
          className="font-bold bg-clip-text bg-main-gradient text-transparent text-xl "
        >
          <span className="mr-2 text-xl">&#8592;</span>
          Back
        </Link>
        <div>
          <h3 className="text-[2.4rem] font-extrabold">Forgot Password</h3>
          <p className="text-textMuted text-[1.4rem]">
            No problem! Provide us the email id/ mobile of your account and we
            will send you verification code
          </p>
        </div>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item<FieldType>
            label={<span className="text-textDark">Email Address</span>}
            name="emailAddress"
            validateTrigger={false}
            rules={[
              {
                required: true,
                message: "Please enter a valid Email Address",
                type: "email"
              }
            ]}
          >
            <Input className="email-input" placeholder="user@example.com" />
          </Form.Item>

          <div className="mt-5">
            <CustomizedButton size="large" type="submit">
              Send Code
            </CustomizedButton>
          </div>
        </Form>

        <Link
          href="/doctor/login"
          className="flex justify-center font-bold bg-clip-text bg-main-gradient text-transparent text-xl "
        >
          Back to log in
        </Link>
      </div>
      <div className="p-10">
        <Links />
      </div>
    </div>
  );
};

export default FrogetPassword;
