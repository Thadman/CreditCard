import React from "react";

export default function form(props) {
  console.log(props);
  return (
    <>
      <h1>{props.query}</h1>
      <button onClick={props.handleSubmit}>Click Me</button>
    </>
  );
}

// using props to pass state and handleSubmit function, which is in the parent App.js.
// state is updating with the onChange handler.
