import React from "react";
import styles from "../styles/NumberInput.module.css";
import iconArrowUp from "../assets/icon-arrow-up.svg";
import iconArrowDown from "../assets/icon-arrow-down.svg";

const NumberInput = ({
  id,
  name,
  handleArrowUp,
  duration,
  handleArrowDown,
  handleOnChange,
}) => {
  const handleChange = (e) => {
    handleOnChange(e.target.value, id);
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <input
          onChange={handleChange}
          value={duration[id]}
          className={styles.input}
          min={0}
          max={100}
          type="number"
          name={name}
          id={id}
        />
        <div className={styles.buttonsContainer}>
          <button onClick={handleArrowUp} id={id} className={styles.button}>
            <img src={iconArrowUp} alt="Icon Arrow Up" />
          </button>
          <button onClick={handleArrowDown} id={id} className={styles.button}>
            <img src={iconArrowDown} alt="Icon Arrow Down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
