import React from "react";
import styles from "../styles/Timer.module.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = ({
  appliedColor,
  appliedFont,
  handleTimerStart,
  appliedTimers,
  currentMode,
  timerIsActive,
  percentageRef,
}) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleHoverColor = (appliedColor) => {
    switch (appliedColor) {
      case "#F87070": {
        return styles.hoverPrimary;
      }
      case "#70F3F8": {
        return styles.hoverSecondary;
      }
      case "#D881F8": {
        return styles.hoverTertiary;
      }
      default: {
        return styles.hoverPrimary;
      }
    }
  };

  return (
    <button onClick={handleTimerStart} className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.timerWrapper}>
          <CircularProgressbar
            value={percentageRef.current}
            className={styles.progressBar}
            strokeWidth={4}
            styles={buildStyles({
              pathColor: `${appliedColor}`,
              trailColor: "transparent",
              backgroundColor: `${appliedColor}`,
              pathTransitionDuration: 2,
            })}
          />
          <div
            style={{ fontFamily: `${appliedFont}` }}
            className={styles.timer}
          >
            {formatTime(appliedTimers[currentMode])}
          </div>
          <h3
            style={{ fontFamily: `${appliedFont}` }}
            className={`${styles.action} ${handleHoverColor(appliedColor)}`}
          >
            {timerIsActive ? "Pause" : "Start"}
          </h3>
        </div>
      </div>
    </button>
  );
};

export default Timer;
