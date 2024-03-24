import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    totalAdverts: 13,
    bookings: [],
    isLoading: false,
    error: null,
    favorites:
      JSON.parse(localStorage.getItem('persist:favorites'))?.favorites ?? [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        card => card._id === action.payload._id
      );
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    advertBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { advertBooking, toggleFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
