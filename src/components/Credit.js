import React from "react";

export default function Credit(props) {
  console.log(props);
  return (
    <div
      style={{
        width: "50%",
        height: "200px",
        border: "1px solid black",
        margin: "auto",
        position: "absolute",
        bottom: "370px",
        background: "#d1d1d1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
      className="credit-card"
    >
      <div className="center-credit-card">
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
    </div>
  );
}
