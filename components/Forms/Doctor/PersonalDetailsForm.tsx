"use client";

import CustomizedButton from "@/components/CustomizedButton";
import CustomizedSelectMenu from "@/components/CustomizedSelectMenu/CustomizedSelectMenu";
import ProfileImageCloudinary from "@/components/ProfileImageCloudinary/ProfileImageCloudinary";
import { nextStep } from "@/lib/features/slices/stepper/stepperSlice";
import { useAppDispatch } from "@/lib/hooks";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { HiOutlinePlusSm } from "react-icons/hi";

const PersonalDetailsForm = () => {
  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const { control, watch } = useForm();

  //   push("/doctor/registerdocuments");
  //   dispatch(nextStep());

  const formData = watch();

  console.log(formData);

  return (
    <form className="w-full flex flex-col gap-8">
      <Controller
        control={control}
        name="doctorImage"
        render={({ field: { onChange } }) => (
          <ProfileImageCloudinary
            onChange={onChange}
            imageSrc={formData.doctorImage}
          />
        )}
      />
      <Controller
        control={control}
        name="doctorTitle"
        render={({ field: { onChange } }) => (
          <CustomizedSelectMenu
            onChange={onChange}
            title="title"
            placeholder="Select Your Title"
            multiple={false}
            options={[
              {
                id: 1,
                content: "Dr"
              },
              {
                id: 2,
                content: "Professor"
              }
            ]}
          />
        )}
      />

      <CustomizedButton
        type="button"
        size="large"
        onClick={() => push("/doctor/createaccount")}
      >
        Continue
      </CustomizedButton>
    </form>
  );
};

export default PersonalDetailsForm;