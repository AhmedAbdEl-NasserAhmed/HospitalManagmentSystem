import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  duration: "15",
  isVideoConsultationAvailable: false,
  videoDuration: "15",
  workingDays: {}
};

const doctorStartingProcess = createSlice({
  name: "doctorStartingProcess",
  initialState,
  reducers: {
    setDuration(state, action) {
      state.duration = action.payload;
    },
    setIsVideoConsultationAvailable(state, action) {
      state.isVideoConsultationAvailable = action.payload;
    },
    setVideoDuration(state, action) {
      state.videoDuration = action.payload;
    },
    addWorkingDays(state, action) {
      state.workingDays = { ...state.workingDays, ...action.payload };
    },

    removeWorkingDays(state, action) {
      state.workingDays = {
        ...state.workingDays,
        [action.payload.name]: action.payload.value
      };
    }
  }
});

export const {
  setDuration,
  setIsVideoConsultationAvailable,
  setVideoDuration,
  addWorkingDays,
  removeWorkingDays
} = doctorStartingProcess.actions;

export default doctorStartingProcess.reducer;
