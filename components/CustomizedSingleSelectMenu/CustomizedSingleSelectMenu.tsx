import { ChangeEvent } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { PiPlaceholder } from "react-icons/pi";

const CustomizedSingleSelectMenu = ({
  options,
  onChange,
  errorMessage,
  label,
  placeholder
}: {
  options: { id: number; option: string }[];
  onChange: (option: string) => void;
  errorMessage?: string;
  label: string;
  placeholder?: string;
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
          onChange={handleOnChange}
          className="px-2 py-3 border-borderLight border-[0.8px] rounded-md w-full outline-none text-xl"
        >
          {placeholder && <option value="">{placeholder}</option>}

          {options.map((option) => (
            <option key={option.id} value={option.option}>
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