"use client";

import { Form } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import CustomizedButton from "@/components/CustomizedButton";
import Dragger from "antd/es/upload/Dragger";

type FieldType = {
  upload?: string;
};

const RegisterDocuments = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    // push("/doctor/signup/registerdocuments");
    // dispatch(nextStep());
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
          <h3 className="text-[2.4rem] font-extrabold">
            Registration of documents
          </h3>
          <p className="text-textMuted text-[1.4rem]">
            We need to verify your information
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-[1.4rem] font-bold">
            Click to upload or drag and drop
          </h3>
          <p className="text-textMuted text-[1.4rem]">PDF, DOC, JPG, PNG</p>
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
          <Form.Item
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              return Array.isArray(e) ? e : e?.fileList;
            }}
            rules={[
              {
                required: true,
                message: "You have to upload your documents"
              }
            ]}
          >
            <Dragger
              progress={{
                strokeWidth: 3,
                strokeColor: "bg-maingradient",
                style: { top: 12 }
              }}
              listType="picture"
              maxCount={1}
              multiple={false}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Form.Item>

          <div>
            <CustomizedButton type="submit" size="large">
              Finish
            </CustomizedButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterDocuments;
