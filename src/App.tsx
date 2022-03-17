import dayjs from "dayjs";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [guess, setGuess] = useState("");

  const date = dayjs(guess).format("DD/MM/YYYY").split("");

  return (
    <div className="grid">
      <div
        style={{
          display: "flex",
        }}
      >
        {date.map((date) => {
          return <div style={{ padding: ".5rem" }}>{date}</div>;
        })}
      </div>
      <div>
        <input
          type="date"
          id="input"
          onChange={(event) => setGuess(event.target.value)}
        />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
