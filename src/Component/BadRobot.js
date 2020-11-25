import React from "react";

export default function BadRobot({ userInput }) {
  const ruinText = (text) => {
    let newString = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 4 === 0) {
        newString += "B";
      } else if (i % 4 === 1) {
        newString += "L";
      } else if (i % 4 === 2) {
        newString += "A";
      } else if (i % 4 === 3) {
        newString += "H ";
      }
    }
    return newString;
  };

  return (
    <div>
      <p>I hear you saying {ruinText(userInput)}. Is that correct?</p>
    </div>
  );
}
