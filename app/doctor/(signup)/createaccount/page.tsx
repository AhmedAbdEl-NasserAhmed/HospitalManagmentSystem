"use client";

import CustomizedButton from "@/components/CustomizedButton";
import { passwordRegex } from "@/const/const";
import { nextStep } from "@/lib/features/slices/stepper/stepperSlice";
import { useAppDispatch } from "@/lib/hooks";
import type { FormProps } from "antd";

import { Checkbox, Form, Input, Select } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  name?: string;
  emailAddress?: string;
  remember?: string;
  phone?: string;
};

const CreateAccountPage = () => {
  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    push("/doctor/personaldetails");
    dispatch(nextStep());
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select>
        <Select.Option value="02">+02</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className=" px-[4rem] py-[3.5rem]">
      <div className="flex  flex-col gap-8 items-start m-auto w-[48rem]">
        <div>
          <h3 className="text-[2.4rem] font-extrabold">Create an account</h3>
          <p className="text-textMuted text-[1.4rem]">This is a description.</p>
        </div>

        <Form
          initialValues={{
            prefix: "02"
          }}
          layout="vertical"
          className="w-full"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item<FieldType>
            label={<span className="text-textDark">Name</span>}
            validateTrigger={false}
            name="name"
            rules={[
              {
                required: true,
                min: 6,
                message: "Please a name not less than 6 characters"
              }
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>

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
            <Input className="email-input" placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" }
            ]}
          >
            <Input
              placeholder="Enter Phone Number"
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-textDark">Password</span>}
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

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "You have to agree to the terms and conditions"
              }
            ]}
          >
            <Checkbox>
              I agree to{" "}
              <span className="font-bold bg-clip-text bg-main-gradient text-transparent ">
                terms of use
              </span>{" "}
              and{" "}
              <span className="font-bold bg-clip-text bg-main-gradient text-transparent ">
                privacy policy
              </span>
            </Checkbox>
          </Form.Item>

          <div>
            <CustomizedButton type="submit" size="large">
              Sign Up
            </CustomizedButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
