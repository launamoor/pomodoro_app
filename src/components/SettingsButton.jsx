import React from "react";
import styles from "../styles/SettingsButton.module.css";
import iconSettings from "../assets/icon-settings.svg";

const SettingsButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.settingsButton}>
      <img
        className={styles.settingsIcon}
        src={iconSettings}
        alt="Settings Icon"
      />
    </button>
  );
};

export default SettingsButton;
