import React from "react";
import styles from "../styles/MainNav.module.css";

const MainNav = ({
  handleModeChange,
  appliedColor,
  currentMode,
  appliedFont,
}) => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.list}>
        <li>
          <button
            onClick={handleModeChange}
            className={`${styles.itemButton} ${
              currentMode === "pomodoro" ? styles.active : null
            }`}
            style={
              currentMode === "pomodoro"
                ? {
                    backgroundColor: `${appliedColor}`,
                    fontFamily: `${appliedFont}`,
                  }
                : { fontFamily: `${appliedFont}` }
            }
          >
            pomodoro
          </button>
        </li>
        <li>
          <button
            onClick={handleModeChange}
            className={`${styles.itemButton} ${
              currentMode === "shortbreak" ? styles.active : null
            }`}
            style={
              currentMode === "shortbreak"
                ? {
                    backgroundColor: `${appliedColor}`,
                    fontFamily: `${appliedFont}`,
                  }
                : { fontFamily: `${appliedFont}` }
            }
          >
            short break
          </button>
        </li>
        <li>
          <button
            onClick={handleModeChange}
            className={`${styles.itemButton} ${
              currentMode === "longbreak" ? styles.active : null
            }`}
            style={
              currentMode === "longbreak"
                ? {
                    backgroundColor: `${appliedColor}`,
                    fontFamily: `${appliedFont}`,
                  }
                : { fontFamily: `${appliedFont}` }
            }
          >
            long break
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
