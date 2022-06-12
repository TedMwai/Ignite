import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
  loading: false,
};

export const loadGames = createAsyncThunk("games/loadGames", async () => {
  try {
    const response = await fetch(popularGamesUrl());
    const data = await response.json();
    const loadUpcomingGames = await fetch(upcomingGamesUrl());
    const dataUpcoming = await loadUpcomingGames.json();
    const loadNewGames = await fetch(newGamesUrl());
    const dataNew = await loadNewGames.json();
    return {
      data: data,
      dataUpcoming: dataUpcoming,
      dataNew: dataNew,
    };
  } catch (error) {
    console.log(error);
  }
});

const gamesSlice = createSlice({
  name: "games",
  initialState: initState,
  reducers: {},
  extraReducers: {
    [loadGames.pending]: (state) => {
      state.loading = true;
    },
    [loadGames.fulfilled]: (state, { payload }) => {
      state.popular = payload.data;
      state.upcomingGames = payload.dataUpcoming;
      state.newGames = payload.dataNew;
      state.loading = false;
    },
  },
});

export default gamesSlice.reducer;
