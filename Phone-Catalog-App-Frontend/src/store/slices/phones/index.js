import { createSlice } from "@reduxjs/toolkit";

// Slice to manage the phone data 

export const phoneSlice = createSlice({
  name: "phones",
  initialState: {
    phoneList: [],
  },
  reducers: {
    setPhoneList: (state, action) => {
      state.phoneList = action.payload;
    }
  },
});



export const { setPhoneList } = phoneSlice.actions;

export default phoneSlice.reducer;

