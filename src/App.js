import React, { useState } from "react";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const disableSwitch = switchNumber => {
    // switchNumber permet de savoir quel switch a déclenché ce changement
    if (switchNumber === 1 && switch2 === true && switch3 === true) {
      setSwitch2(false);
    } else if (switchNumber === 2 && switch1 === true && switch3 === true) {
      setSwitch3(false);
    } else if (switchNumber === 3 && switch2 === true && switch1 === true) {
      setSwitch1(false);
    }
  };

  return (
    <div className="App">
      <p
        className={switch1 === true ? "enabled" : "disabled"}
        onClick={() => {
          setSwitch1(!switch1); // le ! permet d'inverser la valeur
          if (switch1 === false) {
            disableSwitch(1);
          }
        }}
      >
        {switch1 === true ? "YES" : "NO"}
      </p>
      <p
        className={switch2 === true ? "enabled" : "disabled"}
        onClick={() => {
          setSwitch2(!switch2); // le ! permet d'inverser la valeur
          if (switch2 === false) {
            disableSwitch(2);
          }
        }}
      >
        {switch2 === true ? "YES" : "NO"}
      </p>
      <p
        className={switch3 === true ? "enabled" : "disabled"}
        onClick={() => {
          setSwitch3(!switch3); // le ! permet d'inverser la valeur
          if (switch3 === false) {
            disableSwitch(3);
          }
        }}
      >
        {switch3 === true ? "YES" : "NO"}
      </p>
    </div>
  );
}

export default App;
