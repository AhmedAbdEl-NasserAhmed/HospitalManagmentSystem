"use client";

import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { CustomizedInputInterface } from "@/interfaces/interfaces";

function customStyles(widthValue: string): { [key: string]: string } {
  const styles = {
    width: "100%"
  };

  switch (widthValue) {
    case "medium": {
      styles.width = "50%";
      break;
    }

    case "small": {
      styles.width = "25%";
      break;
    }
    default:
      return styles;
  }

  return styles;
}

const CustomizedInput = ({
  value,
  onchange,
  label,
  type,
  placeholder,
  errorMessage,
  register,
  widthValue,
  defaultValue
}: CustomizedInputInterface) => {
  const [visibleContent, setVisibleContent] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-3">
        <label className="text-textDark text-[1.3rem]">{label}</label>

        <div style={{ ...customStyles(widthValue) }} className="relative">
          <input
            defaultValue={defaultValue}
            onChange={onchange}
            value={value}
            type={visibleContent ? "text" : type}
            placeholder={placeholder}
            className="px-4 py-3 border-borderLight border-[0.8px] rounded-md w-full placeholder:text-textMuted placeholder:text-lg outline-none text-xl"
            {...register}
          />
          {type === "password" && (
            <span
              onClick={() => setVisibleContent((prev) => !prev)}
              className="absolute top-4 right-3 text-2xl cursor-pointer text-textMuted "
            >
              {visibleContent ? <HiEyeOff /> : <HiEye />}
            </span>
          )}
        </div>
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default CustomizedInput;
