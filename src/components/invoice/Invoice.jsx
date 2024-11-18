import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"; // Импортируем useNavigate

const Invoice = () => {
  const { bookingId } = useParams(); // Получение ID заявки из URL
  const booking = useSelector((state) =>
    state.bookings.find((b) => b.id === parseInt(bookingId))
  );
  const navigate = useNavigate(); // Создаем navigate для перехода

  if (!booking) {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Invoice</h2>
        <p style={styles.error}>Booking not found.</p>
        <button onClick={() => navigate(-1)} style={styles.backButton}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Invoice</h2>
      <div style={styles.detail}>
        <p>
          <strong>Booking ID:</strong> {booking.id}
        </p>
        <p>
          <strong>Number of Seats:</strong> {booking.seats}
        </p>
        <p>
          <strong>Room Class:</strong> {booking.roomClass}
        </p>
        <p>
          <strong>Dates:</strong> {booking.checkIn} - {booking.checkOut}
        </p>
        <p>
          <strong>Status:</strong> {booking.status}
        </p>
        <p>
          <strong>Assigned Room:</strong> {booking.roomId || "Not Assigned"}
        </p>
      </div>
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        Back
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  detail: {
    lineHeight: "1.6",
    fontSize: "16px",
    color: "#555",
  },
  error: {
    textAlign: "center",
    color: "#ff0000",
    fontSize: "18px",
  },
  backButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default Invoice;