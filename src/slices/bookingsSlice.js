import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: [],
  reducers: {
    addBooking: (state, action) => {
      state.push({
        id: Date.now(),
        ...action.payload,
        status: "pending",
      });
    },
    confirmBooking: (state, action) => {
      const booking = state.find((b) => b.id === action.payload.bookingId);
      if (booking) {
        booking.status = "confirmed";
        booking.roomId = action.payload.roomId;
      }
    },
  },
});

export const { addBooking, confirmBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;