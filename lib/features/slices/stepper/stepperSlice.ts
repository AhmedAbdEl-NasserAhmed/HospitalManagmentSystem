import SessionStorage from "@/helpers/sessionStorage";
import { createSlice } from "@reduxjs/toolkit";

let step = null;

step = SessionStorage.getItem("step");

const initialState = {
  currentStep: JSON.parse(step) || 0,
  Length: 0
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    init(state, action) {
      state.Length = action.payload;
    },
    nextStep: (state, action) => {
      if (state.currentStep < 0 || state.currentStep === state.Length) return;
      state.currentStep = action.payload;
    },

    reset: (state) => {
      state.currentStep = 0;
    }
  }
});

export const { nextStep, init, reset } = stepperSlice.actions;

export default stepperSlice.reducer;
