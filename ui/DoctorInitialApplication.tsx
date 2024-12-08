"use client";

import SessionStorage from "@/helpers/sessionStorage";
import { useAppSelector } from "@/lib/hooks";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const CustomizedStepper = dynamic(
  () => import("@/components/CustomizedStepper/CustomizedStepper"),
  {
    ssr: false,
    loading: () => <p className="text-md font-semibold">Loading....</p>
  }
);
const DoctorInitialApplicationStep = dynamic(
  () => import("./DoctorInitialApplicationStep"),
  {
    ssr: false,
    loading: () => <p className="text-md font-semibold">Loading....</p>
  }
);

const DoctorInitialApplication = () => {
  const step = useAppSelector((state) => state.stepper.currentStep);

  useEffect(() => {
    SessionStorage.addItem("step", step);
  }, [step]);

  return (
    <div className="bg-white rounded-md flex flex-col gap-8">
      <div className="p-8 border-b-[0.8px] border-borderLight ">
        <CustomizedStepper
          direction="horizontal"
          steps={[
            {
              title: "Operational Hours",
              initialContent: "1"
            },
            {
              title: "Practice Staff",
              initialContent: "2"
            },
            {
              title: "Pricing",
              initialContent: "3"
            },
            {
              title: "Communication",
              initialContent: "4"
            }
          ]}
        />
      </div>
      <div className="px-8 py-4 h-max ">
        <DoctorInitialApplicationStep />
      </div>
    </div>
  );
};

export default DoctorInitialApplication;
