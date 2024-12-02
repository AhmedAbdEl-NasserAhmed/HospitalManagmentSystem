"use client";

import CustomizedButton from "@/components/CustomizedButton";
import DragAndDrop from "@/components/DragAndDrop/DragAndDrop";
import SessionStorage from "@/helpers/sessionStorage";
import { nextStep } from "@/lib/features/slices/stepper/stepperSlice";
import { useAppDispatch } from "@/lib/hooks";
import { doctorRegisterDocumentsFormSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type Schema = z.infer<typeof doctorRegisterDocumentsFormSchema>;

const RegisterDocumentsForm = () => {
  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const {
    control,
    unregister,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(doctorRegisterDocumentsFormSchema)
  });

  function onSubmit() {
    dispatch(nextStep(3));
    setTimeout(() => {
      push("/doctor/login");
      SessionStorage.deleteItem("step");
      SessionStorage.deleteItem("user");
    }, 100);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-semibold text-[1.3rem]">
            Click to upload or drag and drop
          </h2>
          <p className="text-textMuted text-lg mt-2">PDF, JPG, PNG</p>
        </div>
        <Controller
          control={control}
          name="resumeDocument"
          render={({ field: { onChange } }) => (
            <DragAndDrop
              removeItemFn={() => unregister("resumeDocument")}
              errorMessage={errors["resumeDocument"]?.message}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-semibold text-[1.3rem]">Passport or ID</h2>
          <p className="text-textMuted text-lg mt-2">PDF, JPG, PNG</p>
        </div>
        <Controller
          control={control}
          name="idDocument"
          render={({ field: { onChange } }) => (
            <DragAndDrop
              removeItemFn={() => unregister("idDocument")}
              errorMessage={errors["idDocument"]?.message}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div>
        <CustomizedButton type="submit" size="large">
          Finish
        </CustomizedButton>
      </div>
    </form>
  );
};

export default RegisterDocumentsForm;
