import React, { useState } from "react";
import Values from "values.js";
import Navbar from "./components/Navbar";
import ColorPalatte from "./components/ColorPalatte";
import "./App.css";

function App() {
  const [color, setColor] = useState("#f15025");

  const [colorList, setColorList] = useState(new Values("#f15025").all(10));

  const [error, setError] = useState(false);

  function handleChange(event) {
    setColor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      setColorList(new Values(color).all(10));
    } catch (error) {
      setError(true);
    }
  }

  function generateRandomColor() {
    let randomColor = "";
    function generateRandomNumber() {
      return Math.floor(Math.random()*255)
    }
    randomColor = `rgb(${generateRandomNumber()} , ${generateRandomNumber()} , ${generateRandomNumber()})`;
    setColor(randomColor)
    setColorList(new Values(randomColor).all(10));
  }

  const ColorPalatteElement = colorList.map((color, index) => (
    <ColorPalatte color={color.rgb} weight={color.weight} index={index} />
  ));

  return (
    <div className="App">
      <Navbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        generateRandomColor={generateRandomColor}
        color={color}
        error={error}
      />

      <div className="color--palatte--container">{ColorPalatteElement}</div>
    </div>
  );
}

export default App;
