import React from "react";

export default function Credit(props) {
  console.log(props);
  return (
    <div
      style={{
        width: "50%",
        height: "175px",
        border: "1px solid black",
        margin: "auto",
      }}
      className="credit-card"
    >
      <div>
        <label> Card Number: {props.number}</label>
      </div>
      <div>
        <label>Customer Name: {props.name}</label>
      </div>
      <div>
        <label>Month: {props.month}</label>
      </div>
      <div>
        <label>Year: {props.year}</label>
      </div>
      <div>
        <label>Cvv: {props.cvv}</label>
      </div>
    </div>
  );
}
