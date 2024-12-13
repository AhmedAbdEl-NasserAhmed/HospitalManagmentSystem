"use client";

import CustomizedButton from "@/components/CustomizedButton";
import CustomizedSingleSelectMenu from "@/components/CustomizedSingleSelectMenu/CustomizedSingleSelectMenu";
import DoctorPracticeHours from "@/components/DoctorPracticeHours/DoctorPracticeHours";
import SwitchInput from "@/components/Switch/Switch";
import {
  setDuration,
  setIsVideoConsultationAvailable,
  setVideoDuration
} from "@/lib/features/slices/doctorStartingProcess/doctorStartingProcessSlice";
import { nextStep } from "@/lib/features/slices/stepper/stepperSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

const DoctorOperationalHoursForm = () => {
  const [workingDaysLength, setWorkingDaysLength] = useState<number>(0);

  const dispatch = useAppDispatch();

  const duration = useAppSelector((state) => state.doctorProcess.duration);

  const isVideoConsultation = useAppSelector(
    (state) => state.doctorProcess.isVideoConsultationAvailable
  );

  const videoDuration = useAppSelector(
    (state) => state.doctorProcess.videoDuration
  );

  const workingDays = useAppSelector(
    (state) => state.doctorProcess.workingDays
  );

  useEffect(() => {
    for (const day in workingDays) {
      workingDays[day].length > 0
        ? setWorkingDaysLength(workingDays[day].length)
        : setWorkingDaysLength(0);
    }
  }, [workingDays]);

  function handleDurationChange(e: string) {
    dispatch(setDuration(e));
  }

  function handleSwitchChange(e: boolean) {
    dispatch(setIsVideoConsultationAvailable(e));
  }

  function handleVideoDurationChange(e: string) {
    dispatch(setVideoDuration(e));
  }

  return (
    <div className="flex flex-col gap-6">
      <fieldset className="flex flex-col gap-8">
        <div className="w-1/4">
          <CustomizedSingleSelectMenu
            value={duration}
            onChange={handleDurationChange}
            label="Duration"
            options={[
              {
                id: 1,
                value: "15",
                option: "15 minutes"
              },
              {
                id: 2,
                value: "30",
                option: "30 minutes"
              },
              {
                id: 3,
                value: "45",
                option: "45 minutes"
              },
              {
                id: 4,
                value: "60",
                option: "1 hour"
              },
              {
                id: 5,
                value: "90",
                option: "1 hour 30 minutes"
              },
              {
                id: 6,
                value: "120",
                option: "2 hours"
              }
            ]}
          />
        </div>
        <div>
          <div className="p-4 bg-secondaryBackground flex items-center rounded-lg gap-6 ">
            <SwitchInput
              value={isVideoConsultation}
              onChange={handleSwitchChange}
            />
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
        </div>
        <div className="w-1/4">
          <CustomizedSingleSelectMenu
            value={videoDuration}
            onChange={handleVideoDurationChange}
            label="video Consult Duration"
            options={[
              {
                id: 1,
                value: "15",
                option: "15 minutes"
              },
              {
                id: 2,
                value: "30",
                option: "30 minutes"
              },
              {
                id: 3,
                value: "45",
                option: "45 minutes"
              },
              {
                id: 4,
                value: "60",
                option: "1 hour"
              },
              {
                id: 5,
                value: "90",
                option: "1 hour 30 minutes"
              },
              {
                id: 6,
                value: "120",
                option: "2 hours"
              }
            ]}
          />
        </div>
        <span className="w-full h-[0.5px] bg-borderLight">&nbsp;</span>
      </fieldset>
      <DoctorPracticeHours />
      <span className="w-full h-[0.5px] bg-borderLight">&nbsp;</span>
      <div className="self-end w-[80px]">
        <CustomizedButton
          disabled={workingDaysLength === 0}
          onClick={() => {
            dispatch(nextStep(1));
          }}
          size="large"
          type="button"
        >
          Next
        </CustomizedButton>
      </div>
    </div>
  );
};

export default DoctorOperationalHoursForm;
