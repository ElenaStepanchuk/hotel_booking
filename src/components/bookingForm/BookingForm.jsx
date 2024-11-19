import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../../slices/bookingsSlice";
import bunner from "../../images/otel1.jpg";

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
    <>
    <div style={styles.container}>
      <h1 style={styles.title}>Experience Luxury <br /> and <br /> Comfort in Every Stay</h1>
        <ul style={styles.list}>
          <li style={styles.description}>Luxurious Rooms with Scenic Views</li>
          <li style={styles.description1}>Fine Dining and Local Cuisine</li>
          <li style={styles.description2}>Free Wi-Fi and Business Center</li>
      </ul>
    
      </div>
      <form id="booking-form" onSubmit={handleSubmit} style={styles.form}>
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
      </>
  );
};

const styles = {
    container: {
    position: "relative",
    padding: "30px 0", 
    backgroundImage: `url(${bunner})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    minHeight: "100vh",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: "100px",
    textAlign: "center",
    color: "#ffff",
    fontSize: "58px"
  },
  list: {
    marginLeft: "25%",
  },
  description: {
    textAlign: "start",
    color: "#ffff",
    fontSize: "25px",
    fontWeight: "bold",
    marginLeft: "400px"

  },
  description1: {
    textAlign: "start",
    color: "#ffff",
    fontSize: "25px",
    fontWeight: "bold",
    marginLeft: "200px"
  
  },
  description2: {
    textAlign: "start",
    color: "#ffff",
    fontSize: "25px",
    fontWeight: "bold",
    marginRight: "400px",
  },
  form: {
    maxWidth: "400px",
    margin: "220px auto",
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
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#1a2837",
    },
  }
};

export default BookingForm;


// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useDispatch } from "react-redux";
// import { addBooking } from "../../slices/bookingsSlice";
// import bunner from "../../images/otel1.jpg";

// const BookingForm = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     seats: "",
//     roomClass: "standard",
//     checkIn: new Date(),
//     checkOut: new Date(),
//   });

//   const handleDateChange = (name, date) => {
//     setFormData({ ...formData, [name]: date });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addBooking(formData)); // Отправляем данные в Redux-стор
//     alert("Booking request submitted!");
//     setFormData({ seats: "", roomClass: "standard", checkIn: new Date(), checkOut: new Date() });
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Welcome to our hotel</h1>
//       <p style={styles.description}>We offer the best service and comfort to our guests</p>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2 style={styles.heading}>Hotel Booking</h2>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Number of seats:</label>
//           <input
//             style={styles.input}
//             type="number"
//             name="seats"
//             value={formData.seats}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Room class:</label>
//           <select
//             style={styles.select}
//             name="roomClass"
//             value={formData.roomClass}
//             onChange={handleChange}
//           >
//             <option value="standard">Standard</option>
//             <option value="luxury">Luxury</option>
//           </select>
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Check-in date:</label>
//           <DatePicker
//             selected={formData.checkIn}
//             onChange={(date) => handleDateChange("checkIn", date)}
//             dateFormat="MMMM d, yyyy"
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Check-out date:</label>
//           <DatePicker
//             selected={formData.checkOut}
//             onChange={(date) => handleDateChange("checkOut", date)}
//             dateFormat="MMMM d, yyyy"
//             style={styles.input}
//           />
//         </div>
//         <button style={styles.button} type="submit">
//           Submit Booking
//         </button>
//       </form>
//     </div>
//   );
// };



// const styles = {
//   container: {
//     position: "relative",
//     padding: "30px 0", 
//     backgroundImage: `url(${bunner})`, 
//     backgroundSize: "cover", 
//     backgroundPosition: "center", 
//     minHeight: "100vh",
//     overflow: "hidden",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     textAlign: "center",
//     color: "#ffff",
//   },
//   description: {
//     textAlign: "center",
//     color: "#ffff",
//     fontSize: "19px"
//   },
//   form: {
//     maxWidth: "400px",
//     margin: "0 auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     backgroundColor: "#f9f9f9",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//     color: "#333",
//   },
//   formGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     fontWeight: "bold",
//     color: "#555",
//   },
//   input: {
//     width: "100%",
//     padding: "8px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     fontSize: "16px",
//   },
//   select: {
//     width: "100%",
//     padding: "8px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     fontSize: "16px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//     "&:hover": {
//       backgroundColor: "#1a2837",
//     },
//   }
//  };

// export default BookingForm;