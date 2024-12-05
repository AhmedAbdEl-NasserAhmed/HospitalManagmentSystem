"use client";

import CustomizedSingleSelectMenu from "@/components/CustomizedSingleSelectMenu/CustomizedSingleSelectMenu";
import DoctorPracticeHours from "@/components/DoctorPracticeHours/DoctorPracticeHours";
import SwitchInput from "@/components/Switch/Switch";
import { Controller, useForm } from "react-hook-form";

const DoctorOperationalHoursForm = () => {
  const { control, watch } = useForm();

  console.log("data", watch());

  return (
    <form className="flex flex-col gap-10">
      <div className="w-1/4">
        <Controller
          control={control}
          name="duration"
          render={({ field: { onChange } }) => (
            <CustomizedSingleSelectMenu
              onChange={onChange}
              label="Duration"
              options={[
                {
                  id: 1,
                  option: "15 minutes"
                },
                {
                  id: 2,
                  option: "30 minutes"
                },
                {
                  id: 3,
                  option: "45 minutes"
                },
                {
                  id: 4,
                  option: "1 hour"
                },
                {
                  id: 5,
                  option: "1 hour 30 minutes"
                },
                {
                  id: 6,
                  option: "2 hours"
                }
              ]}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="videoConsult"
          render={({ field: { onChange, value = false } }) => (
            <div className="p-4 bg-secondaryBackground flex items-center rounded-lg gap-6 ">
              <SwitchInput onChange={onChange} value={value} />
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg">
                  Consult your patients online by Video Consult
                </h2>
                <p className="text-lg text-textMuted">
                  Enable the video consult solution for your clinic and start
                  consulting your patients online.
                </p>
              </div>
            </div>
          )}
        />
      </div>
      <div className="w-1/4">
        <Controller
          control={control}
          name="videoConsultDuration"
          render={({ field: { onChange } }) => (
            <CustomizedSingleSelectMenu
              onChange={onChange}
              label="video Consult Duration"
              options={[
                {
                  id: 1,
                  option: "15 minutes"
                },
                {
                  id: 2,
                  option: "30 minutes"
                },
                {
                  id: 3,
                  option: "45 minutes"
                },
                {
                  id: 4,
                  option: "1 hour"
                },
                {
                  id: 5,
                  option: "1 hour 30 minutes"
                },
                {
                  id: 6,
                  option: "2 hours"
                }
              ]}
            />
          )}
        />
      </div>
      <span className="w-full h-[0.5px] bg-borderLight">&nbsp;</span>
      <DoctorPracticeHours />
    </form>
  );
};

export default DoctorOperationalHoursForm;
