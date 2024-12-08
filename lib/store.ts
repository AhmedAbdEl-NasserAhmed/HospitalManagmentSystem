import { configureStore } from "@reduxjs/toolkit";
import stepperSlice from "./features/slices/stepper/stepperSlice";
import doctorStartingProcessSlice from "./features/slices/doctorStartingProcess/doctorStartingProcessSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      stepper: stepperSlice,
      doctorProcess: doctorStartingProcessSlice
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
