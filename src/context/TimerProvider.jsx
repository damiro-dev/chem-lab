import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useGame, useGameUpdate } from './GameProvider';

const TimerContext = createContext();
const TimerContextUpdate = createContext();

export function useTimer() {
  return useContext(TimerContext);
}

export function useTimerUpdate() {
  return useContext(TimerContextUpdate);
}

export default function TimerProvider({ children }) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [initialTime, setInitialTime] = useState(5);
  const [isCountdown, setIsCountdown] = useState(true);

  const { inGame } = useGame();
  const { setRevealItems } = useGameUpdate();

  const onTimeOver = () => {
    if (inGame) {
      console.log('time-over');
      setIsRunning(false);
      setRevealItems(true);
    }
  };

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        if (isCountdown) {
          // Countdown
          setTime((prevTime) => (time > 0 ? prevTime - 1 : onTimeOver()));
        } else {
          // Countup
          setTime((prevTime) => (time < initialTime ? prevTime + 1 : onTimeOver()));
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, isCountdown, time]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      time,
      isRunning,
      isCountdown,
      initialTime,
      startTimer,
      stopTimer,
    }),
    [time, isRunning, isCountdown, initialTime, startTimer, stopTimer]
  );

  const contextUpdateValue = { setIsCountdown, setTime, setInitialTime };

  return (
    <TimerContext.Provider value={contextValue}>
      <TimerContextUpdate.Provider value={contextUpdateValue}>{children}</TimerContextUpdate.Provider>
    </TimerContext.Provider>
  );
}
