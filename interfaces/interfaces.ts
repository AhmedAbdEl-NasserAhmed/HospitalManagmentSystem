import { FieldValues, UseFormRegister } from "react-hook-form";

export interface CustomizedInputInterface {
  label?: string;
  type: string;
  placeholder?: string;
  errorMessage?: string;
  widthValue: string;
  register?: UseFormRegister<FieldValues>;
}
