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
  const [position, setPosition] = useState({
    // Position in % relative to image (0-100%)
    x: 0,
    y: 0,
    // Position in px relative to viewport via e (clientx / clientY)
    ex: 0,
    ey: 0,
    // Position in px relative to image
    rx: 0,
    ry: 0,
  });

  return (
    <CursorContext.Provider value={position}>
      <CursorContextUpdate.Provider value={setPosition}>{children}</CursorContextUpdate.Provider>
    </CursorContext.Provider>
  );
}
