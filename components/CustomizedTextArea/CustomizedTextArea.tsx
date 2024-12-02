import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const CustomizedTextArea = ({
  rows,
  cols,
  placeholder,
  label,
  register,
  errorMessage
}: {
  rows: number;
  cols: number;
  placeholder: string;
  label: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-3">
        <label className="text-textDark text-[1.3rem]">{label}</label>
        <textarea
          className="px-4 py-3 border-borderLight border-[0.8px] outline-none rounded-md text-xl w-full"
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          {...register}
        />
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default CustomizedTextArea;
