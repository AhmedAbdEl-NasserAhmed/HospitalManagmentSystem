"use client";

import CustomizedButton from "@/components/CustomizedButton";
import UploadImagePreview from "@/components/UploadImagePreview/UploadImagePreview";
import { nextStep } from "@/lib/features/stepper/stepperSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Form, Input, Select } from "antd";
import type { FormProps } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  profilePicture: File;
  name: string;
  title: string;
};

const PersonalDetails = () => {
  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    push("/doctor/signup/registerdocuments");
    dispatch(nextStep());
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" px-[4rem] py-[3.5rem]">
      <div className="flex  flex-col gap-8 items-start m-auto w-[50rem]">
        <div>
          <h3 className="text-[2.4rem] font-extrabold">Personal Details</h3>
          <p className="text-textMuted text-[1.4rem]">This is a description</p>
        </div>
        <Form
          initialValues={{
            title: "Doctor"
          }}
          layout="vertical"
          className="w-full"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item<FieldType>
            label={<span className="text-textDark">Profile Photo</span>}
            name="profilePicture"
            rules={[
              {
                required: true,
                message: "Please upload your profile picture"
              }
            ]}
          >
            <UploadImagePreview />
          </Form.Item>
          <div className="grid grid-cols-[20%_1fr] gap-8">
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please select your Title" }]}
            >
              <Select placeholder="Please select your Title">
                <Select.Option value="Doctor">Doctor</Select.Option>
                <Select.Option value="Professor">Professor</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item<FieldType>
              label={<span className="text-textDark">Name</span>}
              name="name"
              rules={[
                {
                  required: true,
                  min: 6,
                  message: "Please enter a name not less than 6 characters"
                }
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
          </div>
          <div>
            <CustomizedButton type="submit" size="large">
              Continue
            </CustomizedButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PersonalDetails;
