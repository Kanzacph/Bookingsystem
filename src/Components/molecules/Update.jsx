// Kanza
import { useEffect, useState } from "react";
import { transformToArray } from "./firebase-utils.js";
import SingleBooking from "./SingleBooking.jsx";

const url = "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function UpdateBooking(){
    const [room, setRoom] = useState("");
    const [date, setDate] = useState(""); // date
}