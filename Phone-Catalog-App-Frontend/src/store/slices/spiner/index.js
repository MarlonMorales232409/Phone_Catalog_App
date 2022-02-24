import { createSlice } from "@reduxjs/toolkit";

// Slice to manage the state for the spiner

export const spinerSlice = createSlice({
    name: "spiner",
    initialState: {
      loading: true,
    },
    reducers: {
      setLoading: (state, action) => {
        state.loading = action.payload;
      }
    },
  });

  export const { setLoading } = spinerSlice.actions;

  export default spinerSlice.reducer;
