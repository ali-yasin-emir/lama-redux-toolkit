import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateUser2 = createAsyncThunk('users/update', async (user) => {
  const res = await axios.post(
    'http://localhost:8800/api/users/1/update',
    user
  );
  return res.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Yasin',
    email: 'yasin@gmail.com',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.name;
    },
    remove: (state) => (state = {}),
  },
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = true;
      state.userInfo = action.payload;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { update, remove } = userSlice.actions;
export default userSlice.reducer;
