import React from "react";

export default function Button(props) {
  console.log(props);
  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Month: {props.month}</p>
          <p>Year: {props.year}</p>
          <p> CVV: {props.cvv}</p>
        </div>
        <div>
          <button
            style={{ width: "100%", fontSize: "20px" }}
            onClick={props.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
