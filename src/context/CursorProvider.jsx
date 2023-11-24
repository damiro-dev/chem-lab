import { useState, createContext, useContext } from 'react';

const CursorContext = createContext();
const CursorContextUpdate = createContext();

export function useCursor() {
  return useContext(CursorContext);
}

export function useCursorUpdate() {
  return useContext(CursorContextUpdate);
}

export default function CursorProvider({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <CursorContext.Provider value={position}>
      <CursorContextUpdate.Provider value={setPosition}>{children}</CursorContextUpdate.Provider>
    </CursorContext.Provider>
  );
}
