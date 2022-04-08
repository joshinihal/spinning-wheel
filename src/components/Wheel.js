import { useState, useEffect } from "react";

import classes from "./Wheel.module.css";

const Wheel = (props) => {
  // to keep track of where the wheel will stop, it should be defaulted at first index.
  const [selectedItem, setSelectedItem] = useState(0);

  // to keep track of whether the wheel was spun or not
  const [selectionChanged, setSelectionChanged] = useState(false);

  //   this effect should run whenever there is a new spin
  useEffect(() => {
    // check if the target is null, if it is then set a target
    if (selectedItem === null) {
      // get target in the range of length
      const target = Math.floor(Math.random() * props.wheelContent.length);
      console.log("Target is", props.wheelContent[target]);
      setSelectedItem(target);
    } else {
      // if the target is already there, set it null and then run the effect again with timeout so it sets a new target
      setSelectedItem(null);
      setTimeout(() => {
        setSelectionChanged(false);
      }, 500);
    }
  }, [selectionChanged]);

  //   get a random selection since the one from range can repeat and won't run it again
  const selectItem = () => {
    setSelectionChanged(Math.random());
  };

  //   css variabes to help with css logic
  const wheelStyles = {
    "--total-items": props.wheelContent.length,
    "--selected-item": selectedItem,
  };

  const spinningClassName = selectedItem !== null ? classes["spinning"] : "";

  return (
    <div className={classes["wheel-container"]}>
      <span className={`material-icons ${classes["icon"]}`}>water_drop</span>

      <div
        className={`${classes["wheel"]} ${spinningClassName}`}
        style={wheelStyles}
        onClick={selectItem}
      >
        {props.wheelContent.map((item, index) => (
          <div
            className={classes["wheel-item"]}
            key={index}
            style={{ "--current-item": index }}
          >
            <span className={classes["wheel-item-text"]}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wheel;
