import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  const [query, setQuery] = useState("Enter Details");
  const [number, setNumber] = useState("#### #### #### ####");
  const [name, setName] = useState("John Doe");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("###");

  // have this here, as was just testing passing through props
  const details = {
    fname: "Thad",
    lname: "Hoskin",
    location: "Melbourne",
  };

  // passing this through as props to the child component form.js
  function handleSubmit() {
    console.log("this worked");
    setQuery("Thad");
    setNumber("#### #### #### ####");
    setName("John Doe");
    setYear("");
    setMonth("");
    setCvv("###");
  }

  // function handleChange() {
  //   const { name, value } = e.target;
  //   setState(([name]: value));
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className="background">
          <div
            className="form"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <form
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Form details={details} query={query} />
              <div style={{ textAlign: "left", paddingLeft: "75px" }}>
                <label> Card Number: {number}</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type your message here"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  style={{ width: "80%", height: "30px", fontSize: "25px" }}
                />
              </div>
              <div style={{ textAlign: "left", paddingLeft: "75px" }}>
                <label>Customer Name: {name}</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type your message here"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  style={{ width: "80%", height: "30px", fontSize: "25px" }}
                />
              </div>
              <div
                className="labels"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>
                  <label>Month</label>
                  <select onChange={(e) => setMonth(e.target.value)}>
                    <option value="0">Month</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                  </select>
                </div>
                <div>
                  <label>Year</label>
                  <select onChange={(e) => setYear(e.target.value)}>
                    <option value="0">Year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
                <div>
                  <label>Cvv</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
              <Button
                handleSubmit={handleSubmit}
                name={name}
                number={number}
                year={year}
                month={month}
                cvv={cvv}
              />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
