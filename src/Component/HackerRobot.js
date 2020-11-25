import React from "react";

export default function HackerRobot({ userInput }) {
  const hackerText = (text) => {
    let letterArr = text.toUpperCase().split("")
    let hackerArr = letterArr.map(letter => {
      switch (letter) {
        case "E":
          letter = 3
          break;
        case "L":
          letter = 1
          break;
        case "O":
          letter = 0
          break;
        case "S":
          letter = 5
          break;
        case "B":
          letter = 8
          break;
        case "G":
          letter = 6
          break;
        case "T":
          letter = 7
          break;
        default:
          return letter
      }
      return letter
    })
    return hackerArr.join("")
  };

  return (
    <div>
      <p>I hear you saying {hackerText(userInput)}. Is that correct?</p>
    </div>
  );
}
