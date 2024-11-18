import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./components/bookingForm/BookingForm";
import AdminPanel from "./components/adminPanel/AdminPanel";
import Invoice from "./components/invoice/Invoice";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/invoice/:bookingId" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;
