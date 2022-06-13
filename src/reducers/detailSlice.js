import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gameDetailsUrl, gameScreenshotUrl } from "../api";

const initialState = {
  game: {},
  screen: {},
  loading: true,
};

export const loadDetail = createAsyncThunk("detail/loadDetail", async (id) => {
  try {
    const response = await fetch(gameDetailsUrl(id));
    const data = await response.json();
    const screen = await fetch(gameScreenshotUrl(id));
    const screenshots = await screen.json();
    return {
        data: data,
        screenshots: screenshots,
    };
  } catch (error) {
    console.log(error);
  }
});

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [loadDetail.pending]: (state) => {
      state.loading = true;
    },
    [loadDetail.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        game: payload.data,
        screen: payload.screenshots,
        loading: false,
      };
    },
  },
});

export default detailSlice.reducer;
