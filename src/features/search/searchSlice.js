import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  location: "Busan",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchValue: (state, action) => {
      return { ...state, searchValue: action.payload };
    },
    saveLocation: (state, action) => {
      return { ...state, location: action.payload };
    },
  },
});

export const { updateSearchValue, saveLocation } = searchSlice.actions;
export default searchSlice;
