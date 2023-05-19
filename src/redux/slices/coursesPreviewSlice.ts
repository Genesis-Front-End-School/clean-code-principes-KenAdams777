import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken, isToken } from "../../helpers/tokenHandler";
import { Course, CoursesPreview } from "../../models/coursesPreviewModel";
import { apiRouts } from "../../routes/apiRouts";
import { State } from "../../models/reduxModels";

type InitialState = State<Course[]>;

const initialState: InitialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const fetchCoursesPreview = createAsyncThunk(
  "coursesPreview/fetchCoursesPreview",
  async (_, { signal }): Promise<CoursesPreview> => {
    const data = await getToken(apiRouts.GET_TOKEN_URL, signal);

    if (isToken(data)) {
      const { token } = data;
      const response = await axios.get<CoursesPreview>(apiRouts.GET_COURSES_PREVIEW_URL, {
        signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    }

    throw new Error("Failure to get list of Courses");
  },
);

const coursesPreviewSlice = createSlice({
  name: "coursesPreview",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.data = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchCoursesPreview.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });

    builder.addCase(fetchCoursesPreview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...action.payload.courses].sort((a, b) =>
        Date.parse(a.launchDate) < Date.parse(b.launchDate) ? 1 : -1,
      );
    });

    builder.addCase(fetchCoursesPreview.rejected, (state, action) => {
      if (action.error.name === "AbortError") {
        console.warn("Abort fetch courses preview request: ", action.error);
        return;
      }
      state.isLoading = false;
      state.error = action.error.message ?? "Something went wrong. Try again later";
    });
  },
});

export const { setCourses } = coursesPreviewSlice.actions;
export default coursesPreviewSlice.reducer;
