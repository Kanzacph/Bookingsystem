import "./MainContent.css";
import Frontpage from "./Frontpage.jsx";
import NewBooking from "./NewBooking.jsx";
import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function MainContent(props) {
  return (
    <div className="main-content-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />}></Route>
          <Route path='new-booking' element={<NewBooking />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
