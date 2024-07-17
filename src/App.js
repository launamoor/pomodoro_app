import Wrapper from "./components/Wrapper";
import MainNav from "./components/MainNav";
import Timer from "./components/Timer";
import SettingsButton from "./components/SettingsButton";
import SettingsWindow from "./components/SettingsWindow";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./styles/App.module.css";
import logo from "./assets/logo.svg";
import { useEffect } from "react";

function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [duration, setDuration] = useState({
    pomodoro: 25,
    shortbreak: 5,
    longbreak: 15,
  });
  const [currentMode, setCurrentMode] = useState("pomodoro");
  const [currentColor, setCurrentColor] = useState("#F87070");
  const [appliedColor, setAppliedColor] = useState("#F87070");
  const [currentFont, setCurrentFont] = useState("Kumbh Sans");
  const [appliedFont, setAppliedFont] = useState("Kumbh Sans");

  const [appliedTimers, setAppliedTimers] = useState({
    pomodoro: 25 * 60,
    shortbreak: 5 * 60,
    longbreak: 15 * 60,
  });

  const [timerIsActive, setTimerIsActive] = useState(false);

  const percentageRef = useRef(0);

  useEffect(() => {
    let interval = null;

    percentageRef.current = Math.floor(
      ((duration[currentMode] * 60 - appliedTimers[currentMode]) /
        (duration[currentMode] * 60)) *
        100
    );

    percentageRef.current =
      percentageRef.current > 97 ? 100 : percentageRef.current;

    if (appliedTimers[currentMode] === 0) setTimerIsActive(false);

    if (timerIsActive && appliedTimers[currentMode] > 0) {
      interval = setInterval(() => {
        setAppliedTimers((prev) => ({
          ...prev,
          [currentMode]: prev[currentMode] - 1,
        }));
      }, 1000);
    } else if (!timerIsActive && appliedTimers[currentMode] !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerIsActive, currentMode, appliedTimers, duration]);

  const handleTimerStart = () => {
    if (appliedTimers[currentMode] === 0) setSettingsOpen(true);

    setTimerIsActive((prev) => !prev);
  };

  const nodeRef = useRef(null);

  const handleArrowUp = (e) => {
    const target = e.currentTarget.id;

    setDuration((prev) => ({
      ...prev,
      [target]: prev[target] + 1,
    }));
  };

  const handleArrowDown = (e) => {
    const target = e.currentTarget.id;

    setDuration((prev) => ({
      ...prev,
      [target]: prev[target] === 0 ? prev[target] : prev[target] - 1,
    }));
  };

  const handleOnChange = (value, id) => {
    setDuration((prev) => ({
      ...prev,
      [id]: parseInt(value) >= 0 ? parseInt(value) : 0,
    }));
  };

  const handleModeChange = (e) => {
    setCurrentMode(e.target.textContent.split(" ").join(""));
    setTimerIsActive(false);
    percentageRef.current = 0;
  };

  const handleColorChange = (e) => {
    if (e.target.id === "F87070") setCurrentColor("#F87070");
    if (e.target.id === "70F3F8") setCurrentColor("#70F3F8");
    if (e.target.id === "D881F8") setCurrentColor("#D881F8");
  };

  const handleFontChange = (e) => {
    if (e.target.id === "kumbh") setCurrentFont("Kumbh Sans");
    if (e.target.id === "roboto") setCurrentFont("Roboto Slab");
    if (e.target.id === "space") setCurrentFont("Space Mono");
  };

  const handleApply = () => {
    setAppliedColor(currentColor);
    setAppliedFont(currentFont);
    setSettingsOpen((prev) => !prev);

    setAppliedTimers((prev) => ({
      ...prev,
      [currentMode]: duration[currentMode] * 60,
    }));
  };

  const toggleSettings = () => {
    setSettingsOpen((prev) => !prev);
  };
  return (
    <div>
      <Wrapper>
        <header>
          <h1>
            <img src={logo} alt="Pomodoro Logo" />
          </h1>
        </header>
        <MainNav
          handleModeChange={handleModeChange}
          appliedColor={appliedColor}
          appliedFont={appliedFont}
          currentMode={currentMode}
        />
        <Timer
          handleTimerStart={handleTimerStart}
          appliedFont={appliedFont}
          appliedColor={appliedColor}
          appliedTimers={appliedTimers}
          currentMode={currentMode}
          timerIsActive={timerIsActive}
          percentageRef={percentageRef}
        />
        <SettingsButton onClick={toggleSettings} />
      </Wrapper>
      <CSSTransition
        nodeRef={nodeRef}
        in={settingsOpen}
        timeout={300}
        classNames={{
          enter: `${styles.mountEnter}`,
          enterActive: `${styles.mountEnterActive}`,
          exit: `${styles.mountExit}`,
          exitActive: `${styles.mountExitActive}`,
        }}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <SettingsWindow
            duration={duration}
            handleArrowUp={handleArrowUp}
            handleArrowDown={handleArrowDown}
            handleOnChange={handleOnChange}
            toggleSettings={toggleSettings}
            handleColorChange={handleColorChange}
            currentColor={currentColor}
            currentFont={currentFont}
            handleFontChange={handleFontChange}
            handleApply={handleApply}
          />
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
