import React from "react";
import styles from "../styles/SettingsWindow.module.css";
import iconClose from "../assets/icon-close.svg";
import NumberInput from "./NumberInput";

const SettingsWindow = ({
  handleArrowUp,
  duration,
  handleArrowDown,
  handleOnChange,
  toggleSettings,
  handleColorChange,
  currentColor,
  handleFontChange,
  currentFont,
  handleApply,
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.settingsDiv}>
            <h2 className={styles.title}>Settings</h2>
            <button onClick={toggleSettings} className={styles.closeButton}>
              <img src={iconClose} alt="Icon Close" />
            </button>
          </div>

          <h4 className={styles.timeTitle}>Time (Minutes)</h4>
          <div className={styles.timeDiv}>
            {/* pomodoro */}
            <div className={styles.timeRowFlex}>
              <p className={styles.timeRowTitle}>pomodoro</p>
              <NumberInput
                handleOnChange={handleOnChange}
                duration={duration}
                handleArrowUp={handleArrowUp}
                handleArrowDown={handleArrowDown}
                id="pomodoro"
                name="pomodoro"
              />
            </div>

            {/* short break */}
            <div className={styles.timeRowFlex}>
              <p className={styles.timeRowTitle}>short break</p>
              <NumberInput
                handleOnChange={handleOnChange}
                duration={duration}
                handleArrowUp={handleArrowUp}
                handleArrowDown={handleArrowDown}
                id="shortbreak"
                name="shortbreak"
              />
            </div>
            {/* long break */}
            <div className={styles.timeRowFlex}>
              <p className={styles.timeRowTitle}>long break</p>
              <NumberInput
                handleOnChange={handleOnChange}
                duration={duration}
                handleArrowUp={handleArrowUp}
                handleArrowDown={handleArrowDown}
                id="longbreak"
                name="longbreak"
              />
            </div>
          </div>
          <div className={styles.fontDiv}>
            <h4 id="fontTitle" className={styles.fontTitle}>
              Font
            </h4>
            <div className={styles.fontDivFlex}>
              <button
                id="kumbh"
                className={`${styles.fontDivButton} ${
                  currentFont.split(" ")[0].toLowerCase() === "kumbh"
                    ? styles.buttonActive
                    : null
                }`}
                onClick={handleFontChange}
              >
                Aa
              </button>
              <button
                onClick={handleFontChange}
                id="roboto"
                className={`${styles.fontDivButton} ${
                  currentFont.split(" ")[0].toLowerCase() === "roboto"
                    ? styles.buttonActive
                    : null
                }`}
              >
                Aa
              </button>
              <button
                onClick={handleFontChange}
                id="space"
                className={`${styles.fontDivButton} ${
                  currentFont.split(" ")[0].toLowerCase() === "space"
                    ? styles.buttonActive
                    : null
                }`}
              >
                Aa
              </button>
            </div>
          </div>
          <div className={styles.colorDiv}>
            <h4 className={styles.colorTitle}>Color</h4>
            <div className={styles.colorDivFlex}>
              <button
                onClick={handleColorChange}
                id="F87070"
                className={styles.colorDivButton}
              >
                {currentColor === "#F87070" ? `✔` : null}
              </button>
              <button
                onClick={handleColorChange}
                id="70F3F8"
                className={styles.colorDivButton}
              >
                {currentColor === "#70F3F8" ? "✔" : null}
              </button>
              <button
                onClick={handleColorChange}
                id="D881F8"
                className={styles.colorDivButton}
              >
                {currentColor === "#D881F8" ? "✔" : null}
              </button>
            </div>
          </div>
          <button
            style={{ backgroundColor: `${currentColor}` }}
            className={styles.applyButton}
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsWindow;
