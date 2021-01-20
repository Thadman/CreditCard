import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [query, setQuery] = useState("Thad");
  // const [number, setNumber] = useState("");
  // const [name, setName] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useYear("");

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
  }

  // function handleChange() {
  //   const { name, value } = e.target;
  //   setState(([name]: value));
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className="background">
          <div className="form">
            <form>
              <Form
                details={details}
                query={query}
                handleSubmit={handleSubmit}
              />
              <div>
                <label> Card Number</label>
              </div>
              <input
                type="text"
                placeholder="Type your message here"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <div>
                <label>Customer Name</label>
              </div>
              <input
                type="text"
                placeholder="Type your message here"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <div>
                <label>Month</label>
                <select>
                  <option value="0">Month</option>
                  <option value="1">Jan</option>
                  <option value="2">Feb</option>
                  <option value="3">Mar</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                </select>
              </div>
              <div>
                <label>Year</label>
                <select>
                  <option value="0">Year</option>
                  <option value="1">2021</option>
                  <option value="2">2022</option>
                  <option value="3">2023</option>
                  <option value="4">2024</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
