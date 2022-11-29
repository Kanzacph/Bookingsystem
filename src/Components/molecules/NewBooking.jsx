import React, { Component } from "react";
import "./NewBooking.css";
import './firebase-utils';

export default function NewBooking(props) {
  return (
    <div> 
      
      <form action="">
        <label for="birthday:"></label>
        <input type="date" id="birthday" name="birthday" />
        <input type="submit" />
      </form>

      <div className="mybookings-boks2">
    <div className="myboookings-boks1">
        <div className="mybookings-date">
            <h1>
                <div className="datoen"></div>
            </h1>
        </div>
        <div className="mybookings-info">
            <p className="lokale"></p>
            <p className="tidspunkt">08:00 - 12:00</p>
            <p className="pladser">40 Pladser</p>
        </div>
    </div>


</div> 

    </div>

    
  );


 
}
