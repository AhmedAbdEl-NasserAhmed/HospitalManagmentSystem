"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const PhoneNumber = ({
  value,
  onChange,
  errorMessage
}: {
  value: string;
  onChange: () => void;
  errorMessage: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-3">
        <label className="text-textDark text-[1.3rem]">Phone Number</label>
        <PhoneInput
          country={"eg"}
          value={value}
          onChange={onChange}
          inputStyle={{ width: "100%" }}
        />
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default PhoneNumber;
