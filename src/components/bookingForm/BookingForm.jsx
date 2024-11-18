import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../../slices/bookingsSlice";

const BookingForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    seats: "",
    roomClass: "standard",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooking(formData));
    alert("Booking request submitted!");
    setFormData({ seats: "", roomClass: "standard", checkIn: "", checkOut: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Hotel Booking</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Number of seats:
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Room class:
          <select
            name="roomClass"
            value={formData.roomClass}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="standard">Standard</option>
            <option value="luxury">Luxury</option>
          </select>
        </label>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Check-in date:
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Check-out date:
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
      </div>
      <button type="submit" style={styles.button}>
        Submit Booking
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  select: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
};

export default BookingForm;