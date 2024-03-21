import { createSlice } from "@reduxjs/toolkit";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {},
  extraReducers: (builder) => {},
});

export const advertsReducer = advertsSlice.reducer;
