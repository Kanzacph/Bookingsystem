import "./CSS/MainContent.css";
import Frontpage from "./Frontpage.jsx";
import NewBooking from "./NewBooking.jsx";
import MyBookings from "./MyBookings.jsx";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Locals from "./Locals";

export default function MainContent(props) {
  return (
    <div className="main-content-container">
      <Routes>
        <Route path="/" element={<Frontpage />}></Route>
        <Route path="new-booking" element={<NewBooking />}></Route>
        <Route path="my-bookings" element={<MyBookings />}></Route>
        <Route path="locals" element={<Locals />}></Route>
      </Routes>
    </div>
  );
}
