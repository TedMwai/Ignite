import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";

const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
  loading: false,
  isFound: false,
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
export const searchGame = createAsyncThunk(
  "games/searchGame",
  async (game_name) => {
    try {
      const response = await fetch(searchGameUrl(game_name));
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState: initState,
  reducers: {
    clearSearch: (state) => {
      state.searched = [];
      state.isFound = false;
    },
  },
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
    [searchGame.pending]: (state) => {
      state.isFound = false;
    },
    [searchGame.fulfilled]: (state, { payload }) => {
      state.searched = payload;
      state.isFound = true;
    },
  },
});

export const { clearSearch } = gamesSlice.actions;
export default gamesSlice.reducer;
