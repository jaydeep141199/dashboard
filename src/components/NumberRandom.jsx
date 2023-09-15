import React, { useState } from "react";

let randomNumber = Math.round(Math.random() * 100);
sessionStorage.setItem("random number", randomNumber);

const NumberRandom = () => {
  const [value, setValue] = useState("");
  let [butvalue, setButtonValue] = useState("start");
  const [show, setshow] = useState(false);

  const [results, setResult] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const handleClick = () => {
    if (butvalue === "start") {
      setButtonValue("stop");
      setshow(!show);
    } else {
      setButtonValue("start");
    }
  };
  const onClick = () => {
    // check users guess against randonNumber
    const userGuess = value;
    if (userGuess == randomNumber)
      setResult(
        <p className="alert alert-success">
          Correct! Your guess number and random number is same
        </p>
      );
    else if (userGuess > randomNumber)
      setResult(
        <p className="alert alert-warning">Too high , Please try again !</p>
      );
    else if (userGuess === "")
      setResult(<p className="alert alert-warning">Please enter any number</p>);
    else if (userGuess < randomNumber && userGuess !== "")
      setResult(
        <p className="alert alert-warning">Too low , Please try again !</p>
      );
    else setResult("");
  };

  return (
    <>
      <div
        className="bg-blue-200 text-center py-5  rounded-xl w-[500px]"
        style={{ marginLeft: "450px", marginTop: "230px" }}
      >
        <h2>Guess The Number game</h2>
        <p className="lead pb-5">Guess a number between 1 and 100.</p>

        <button onClick={handleClick} className="click my-5 px-3">
          {butvalue}
        </button>
        {show && (
          <div>
            <input
              value={value}
              type="number"
              onChange={onChange}
              className="border"
              max={100}
              min={1}
            />
            <br />
            <button type="submit" onClick={onClick} className="click px-5 py-2">
              GUESS
            </button>
            <br />
            <br />
            <span className="alert">{results}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default NumberRandom;
