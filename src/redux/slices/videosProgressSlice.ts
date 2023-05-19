import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoProgress } from "../../models/reduxModels";

type InitialState = {
  videosProgresStorage: Record<string, number> | null;
};

const initialState: InitialState = {
  videosProgresStorage: null,
};

const videosProgressSlice = createSlice({
  name: "videosProgress",
  initialState,
  reducers: {
    setVideosProgressStorage: (state, action: PayloadAction<Record<string, number>>) => {
      state.videosProgresStorage = action.payload;
    },

    updateVideosProgressStorage: (state, action: PayloadAction<VideoProgress>) => {
      if (!state.videosProgresStorage) {
        state.videosProgresStorage = {};
      }
      state.videosProgresStorage[action.payload.lessonId] = action.payload.startPoint;
    },
  },
});

export const { setVideosProgressStorage, updateVideosProgressStorage } =
  videosProgressSlice.actions;
export default videosProgressSlice.reducer;
