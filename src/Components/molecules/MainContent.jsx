import "./MainContent.css";
import Frontpage from "./Frontpage.jsx";
import NewBooking from "./NewBooking.jsx";
import NewBooking2 from "./NewBooking2.jsx";
import MyBookings from "./MyBookings.jsx";
import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Locals from "./Locals";
import BookingForm from "./BookingForm.jsx";

export default function MainContent(props) {
  return (
    <div className="main-content-container">
      <Routes>
        <Route path="/" element={<Frontpage />}></Route>
        <Route path="new-booking" element={<NewBooking />}></Route>
        <Route path="new-booking2" element={<NewBooking2 />}></Route>
        <Route path="my-bookings" element={<MyBookings />}></Route>
        <Route path="locals" element={<Locals />}></Route>
        <Route path="bookingform" element={<BookingForm />}></Route>
      </Routes>
    </div>
  );
}
