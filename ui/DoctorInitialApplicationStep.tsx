"use client";

import { useAppSelector } from "@/lib/hooks";
import DoctorOperationalHours from "./DoctorOperationalHours";

const DoctorInitialApplicationStep = () => {
  const currentStep = useAppSelector((state) => state.stepper.currentStep);

  switch (currentStep) {
    case 0: {
      return <DoctorOperationalHours />;
    }
    case 1: {
      return <p>Second Step</p>;
    }
    case 2: {
      return <p>Third Step</p>;
    }
    case 3: {
      return <p>Fourth Step</p>;
    }
    case 4: {
      return <p>Congratulations Now you are a member in Tiryaaq</p>;
    }
    default:
      return <p>First Step</p>;
  }
};

export default DoctorInitialApplicationStep;
