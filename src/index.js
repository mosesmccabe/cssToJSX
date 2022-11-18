//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

var favNum = 2;

ReactDOM.render(
  <div>
    <h1 className="heading">My Todo list</h1>
    <p>my lucky number is {favNum}</p>
    <p>my lucky random number {Math.floor(Math.random() * 10)}</p>
    <p>Do math {5 + 6}</p>
    <div>
      <img
        className="image-setting"
        src="https://images.unsplash.com/photo-1650327034492-7a3dc7f13957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
      />
      <img
        className="image-setting"
        src="https://images.unsplash.com/photo-1657549918358-5cb751476e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
      />
    </div>
  </div>,
  document.getElementById("root")
);
