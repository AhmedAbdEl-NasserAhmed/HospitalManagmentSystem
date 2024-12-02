"use client";

import CustomizedButton from "@/components/CustomizedButton";
import CustomizedInput from "@/components/CustomizedInput/CustomizedInput";
import CustomizedMultipleSelectMenu from "@/components/CustomizedMultipleSelectMenu/CustomizedMultipleSelectMenu";
import CustomizedSingleSelectMenu from "@/components/CustomizedSingleSelectMenu/CustomizedSingleSelectMenu";
import CustomizedTextArea from "@/components/CustomizedTextArea/CustomizedTextArea";
import ProfileImageCloudinary from "@/components/ProfileImageCloudinary/ProfileImageCloudinary";
import { nextStep } from "@/lib/features/slices/stepper/stepperSlice";
import { useAppDispatch } from "@/lib/hooks";
import { PersonalDetailsFormSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type Schema = z.infer<typeof PersonalDetailsFormSchema>;

const PersonalDetailsForm = () => {
  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const {
    control,
    watch,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(PersonalDetailsFormSchema)
  });

  function onSubmit() {
    push("/doctor/registerdocuments");
    dispatch(nextStep());
  }

  const formData = watch();

  console.log(formData);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-10"
    >
      <Controller
        control={control}
        name="image"
        render={({ field: { onChange } }) => (
          <ProfileImageCloudinary
            errorMessage={errors["image"]?.message}
            onChange={onChange}
            imageSrc={formData.image}
          />
        )}
      />
      <div className="flex gap-8">
        <div className="basis-[20%]">
          <Controller
            defaultValue="Dr"
            control={control}
            name="title"
            render={({ field: { onChange } }) => (
              <CustomizedSingleSelectMenu
                onChange={onChange}
                label="title"
                options={[
                  {
                    id: 1,
                    option: "Dr"
                  },
                  {
                    id: 2,
                    option: "Professor"
                  }
                ]}
              />
            )}
          />
        </div>
        <div className="grow">
          <CustomizedInput
            register={{ ...register("name") }}
            widthValue="large"
            type="text"
            placeholder="Name"
            label="Name"
            errorMessage={errors["name"]?.message}
          />
        </div>
      </div>

      <Controller
        control={control}
        name="doctorSpecialties"
        render={({ field: { onChange } }) => (
          <CustomizedMultipleSelectMenu
            errorMessage={errors["doctorSpecialties"]?.message}
            placeholder="Choose your specialties"
            onChange={onChange}
            title="Specialties "
            options={[
              { id: 1, content: "Internal Medicine" },
              { id: 2, content: "Pediatrics" },
              { id: 3, content: "General Surgery" },
              { id: 4, content: "Family Medicine" },
              { id: 5, content: "Obstetrics and Gynecology (OB-GYN)" },
              { id: 6, content: "Orthopedics" },
              { id: 7, content: "Cardiology" },
              { id: 8, content: "Dermatology" },
              { id: 9, content: "Psychiatry" },
              { id: 10, content: "Ophthalmology" }
            ]}
          />
        )}
      />
      <div className="flex flex-col gap-4">
        <Controller
          control={control}
          name="doctorLanguages"
          render={({ field: { onChange } }) => (
            <CustomizedMultipleSelectMenu
              errorMessage={errors["doctorLanguages"]?.message}
              placeholder="Choose the languages"
              onChange={onChange}
              title="Languages "
              options={[
                { id: 1, content: "English" },
                { id: 2, content: "Chinese" },
                { id: 3, content: "Hindi" },
                { id: 4, content: "Spanish" },
                { id: 5, content: "French" },
                { id: 6, content: "Arabic" },
                { id: 7, content: "Bengali" },
                { id: 8, content: "Russian" },
                { id: 9, content: "Portuguese" }
              ]}
            />
          )}
        />
        <p className="text-textMuted text-lg">
          Please choose the languages you are communicating in.
        </p>
      </div>

      <div className="flex items-center gap-8 justify-between">
        <Controller
          control={control}
          name="doctorExperience"
          render={({ field: { onChange } }) => (
            <CustomizedSingleSelectMenu
              errorMessage={errors["doctorExperience"]?.message}
              onChange={onChange}
              placeholder="Choose years of Experience"
              label="Years of Experience "
              options={[
                { id: 1, option: "Less than 1 year" },
                { id: 2, option: "1-2 years" },
                { id: 3, option: "3-5 years" },
                { id: 4, option: "6-9 years" },
                { id: 5, option: "10-14 years" },
                { id: 10, option: "15+ years" }
              ]}
            />
          )}
        />
        <CustomizedInput
          register={{ ...register("city") }}
          widthValue="large"
          type="text"
          placeholder="City"
          label="City"
          errorMessage={errors["city"]?.message}
        />
      </div>
      <div className="flex items-center gap-8 justify-between">
        <Controller
          control={control}
          name="doctorGender"
          render={({ field: { onChange } }) => (
            <CustomizedSingleSelectMenu
              placeholder="Select Gender"
              errorMessage={errors["doctorGender"]?.message}
              onChange={onChange}
              label="Gender "
              options={[
                { id: 1, option: "Male" },
                { id: 2, option: "Female" },
                { id: 3, option: "Non-Binary" },
                { id: 4, option: "Prefer not to say" },
                { id: 5, option: "Other" }
              ]}
            />
          )}
        />
        <CustomizedInput
          register={{ ...register("dateOfBirth") }}
          widthValue="large"
          type="date"
          label="Date of Birth"
          errorMessage={errors["dateOfBirth"]?.message}
        />
      </div>

      <CustomizedTextArea
        register={{ ...register("aboutMe") }}
        errorMessage={errors["aboutMe"]?.message}
        rows={5}
        cols={4}
        label="About Me"
        placeholder="About Me"
      />

      <CustomizedButton type="submit" size="large">
        Continue
      </CustomizedButton>
    </form>
  );
};

export default PersonalDetailsForm;
