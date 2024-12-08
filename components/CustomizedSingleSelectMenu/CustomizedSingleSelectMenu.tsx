import { ChangeEvent, useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { UseFormRegisterReturn } from "react-hook-form";

const CustomizedSingleSelectMenu = ({
  options,
  onChange,
  errorMessage,
  label,
  placeholder,
  value,
  name,
  isDisabled,
  register
}: {
  options: { id: number; option: string; value: string }[];
  onChange?: (option: string) => void;
  errorMessage?: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  name?: string;
  shouldBeHidden?: boolean;
  isDisabled?: (value: string) => boolean;
  register?: UseFormRegisterReturn;
}) => {
  function handleOnChange(e: ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value);
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-3">
        <label className="text-textDark text-[1.3rem] capitalize ">
          {label}
        </label>
        <select
          name={name}
          value={value}
          onChange={handleOnChange}
          className="px-2 py-3 border-borderLight border-[0.8px] rounded-md w-full outline-none text-xl"
          {...register}
        >
          {placeholder && <option value="">{placeholder}</option>}

          {options.map((option) => (
            <option
              disabled={isDisabled ? isDisabled(option.option) : null}
              key={option.id}
              value={option.value}
              className="disabled:bg-secondary disabled:opacity-40 disabled:line-through"
            >
              {option.option}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default CustomizedSingleSelectMenu;
