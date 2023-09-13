import { createContext, useContext } from 'react';
import useTimer from '../hooks/useTimer';

const TimerContext = createContext();

export function useTimerContext() {
  return useContext(TimerContext);
}

export default function TimerProvider({ children }) {
  const timer = useTimer();
  return <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>;
}
