// src/features/todos/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 0,
  Length: 0
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    init(state, action) {
      state.Length = action.payload;
    },
    nextStep: (state) => {
      if (state.currentStep < 0 || state.currentStep === state.Length) return;
      state.currentStep++;
    }
  }
});

export const { nextStep, init } = stepperSlice.actions;

export default stepperSlice.reducer;
