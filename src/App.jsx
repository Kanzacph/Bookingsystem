import logo from "./logo.svg";
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
