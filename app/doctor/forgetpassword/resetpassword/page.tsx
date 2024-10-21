"use client";

import CustomizedButton from "@/components/CustomizedButton";
import Links from "@/components/Links";
import Image from "next/image";
import Link from "next/link";
import { Form, Input } from "antd";
import type { FormProps } from "antd";
import { useRouter } from "next/navigation";
import { passwordRegex } from "@/const/const";

interface FieldType {
  password: string;
  confirm: string;
}

const ResetPassword = () => {
  const { push } = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    push("/doctor/login");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-secondary h-screen flex flex-col">
      <div className="h-[10rem] px-[15rem] py-[5rem]">
        <Link href="/doctor/forgetpassword">
          <Image src="/images/logo.png" alt="Logo" height={38} width={130} />
        </Link>
      </div>
      <div className="flex flex-col px-[2.4rem] py-[3.2rem]  h-[40rem] w-[40rem] rounded-xl bg-white m-auto gap-[2.4rem]">
        <div>
          <h3 className="text-[2.4rem] font-extrabold">Reset Password</h3>
          <p className="text-textMuted text-[1.4rem]">
            In order to protect your account make sure your password is strong
            enough
          </p>
        </div>

        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item
            label={<span className="text-textDark">New Password</span>}
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter a valid password!"
              },
              {
                pattern: passwordRegex,
                message:
                  "Password must be at least 10 characters, include one uppercase letter, one lowercase letter, one number, and one special character."
              }
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            label={<span className="text-textDark">Confirm Password</span>}
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!"
              },

              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                }
              })
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div>
            <CustomizedButton size="large" type="submit">
              Reset Password
            </CustomizedButton>
          </div>
        </Form>
      </div>
      <div className="p-10">
        <Links />
      </div>
    </div>
  );
};

export default ResetPassword;
