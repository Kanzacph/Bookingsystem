// import { useEffect, useState } from "react";
// import { transformToArray } from "./firebase-utils.js";
// import SingleBooking from "./SingleBooking.jsx";

// const url = "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/bookings.json";

// export default function DeleteBooking({bookings, setBookings}){
//     return(
//         console.log("clicked")
//     );
// }

import "./CSS/NewBooking.css";
import deleteButton from "../atoms/deleteButton.png";

export default function Delete({ id }) {
  const handleDelete = async () => {
    const response = await fetch(
      `https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/bookings/${id}.json`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };
  return (
    <div className="delete-knap" onClick={handleDelete}>
      <img src={deleteButton} alt="delete" />
    </div>
  );
}
