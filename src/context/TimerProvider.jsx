import { createContext, useContext, useState, useEffect, useMemo } from 'react';

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
  const [initialTime, setInitialTime] = useState(30);
  const [isCountdown, setIsCountdown] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        if (isCountdown) {
          if (time > 0) {
            setTime((prevTime) => prevTime - 1);
          } else {
            setIsRunning(false);
          }
        } else {
          setTime((prevTime) => prevTime + 1);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    // Cleanup
    return () => clearInterval(timer);
  }, [isRunning, isCountdown, time]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const pauseTimer = () => setIsRunning(false);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      isRunning,
      time,
      isCountdown,
      startTimer,
      stopTimer,
      pauseTimer,
      initialTime,
    }),
    [isRunning, time, isCountdown, initialTime, startTimer, stopTimer, pauseTimer]
  );

  const contextUpdateValue = { setIsCountdown, setTime, setInitialTime };

  return (
    <TimerContext.Provider value={contextValue}>
      <TimerContextUpdate.Provider value={contextUpdateValue}>{children}</TimerContextUpdate.Provider>
    </TimerContext.Provider>
  );
}
