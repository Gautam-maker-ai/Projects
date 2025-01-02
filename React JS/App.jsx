import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState([]);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <h1 className={styles.heading}>Calculator</h1>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
