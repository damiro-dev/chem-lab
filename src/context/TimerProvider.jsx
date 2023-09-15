import { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the timer
const TimerContext = createContext();

// Custom hook to access the timer context
export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
}

export default function TimerProvider({ children }) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Increment time every second (1000ms)
    } else {
      clearInterval(timer);
    }

    // Cleanup on unmount or when isRunning changes to false
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => setTime(0);

  return (
    <TimerContext.Provider
      value={{
        isRunning,
        time,
        startTimer,
        stopTimer,
        pauseTimer,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
