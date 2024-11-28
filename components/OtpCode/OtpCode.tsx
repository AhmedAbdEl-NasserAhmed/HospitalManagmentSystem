"use client";

import OTPInput from "react-otp-input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { ChangeEvent, useState } from "react";

const OtpCode = ({
  onChange,
  value,
  errorMessage
}: {
  onChange: () => void;
  value: string;
  errorMessage: string;
}) => {
  const [currentInput, setCurrentInput] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-4">
      <OTPInput
        containerStyle={{
          justifyContent: "center"
        }}
        shouldAutoFocus={true}
        value={value}
        onChange={onChange}
        numInputs={4}
        renderInput={(props, index) => {
          const propsObject = {
            ...props,
            onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
              setCurrentInput(index);

              props.onFocus(e);
            },
            style: {
              textAlign: "center" as React.CSSProperties["textAlign"],
              width: "100%",
              height: "50px",
              margin: "0 6px",
              fontSize: "2rem",
              borderRadius: "4px",
              border: `2px solid ${
                index === currentInput ? "#45CC9C" : "#DCE0E5"
              }`,
              outline: "none"
            }
          };
          return <input {...propsObject} />;
        }}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default OtpCode;
