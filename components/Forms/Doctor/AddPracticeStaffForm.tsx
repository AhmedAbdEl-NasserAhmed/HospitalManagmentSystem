"use client";

import CustomizedButton from "@/components/CustomizedButton";
import CustomizedInput from "@/components/CustomizedInput/CustomizedInput";
import CustomizedSingleSelectMenu from "@/components/CustomizedSingleSelectMenu/CustomizedSingleSelectMenu";
import SessionStorage from "@/helpers/sessionStorage";
import { addStaffDoctor } from "@/lib/features/slices/doctorStartingProcess/doctorStartingProcessSlice";
import { useAppDispatch } from "@/lib/hooks";
import { doctorsStaffSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { z } from "zod";

type Schema = z.infer<typeof doctorsStaffSchema>;

const AddPracticeStaffForm = ({
  setCloseModal
}: {
  setCloseModal?: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<Schema>({
    resolver: zodResolver(doctorsStaffSchema)
  });

  const dispatch = useAppDispatch();

  console.log("errors", errors);

  function onSubmit(data: Schema) {
    dispatch(
      addStaffDoctor({ ...data, id: crypto.randomUUID().substring(0, 5) })
    );
    setCloseModal();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white max-h-[600px] w-[640px] rounded-lg overflow-hidden overflow-y-scroll "
    >
      <div className="p-8 border-b-2 border-borderLight flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Add a doctor </h2>
        <span onClick={setCloseModal} className="text-2xl cursor-pointer">
          <IoClose />
        </span>
      </div>
      <div className="p-8 flex flex-col gap-10 ">
        <h2 className="font-bold text-xl">Information</h2>
        <CustomizedInput
          register={{ ...register("name") }}
          widthValue="large"
          type="text"
          placeholder="Enter name"
          label="Name"
          errorMessage={errors["name"]?.message}
        />
        <div className="flex items-center gap-8">
          <CustomizedInput
            register={{ ...register("mobileNumber") }}
            widthValue="large"
            type="text"
            placeholder="Enter mobile number"
            label="Mobile Number"
            errorMessage={errors["name"]?.message}
          />
          <CustomizedInput
            register={{ ...register("emailAddress") }}
            widthValue="large"
            type="text"
            placeholder="Enter email address"
            label="Email Address"
            errorMessage={errors["name"]?.message}
          />
        </div>
        <Controller
          control={control}
          name="specialty"
          render={({ field: { onChange } }) => (
            <CustomizedSingleSelectMenu
              errorMessage={errors["specialty"]?.message}
              placeholder="Choose your specialty"
              onChange={onChange}
              label="Specialty"
              options={[
                {
                  id: 1,
                  value: "Internal Medicine",
                  option: "Internal Medicine"
                },
                { id: 2, value: "Pediatrics", option: "Pediatrics" },
                {
                  id: 3,
                  value: "General Surgery",
                  option: "General Surgery"
                },
                {
                  id: 4,
                  value: "Family Medicine",
                  option: "Family Medicine"
                },
                {
                  id: 5,
                  value: "Obstetrics and Gynecology (OB-GYN)",
                  option: "Obstetrics and Gynecology (OB-GYN)"
                },
                { id: 6, value: "Orthopedics", option: "Orthopedics" },
                { id: 7, value: "Cardiology", option: "Cardiology" },
                { id: 8, value: "Dermatology", option: "Dermatology" },
                { id: 9, value: "Psychiatry", option: "Psychiatry" },
                { id: 10, value: "Ophthalmology", option: "Ophthalmology" }
              ]}
            />
          )}
        />
        <div className="flex items-center gap-8 justify-between">
          <Controller
            control={control}
            name="doctorGender"
            render={({ field: { onChange, value } }) => (
              <CustomizedSingleSelectMenu
                value={value}
                placeholder="Select Gender"
                errorMessage={errors["doctorGender"]?.message}
                onChange={onChange}
                label="Gender "
                options={[
                  { id: 1, option: "Male", value: "Male" },
                  { id: 2, option: "Female", value: "Female" },
                  { id: 3, option: "Non-Binary", value: "Non-Binary" },
                  {
                    id: 4,
                    option: "Prefer not to say",
                    value: "Prefer not to say"
                  },
                  { id: 5, option: "Other", value: "Other" }
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
        <div>
          <h2 className="font-bold text-xl">Notifications</h2>
          <div className="flex items-center mt-5 gap-[30rem] ">
            <h2 className="text-xl">Daily Schedule</h2>
            <div className="flex items-center gap-14">
              <div className="flex items-center gap-2 ">
                <input
                  id="sms"
                  value="sms"
                  type="checkbox"
                  {...register("notification")}
                />
                <label className="text-xl" htmlFor="sms">
                  SMS
                </label>
              </div>

              <div className="flex items-center gap-2 ">
                <input
                  value="email"
                  type="checkbox"
                  {...register("notification")}
                />
                <label className="text-xl" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Permissions</h2>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-2 ">
              <input
                id="allPermissions"
                value="allPermissions"
                type="checkbox"
                {...register("allPermissions")}
              />
              <label className="text-xl" htmlFor="allPermissions">
                All Permissions
              </label>
            </div>

            <div className="flex items-center gap-2 ">
              <input
                value="oneMonthReporting"
                type="checkbox"
                {...register("oneMonthReporting")}
              />
              <label className="text-xl" htmlFor="oneMonthReporting">
                Access to one month Reporting
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 border-2 border-t-borderLight ">
        <div className="flex items-center gap-4 justify-end">
          <button
            onClick={setCloseModal}
            type="button"
            className="p-2 border-[0.5px] border-borderLight rounded-lg font-medium text-lg self-start"
          >
            Discard
          </button>
          <CustomizedButton size="small" type="submit">
            Next
          </CustomizedButton>
        </div>
      </div>
    </form>
  );
};

export default AddPracticeStaffForm;
