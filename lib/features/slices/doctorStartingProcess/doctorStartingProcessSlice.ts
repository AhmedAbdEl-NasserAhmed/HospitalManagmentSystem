import SessionStorage from "@/helpers/sessionStorage";
import { createSlice } from "@reduxjs/toolkit";

const doctorStartingProcessState = SessionStorage.getItem(
  "doctorProcess",
  true
);

const initialState = {
  duration: "15",
  isVideoConsultationAvailable: false,
  videoDuration: "15",
  workingDays: {},
  staffDoctors: []
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
    },
    addStaffDoctor(state, action) {
      state.staffDoctors = [...state.staffDoctors, action.payload];
    }
  }
});

export const {
  setDuration,
  setIsVideoConsultationAvailable,
  setVideoDuration,
  addWorkingDays,
  removeWorkingDays,
  addStaffDoctor
} = doctorStartingProcess.actions;

export default doctorStartingProcess.reducer;
