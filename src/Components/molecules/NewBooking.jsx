import React, { Component } from "react";
import "./NewBooking.css";
import './firebase-utils';

export default function NewBooking(props) {

    const data = [
        {
          start_date: "2022-23-11 6:00",
          end_date: "2022-23-11 8:00",
          text: "Event 1",
          id: 1,
        },
        {
          start_date: "2022-25-11 10:00",
          end_date: "2022-25-11 18:00",
          text: "Event 2",
          id: 2,
        },
      ];

  return (
      <div className="scheduler-container">
        <Scheduler events={data} />
      </div>
  );
}
