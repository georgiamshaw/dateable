import React, { useState } from "react";
import "./App.css";

function App() {
  const [guess, setGuess] = useState("");
  return (
    <div className="grid">
      <div>
        <div>{guess}</div>
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
