import { useState } from "react";
import classes from "./Option.module.css";

const Option = (props) => {

    const [count, setCount] = useState(6);

    const handleCountChange = (e) => {
        setCount(e.target.value);
        props.onCountChange(Number(e.target.value));
    };

  return (
    <div className={classes["options-container"]}>
      <label htmlFor="count">Select Number of elements:</label>
      <input min="2" max="20" type="number" id="count" defaultValue={count} onChange={handleCountChange}></input>
    </div>
  );
};

export default Option;
