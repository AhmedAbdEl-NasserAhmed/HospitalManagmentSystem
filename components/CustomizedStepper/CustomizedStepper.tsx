"use client";

import { CustomizedSteppersProps } from "@/interfaces/interfaces";
import { init } from "@/lib/features/slices/stepper/stepperSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import Separator from "./Separator";
import Details from "./Details";

const CustomizedStepper = ({ steps, direction }: CustomizedSteppersProps) => {
  const dispatch = useAppDispatch();

  const currentStep = useAppSelector((state) => state.stepper.currentStep);

  useEffect(() => {
    dispatch(init(steps.length));
  }, [dispatch, steps.length]);

  const currentDirection = direction === "vertical" ? "flex-col" : "flex-row";

  return (
    <div className={`flex  ${currentDirection}  gap-3`}>
      {steps.map((step, index) => {
        const isCurrentOrPrevStep = index < currentStep;

        return (
          <div
            key={index}
            className={`flex gap-6 ${
              direction === "vertical" ? "items-start" : "items-center "
            } `}
          >
            <div className={`flex ${currentDirection} items-center gap-3`}>
              <span
                className={`${
                  index === currentStep
                    ? "bg-main-gradient p-[1.5px] "
                    : "bg-borderLight p-[1.5px]"
                }
                ${isCurrentOrPrevStep ? "bg-defaultGreen" : ""}               
                rounded-full w-9 h-9 `}
              >
                <span
                  className={`
                  flex items-center justify-center bg-secondary w-full h-full rounded-full text-center
                  ${isCurrentOrPrevStep ? "!text-white !bg-defaultGreen" : ""}
                  `}
                >
                  <span
                    className={`transition-all duration-300 ${
                      isCurrentOrPrevStep
                        ? "text-white"
                        : index === currentStep
                        ? "text-black"
                        : "text-borderLight"
                    }  `}
                  >
                    {isCurrentOrPrevStep ? "✓" : step.initialContent}
                  </span>
                </span>
              </span>

              <Separator
                styles={{
                  containerStyles: `relative   
                  ${
                    index === steps.length - 1 && direction === "vertical"
                      ? "hidden"
                      : ""
                  }
                  ${
                    direction === "vertical"
                      ? "w-[0.1rem] h-20"
                      : "h-[0.1rem] w-20"
                  }   bg-borderLight`,
                  elementStyles: `absolute h-full z-10 ${
                    isCurrentOrPrevStep
                      ? "w-full transition-all duration-300 bg-main-gradient"
                      : "w-0"
                  }`
                }}
              />
            </div>
            <Details
              className={` w-max ${
                isCurrentOrPrevStep
                  ? " font-bold text-[1.2rem] transition-all duration-100 "
                  : "text-textMuted font-bold text-[1.2rem] transition-all duration-100"
              }  
               `}
              item={step}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CustomizedStepper;
