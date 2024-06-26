import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65fac1213909a9a65b1b6d9a.mockapi.io/api/v1';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      const resp = await axios.get(`/adverts/?page=${page}&limit=4`);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
