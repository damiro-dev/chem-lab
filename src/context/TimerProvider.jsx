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
          // Countdown
          setTime((prevTime) => (time > 0 ? prevTime - 1 : setIsRunning(false)));
        } else {
          // Countup
          setTime((prevTime) => (time < initialTime ? prevTime + 1 : setIsRunning(false)));
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
