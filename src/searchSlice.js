import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      // The payload is the text from the search input
      state.searchTerm = action.payload; 
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;