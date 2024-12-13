"use client";

import CustomizedButton from "@/components/CustomizedButton";
import CustomizedSingleSelectMenu from "@/components/CustomizedSingleSelectMenu/CustomizedSingleSelectMenu";
import { convertToISO, generateDoctorSchedule } from "@/helpers/helpers";
import { addWorkingDays } from "@/lib/features/slices/doctorStartingProcess/doctorStartingProcessSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { formSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction, useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { HiCheck } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { z } from "zod";

type Schema = z.infer<typeof formSchema>;

const AddOperationHoursForm = ({
  dayName,
  setCloseModal,
  selectedTimes
}: {
  dayName: string;
  setCloseModal?: () => void;
  selectedTimes: { id: string; to: string; from: string }[];
}) => {
  const dispatch = useAppDispatch();

  const duration = useAppSelector((state) => state.doctorProcess.duration);

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    defaultValues: {
      time: selectedTimes
    },
    resolver: zodResolver(formSchema),
    shouldUnregister: true
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "time"
  });

  const [startTime, setStartTime] = useState<
    { id: number; option: string; value: string }[]
  >([]);

  const [endTime, setEndTime] = useState<
    { id: number; option: string; value: string }[]
  >([]);

  const [chosenStartDates, setChosenStartDates] = useState<string[]>(
    selectedTimes?.map((time) => time.from) || []
  );

  const [chosenEndDates, setChosenEndDates] = useState<string[]>(
    selectedTimes?.map((time) => time.to) || []
  );

  useEffect(() => {
    setStartTime(generateDoctorSchedule("09:00", "17:00", +duration));
  }, [duration]);

  useEffect(() => {
    setEndTime(generateDoctorSchedule("09:00", "17:00", +duration));
  }, [duration]);

  useEffect(() => {
    append({
      from: "",
      to: ""
    });
  }, [append]);

  const time = watch("time");

  function onSubmit(data: Schema) {
    const workingTimesObject = {};

    for (let time of data.time) {
      if (workingTimesObject[dayName]) {
        workingTimesObject[dayName].push({
          id: crypto.randomUUID().substring(0.4, 5),
          from: time.from,
          to: time.to
        });
      } else {
        workingTimesObject[dayName] = [
          {
            id: crypto.randomUUID().substring(0.4, 5),
            from: time.from,
            to: time.to
          }
        ];
      }
    }

    dispatch(addWorkingDays(workingTimesObject));

    setCloseModal();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white max-h-[350px] rounded-2xl w-[700px] overflow-y-scroll"
    >
      <div className="p-8 border-b-2 border-borderLight flex items-center justify-between">
        <h2 className="text-3xl font-semibold">
          Add working hours for ({dayName})
        </h2>
        <span onClick={setCloseModal} className="text-2xl cursor-pointer">
          <IoClose />
        </span>
      </div>
      <div className="p-8 flex flex-col gap-8 ">
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="flex  gap-6 ">
              <Controller
                control={control}
                name={`time.${index}.from`}
                render={({ field: { onChange, value } }) => (
                  <CustomizedSingleSelectMenu
                    value={value}
                    errorMessage={errors["time"]?.[index]?.from?.message}
                    placeholder="From"
                    isDisabled={(optionValue: string): boolean => {
                      return chosenStartDates?.includes(optionValue);
                    }}
                    onChange={(event) => {
                      update(index, { to: "" });
                      setChosenEndDates((data) => {
                        const newChosenDates = data.slice();
                        newChosenDates[index] = "";
                        return newChosenDates;
                      });
                      onChange(event);
                      if (chosenStartDates.length > 0) {
                        setChosenStartDates((data) => {
                          const newChosenDates = data.slice();
                          newChosenDates[index] = event;
                          return newChosenDates;
                        });
                      } else {
                        setChosenStartDates((data) => [...data, event]);
                      }
                    }}
                    label="From"
                    options={startTime}
                  />
                )}
              />
              <Controller
                control={control}
                name={`time.${index}.to`}
                render={({ field: { onChange, value } }) => (
                  <CustomizedSingleSelectMenu
                    value={value}
                    errorMessage={errors["time"]?.[index]?.to?.message}
                    placeholder="To"
                    isDisabled={(optionValue: string): boolean => {
                      return (
                        chosenEndDates?.includes(optionValue) ||
                        new Date(convertToISO(time[index].from)) >=
                          new Date(convertToISO(optionValue))
                      );
                    }}
                    onChange={(event) => {
                      onChange(event);
                      if (chosenEndDates.length > 0) {
                        setChosenEndDates((data) => {
                          const newChosenDates = data.slice();
                          newChosenDates[index] = event;
                          return newChosenDates;
                        });
                      } else {
                        setChosenEndDates((data) => [...data, event]);
                      }
                    }}
                    label="To"
                    options={endTime}
                  />
                )}
              />

              {field.id === fields[0].id ? (
                <RowItem className="bg-main-gradient text-white self-center">
                  <HiCheck />
                </RowItem>
              ) : (
                <RowItem
                  className="bg-secondary border-[0.4px] border-borderLight cursor-pointer self-center"
                  onClick={() => {
                    setChosenStartDates((data) =>
                      data.filter((date) => date !== field.from)
                    );

                    setChosenEndDates((data) =>
                      data.filter((date) => date !== field.to)
                    );
                    setTimeout(() => {
                      remove(index);
                    }, 10);
                  }}
                >
                  <IoClose />
                </RowItem>
              )}
            </div>
          );
        })}
        <button
          onClick={() =>
            append({
              to: "",
              from: ""
            })
          }
          type="button"
          className="px-6 py-3 border-[0.5px] border-borderLight rounded-lg font-medium text-xl self-start"
        >
          + Add another duration
        </button>
      </div>
      <div className="border-t-2 border-borderLight justify-end p-8 w-full flex ">
        <div className="flex items-center gap-4">
          <button
            onClick={setCloseModal}
            type="button"
            className="p-2 border-[0.5px] border-borderLight rounded-lg font-medium text-lg self-start"
          >
            Discard
          </button>
          <CustomizedButton size="small" type="submit">
            Save
          </CustomizedButton>
        </div>
      </div>
    </form>
  );
};

export default AddOperationHoursForm;

function RowItem({
  onClick,
  children,
  className
}: {
  onClick?: () => void;

  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      onClick={onClick}
      className={`text-2xl translate-y-[1.24rem] ${className}  p-2 rounded-md`}
    >
      {children}
    </span>
  );
}
