import { useState } from "react";
import "./App.css";
import { FirstComponent } from "./components/FirstComponent";

function App() {
  const arr = ["Primer", "Segundo", "Tercer"];

  const [texto, setTexto] = useState(0);

  const handleClick = (event) => {
    setTexto(Math.floor(Math.random() * 3));
  };

  return (
    <>
      <FirstComponent text={arr[texto]} />

      <button value={"Pepe"} onClick={handleClick}>
        Click!!!
      </button>
    </>
  );
}

export default App;
