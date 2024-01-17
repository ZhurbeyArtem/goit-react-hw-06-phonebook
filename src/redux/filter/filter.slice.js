import { createSlice } from "@reduxjs/toolkit";

let initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      return state = payload;
    }
  }
})

export const { actions, reducer } = filterSlice;
