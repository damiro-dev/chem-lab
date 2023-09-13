import { useState, useEffect } from 'react';

export default function useTimer() {
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

  return {
    isRunning,
    time,
    startTimer,
    stopTimer,
    pauseTimer,
    resetTimer,
  };
}
