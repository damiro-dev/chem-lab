import { useState, createContext, useContext } from 'react';

const AnimateCharContext = createContext();
const AnimateCharContextUpdate = createContext();

export function useAnimateChar() {
  return useContext(AnimateCharContext);
}

export function useAnimateCharUpdate() {
  return useContext(AnimateCharContextUpdate);
}

export default function AnimateCharProvider({ children }) {
  const [animateChar, setAnimateChar] = useState(false);
  return (
    <AnimateCharContext.Provider value={animateChar}>
      <AnimateCharContextUpdate.Provider value={setAnimateChar}>{children}</AnimateCharContextUpdate.Provider>
    </AnimateCharContext.Provider>
  );
}
