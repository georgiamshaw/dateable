import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [guess, setGuess] = useState("");
  const [correctGuess, setCorrectGuess] = useState("");
  const [colour, setColour] = useState("gray");

  const date = dayjs(guess).format("DD/MM/YYYY").split("");
  const todayDate = "2022-03-09";

  useEffect(() => {
    if (guess.localeCompare(todayDate) === 0) {
      setCorrectGuess("Correct");
      setColour("green");
    } else {
      setCorrectGuess("Incorrect");
      setColour("red");
    }
  }, [guess]);

  return (
    <div className="grid">
      <div
        style={{
          display: "flex",
        }}
      >
        {date.map((date, index) => {
          return (
            <div
              id="div"
              key={index}
              style={{
                padding: ".5rem",
                margin: ".3rem",
                border: "1px solid gray",
                borderRadius: "5px",
                backgroundColor: colour,
              }}
            >
              {date}
            </div>
          );
        })}
        <div>{correctGuess}</div>
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
