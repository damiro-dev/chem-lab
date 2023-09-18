import { useState, createContext, useContext } from 'react';
import getRandomItems from '../lib/getRandomItems';

const GameContext = createContext();
const GameContextUpdate = createContext();

export function useGame() {
  return useContext(GameContext);
}

export function useGameUpdate() {
  return useContext(GameContextUpdate);
}

export default function GameProvider({ children }) {
  const [inGame, setInGame] = useState(true); // default to false
  const [items, setItems] = useState(false);

  const getItems = () => {
    const randomItems = getRandomItems(itemsData, 4);
    setItems(randomItems);
  };

  const contextValue = { inGame, items };
  const contextUpdateValue = { setInGame, getItems };

  return (
    <GameContext.Provider value={contextValue}>
      <GameContextUpdate.Provider value={contextUpdateValue}>{children}</GameContextUpdate.Provider>
    </GameContext.Provider>
  );
}
