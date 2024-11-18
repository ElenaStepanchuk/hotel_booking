import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmBooking } from "../../slices/bookingsSlice"; 
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const bookings = useSelector((state) => state.bookings);
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  const handleConfirm = (bookingId, roomId) => {
    dispatch(confirmBooking({ bookingId, roomId }));
    alert("Booking confirmed!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Panel</h2>
      <h3 style={styles.subheading}>Bookings:</h3>
      <ul style={styles.list}>
        {bookings.map((booking) => (
          <li key={booking.id} style={styles.listItem}>
            <div>
              <strong>Booking #{booking.id}:</strong> {booking.seats} seats, class{" "}
              {booking.roomClass}
            </div>
            {booking.status === "pending" ? (
              <select
                style={styles.select}
                onChange={(e) =>
                  handleConfirm(booking.id, parseInt(e.target.value))
                }
              >
                <option value="">Select a room</option>
                {rooms
                  .filter(
                    (room) =>
                      room.seats >= booking.seats &&
                      room.class === booking.roomClass
                  )
                  .map((room) => (
                    <option key={room.id} value={room.id}>
                      Room {room.id} ({room.class}, {room.seats} seats)
                    </option>
                  ))}
              </select>
            ) : (
              <Link to={`/invoice/${booking.id}`} style={styles.link}>
                View Invoice
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  subheading: {
    marginBottom: "10px",
    color: "#555",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    padding: "15px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  select: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
};

export default AdminPanel;
