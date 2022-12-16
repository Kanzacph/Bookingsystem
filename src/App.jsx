import "./Components/molecules/CSS/NewBooking.css";
import './Components/molecules/CSS/BookingModal.css'
import "./Components/molecules/CSS/Frontpage.css";
import "./Components/molecules/CSS/MainContent.css";
import "./Components/molecules/CSS/MyBookings.css";
import "./Components/molecules/CSS/TheNavbar.css";
import './Components/molecules/CSS/UpdateModal.css'
import "./App.css";
import * as React from "react";
import TheNavbar from "./Components/molecules/TheNavbar.jsx";
import MainContent from "./Components/molecules/MainContent.jsx";


function App() {
  return (
    <div className="app-container">
      <TheNavbar />
      <MainContent />
    </div>
  );
}

export default App;
