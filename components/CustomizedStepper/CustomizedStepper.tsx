"use client";

import { init } from "@/lib/features/stepper/stepperSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";

type StepObject = {
  title: string;
  description: string;
};

interface Props {
  steps: StepObject[];
}

const CustomizedStepper = ({ steps }: Props) => {
  const dispatch = useAppDispatch();

  const currentStep = useAppSelector((state) => state.stepper.currentStep);

  useEffect(() => {
    dispatch(init(steps.length));
  }, [dispatch, steps.length]);

  return (
    <div className="flex flex-col gap-3">
      {steps.map((step, index) => {
        const isCurrentOrPrevStep = index < currentStep;

        return (
          <div key={index} className="flex gap-6">
            <div className="flex flex-col items-center gap-3">
              <span
                className={`
                  bg-transparent flex items-center justify-center rounded-full w-9 h-9 border-2 border-solid
                  ${index === currentStep ? "border-defaultGreen" : ""}
                  ${isCurrentOrPrevStep ? "!text-white !bg-defaultGreen" : ""}
                  `}
              >
                {isCurrentOrPrevStep ? "✓" : ""}
              </span>
              {index !== steps.length - 1 && (
                <span
                  className={`  w-[0.1rem] h-10  ${
                    isCurrentOrPrevStep ? "bg-defaultGreen" : "bg-borderLight"
                  } "`}
                >
                  &nbsp;
                </span>
              )}
            </div>
            <div className="flex gap-1 flex-col">
              <h3
                className={
                  isCurrentOrPrevStep
                    ? " font-bold text-[1.2rem] transition-all duration-100"
                    : "text-textMuted font-bold text-[1.2rem]  transition-all duration-100"
                }
              >
                {step.title}
              </h3>
              <p className="text-textMuted">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomizedStepper;
