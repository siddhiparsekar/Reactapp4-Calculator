import React from "react";
import ReactDOM from "react-dom";
import * as calculator from "./calculator";
//Create react app from scratch
//show a singe h1 that says "good morning" if between midnight and 12pm
//or "goodafternoon" if between 12pm and 6pm
//or "goodnight" if between 6pm and midnight
//Apply the heading style in the stlye.css
//Dynamically change the color of the h1 using inline cssstyles
//Morning =blue, Afternoon=yellow, Night=green

ReactDOM.render(
  <div>
    <li>Addition:{calculator.add(2, 1)}</li>
    <li>Subtraction:{calculator.subtract(2, 1)}</li>
    <li>Multiplication:{calculator.multiply(2, 1)}</li>
    <li>Division:{calculator.divide(2, 1)}</li>
  </div>,
  document.getElementById("root")
);
