import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { popularGamesUrl } from "../api";

const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

export const loadGames = createAsyncThunk("games/loadGames", async () => {
  try {
    const response = await fetch(popularGamesUrl());
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const gamesSlice = createSlice({
  name: "games",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadGames.fulfilled, (state, action) => {
      return { ...state, popular: action.payload };
    });
  },
});

export const { fetchGames } = gamesSlice.actions;
export default gamesSlice.reducer;
