"use client";

import { useEffect, useState } from "react";
import SwitchInput from "../Switch/Switch";
import Modal from "../Modal/Modal";
import OperationHourButton from "./OperationHourButton";
import AddOperationHoursForm from "../Forms/Doctor/AddOperationHoursForm";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { removeWorkingDays } from "@/lib/features/slices/doctorStartingProcess/doctorStartingProcessSlice";

const OperationHoursRow = ({ day }: { day: { id: number; name: string } }) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const workingDays = useAppSelector(
    (state) => state.doctorProcess.workingDays
  );

  const duration = useAppSelector((state) => state.doctorProcess.duration);

  useEffect(() => {
    if (workingDays[day.name]?.length > 0) {
      setIsAvailable(true);
    }
  }, [isAvailable, workingDays, day.name]);

  return (
    <li key={day.id} className="grid grid-cols-[120px_150px_1fr]">
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
        <div className="flex items-center gap-4">
          {workingDays[day.name]?.map(
            (time: { id: number; to: string; from: string }) => (
              <div
                key={time.id}
                className="flex items-center gap-2 bg-secondary border-[0.4px] border-borderLight rounded-lg px-4 py-2 "
              >
                <div className="flex items-center gap-2 ">
                  <p>{time.from}</p>
                  <p>To </p>
                  <p>{time.to}</p>
                </div>
                <span
                  onClick={() => {
                    dispatch(
                      removeWorkingDays({
                        name: day.name,
                        value: workingDays[day.name].filter(
                          (item: { id: number; to: string; from: string }) =>
                            item.id !== time.id
                        )
                      })
                    );
                  }}
                  className="text-xl cursor-pointer -translate-y-[0.8px]"
                >
                  &times;
                </span>
              </div>
            )
          )}
          <Modal button={<OperationHourButton />}>
            <AddOperationHoursForm
              duration={duration}
              dayName={day.name}
              selectedTimes={workingDays[day.name]}
            />
          </Modal>
        </div>
      )}
    </li>
  );
};

export default OperationHoursRow;
