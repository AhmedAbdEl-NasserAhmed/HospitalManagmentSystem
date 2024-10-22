"use client";

import CustomizedButton from "@/components/CustomizedButton";
import { nextStep } from "@/lib/features/stepper/stepperSlice";
import { useAppDispatch } from "@/lib/hooks";
import React from "react";

const CreateAccountPage = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <CustomizedButton
        onClick={() => dispatch(nextStep())}
        type="submit"
        size="large"
      >
        Create Account
      </CustomizedButton>
    </div>
  );
};

export default CreateAccountPage;
