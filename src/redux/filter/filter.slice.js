import { createSlice } from "@reduxjs/toolkit";
import { changeFilter } from "./changeFilter";
import { getFilter } from "./getFilter";


let initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilter: (state) => getFilter(state),
    changeFilter: (state, { payload }) => changeFilter(state, payload)
  }
})

export const { actions, reducer } = filterSlice;
