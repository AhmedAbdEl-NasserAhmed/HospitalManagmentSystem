"use client";

import CustomizedButton from "@/components/CustomizedButton";
import { nextStep } from "@/lib/features/slices/stepper/stepperSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";

const PersonalDetailsForm = () => {
  const dispatch = useAppDispatch();

  const { push } = useRouter();

  //   push("/doctor/registerdocuments");
  //   dispatch(nextStep());

  return (
    <form className="w-full">
      <CustomizedButton type="submit" size="large">
        Continue
      </CustomizedButton>
    </form>
  );
};

export default PersonalDetailsForm;
