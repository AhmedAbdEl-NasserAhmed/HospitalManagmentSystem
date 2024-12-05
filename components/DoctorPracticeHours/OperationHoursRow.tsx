"use client";

import { useState } from "react";
import SwitchInput from "../Switch/Switch";
import Modal from "../Modal/Modal";

const OperationHoursRow = ({ day }: { day: { id: number; name: string } }) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  return (
    <li key={day.id} className="grid grid-cols-[150px_150px_150px]">
      <h2 className=" capitalize text-xl">{day.name}</h2>
      <div className="flex items-center gap-8">
        <SwitchInput value={isAvailable} onChange={setIsAvailable} />
        <p
          className={`text-lg ${
            isAvailable ? "text-black" : "text-textMuted"
          } `}
        >
          {isAvailable ? "Open" : "Closed"}
        </p>
      </div>
      {isAvailable && (
        <Modal
          button={
            <button
              type="button"
              className="bg-white text-xl font-bold px-2 py-[0.5px] shadow-sm border-2 border-borderLight"
            >
              +
            </button>
          }
        />
      )}
    </li>
  );
};

export default OperationHoursRow;
