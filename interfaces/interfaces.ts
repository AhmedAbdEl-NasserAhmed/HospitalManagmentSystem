import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface CustomizedInputInterface {
  value?: string | number;
  label?: string;
  type: string;
  placeholder?: string;
  errorMessage?: string;
  widthValue: "large" | "medium" | "small";
  register?: UseFormRegisterReturn;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

export interface StepObject {
  title: string;
  description?: string;
  initialContent?: string;
}

export interface CustomizedSteppersProps {
  steps: StepObject[];
  direction: "vertical" | "horizontal";
}
