"use client";

import CustomizedButton from "@/components/CustomizedButton";
import UploadImagePreview from "@/components/UploadImagePreview/UploadImagePreview";
import { nextStep } from "@/lib/features/slices/stepper/stepperSlice";
import { useAppDispatch } from "@/lib/hooks";
import type { FormProps } from "antd";
import { DatePicker, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";

type FieldType = {
  profilePicture: File;
  name: string;
  title: string;
  specialties: string[];
  city: string;
  gender: string;
};

const PersonalDetails = () => {
  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    push("/doctor/registerdocuments");
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
              label={<span className="text-textDark">Title</span>}
              rules={[{ required: true, message: "Please select your Title" }]}
            >
              <Select placeholder="Please select your Title">
                <Select.Option value="Doctor"> Doctor</Select.Option>
                <Select.Option value="Professor">Professor</Select.Option>
                <Select.Option value="Bachelor">Bachelor</Select.Option>
                <Select.Option value="Master">Master</Select.Option>
                <Select.Option value="PhD">PhD</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item<FieldType>
              label={<span className="text-textDark">Name</span>}
              name="name"
              validateTrigger={false}
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
          <Form.Item
            name="specialties"
            label={<span className="text-textDark">Specialties</span>}
            rules={[
              { required: true, message: "Please select your sepecialties" }
            ]}
          >
            <Select placeholder="Choose your sepecialties">
              <Select.Option value="General Practitioner">
                General Practitioner
              </Select.Option>
              <Select.Option value="Cardiologist">Cardiologist</Select.Option>
              <Select.Option value="Dermatologist">Dermatologist</Select.Option>
              <Select.Option value="Pediatrician">Pediatrician</Select.Option>
              <Select.Option value="Neurologist">Neurologist</Select.Option>
              <Select.Option value="Orthopedic Surgeon">
                Orthopedic Surgeon
              </Select.Option>
            </Select>
          </Form.Item>
          <div className="relative">
            <Form.Item
              name="languages"
              label={<span className="text-textDark">Languages</span>}
              rules={[
                {
                  required: true,
                  message: "Please select your Languages",
                  type: "array"
                }
              ]}
            >
              <Select mode="multiple" placeholder="Choose the languages">
                <Select.Option value="English">English</Select.Option>
                <Select.Option value="Spanish">Spanish</Select.Option>
                <Select.Option value="French">French</Select.Option>
                <Select.Option value="Mandarin">Mandarin</Select.Option>
                <Select.Option value="Arabic">Arabic</Select.Option>
                <Select.Option value="German">German</Select.Option>
                <Select.Option value="Japanese">Japanese</Select.Option>
              </Select>
            </Form.Item>
            <span className="absolute top-[6.5rem]  text-textMuted">
              Please choose the languages you are communicating in.
            </span>
          </div>
          <div className="flex items-center gap-6 mt-16 justify-between ">
            <Form.Item
              className="w-full"
              name="experienceYears"
              label={<span className="text-textDark">Years of Experience</span>}
              rules={[
                { required: true, message: "Please enter number of years" }
              ]}
            >
              <Select placeholder="Enter number of years">
                <Select.Option value="1-2 years">1-2 years</Select.Option>
                <Select.Option value="3-5 years">3-5 years</Select.Option>
                <Select.Option value="6-9 years">6-9 years</Select.Option>
                <Select.Option value="10-15 years">10-15 years</Select.Option>
                <Select.Option value="15+ years">15+ years</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              className="w-full"
              name="city"
              label={<span className="text-textDark">City</span>}
              rules={[{ required: true, message: "Please enter your City" }]}
            >
              <Input placeholder="City" />
            </Form.Item>
          </div>
          <div className="flex items-center gap-6  justify-between ">
            <Form.Item
              className="w-full"
              name="gender"
              label={<span className="text-textDark">Gender</span>}
              rules={[{ required: true, message: "Please enter your gender" }]}
            >
              <Select placeholder="Select your gender">
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Prefer not to say">
                  Prefer not to say
                </Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              className="w-full"
              name="birthDate"
              label={<span className="text-textDark">Date of Birth</span>}
              rules={[
                { required: true, message: "Please enter your date of birth" }
              ]}
            >
              <DatePicker placeholder="DD/MM/YYYY" />
            </Form.Item>
          </div>
          <Form.Item
            className="w-full"
            name="about"
            label={<span className="text-textDark">About me</span>}
            rules={[
              { required: true, message: "Please enter a biref about yourself" }
            ]}
          >
            <TextArea placeholder="About me" rows={4} />
          </Form.Item>
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
