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
    case "50": {
      styles.width = "50%";
      break;
    }
    case "75": {
      styles.width = "75%";
      break;
    }
    case "25": {
      styles.width = "25%";
      break;
    }
    default:
      return styles;
  }

  return styles;
}

const CustomizedInput = ({
  label,
  type,
  placeholder,
  errorMessage,
  register,
  widthValue
}: CustomizedInputInterface) => {
  const [visibleContent, setVisibleContent] = useState<boolean>(false);

  return (
    <div>
      <div className="flex flex-col gap-3">
        <label className="text-textDark text-[1.3rem]">{label}</label>
        <div className="relative">
          <input
            style={{ ...customStyles(widthValue) }}
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
