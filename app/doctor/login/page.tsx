"use client";

import Image from "next/image";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import "./stylesheet.scss";
import Link from "next/link";
import CustomizedButton from "@/components/CustomizedButton";
import Links from "@/components/Links";

interface FieldType {
  emailAddress?: string;
  password?: string;
}

const SignUp = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex bg-white  h-screen">
      <div className="bg-[url('/images/SignUpPage.jpg')] bg-cover bg-no-repeat bg-right basis-[72rem] opacity-80 ">
        &nbsp;
      </div>
      <div className="flex flex-col gap-4 grow px-[10rem] py-[3.2rem]">
        <div className="p-[2.4rem] w-[44rem] h-[65rem] flex justify-center items-center ">
          <div className="flex flex-col gap-[2.4rem] w-full">
            <Image src="/images/logo.png" alt="Logo" height={40} width={150} />
            <div>
              <h3 className="text-[2.4rem] font-extrabold">Welcome Back</h3>
              <p className="text-textMuted text-[1.4rem]">
                Please sign in to continue
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

              <Form.Item<FieldType>
                label={<span className="text-textDark">Password</span>}
                name="password"
                validateTrigger={false}
                rules={[
                  { required: true, message: "Please enter your password" }
                ]}
              >
                <Input.Password
                  className="password-input"
                  placeholder="Password"
                />
              </Form.Item>

              <Link
                href="/doctor/forgetpassword"
                className="font-bold bg-clip-text bg-main-gradient !text-transparent "
              >
                Forget your password ?
              </Link>

              <div className="mt-5">
                <CustomizedButton size="large" type="submit">
                  Sign in
                </CustomizedButton>
              </div>
            </Form>
            <p className="text-[1.4rem]">
              don&apos;t have an account ?{" "}
              <Link
                href=""
                className="font-bold bg-clip-text bg-main-gradient text-transparent "
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <Links />
      </div>
    </div>
  );
};

export default SignUp;
