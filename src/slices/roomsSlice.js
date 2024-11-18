import { createSlice } from "@reduxjs/toolkit";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: [
    { id: 1, seats: 2, class: "standard" },
    { id: 2, seats: 4, class: "luxury" },
    { id: 3, seats: 2, class: "luxury" },
  ],
  reducers: {},
});

export default roomsSlice.reducer;