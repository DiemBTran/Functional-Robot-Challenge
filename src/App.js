import React, { useState } from "react";
import GoodRobot from "./Component/GoodRobot";
import BadRobot from "./Component/BadRobot";

export default function App() {
  const [userInput, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>Let's Talk to Robots!</h1>
      <input
        type="text"
        name="userInput"
        value={userInput}
        onChange={handleChange}
      />
      <GoodRobot banana={userInput} />
      <BadRobot userInput={userInput} />
    </div>
  );
}
