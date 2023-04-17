import React, { useState } from "react";
import "./Dice.css";
import photo from "./profile.png";
function Dice() {
  const [DiceValue, setDiceValue] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  function DiceRoll() {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
    if (currentPlayer === 1) {
      if (newValue === 6) {
        setCurrentPlayer(1);
      } else {
        setCurrentPlayer(2);
      }
    } else {
      if (newValue === 6) {
        setCurrentPlayer(2);
      } else {
        setCurrentPlayer(1);
      }
    }
    // setDiceValue(newValue);
  }
  return (
    <div className="diceGame">
      <div className="master-container">
        <div className="profile">
          <div className="playerNumberL">
            <div className="title">
              <img src={photo} className="pic"></img>
            </div>
            <h1>PLAYER 1</h1>
          </div>
          <div className="playerNumberR">
            <div className="title">
              <img src={photo} className="pic"></img>
            </div>
            <h1>PLAYER 2</h1>
          </div>
        </div>
        <div className="message">
          {`PLAYER ${currentPlayer} SHOULD MOVE ${DiceValue} STEPS`}
        </div>
        <div className="diceValue">
          <h2>DICE VALUE</h2>
          <div className="value">{DiceValue}</div>
        </div>

        <div className="button">
          <button onClick={DiceRoll}>ROLL DICE</button>
        </div>
      </div>
    </div>
  );
}

export default Dice;
