import { useState, createContext, useContext, useEffect } from 'react';
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
  const [scene, setScene] = useState('yard');
  const [inGame, setInGame] = useState(false);
  const [items, setItems] = useState([]);
  const [numItems, setNumItems] = useState(0);

  const getRandomItemsWrapper = (items) => {
    const newItems = getRandomItems(items, numItems);
    setItems(newItems);
  };

  const contextValue = { inGame, items, numItems, scene };
  const contextUpdateValue = {
    setRandomItems: getRandomItemsWrapper,
    setNumItems,
    setInGame,
    setScene,
  };

  return (
    <GameContext.Provider value={contextValue}>
      <GameContextUpdate.Provider value={contextUpdateValue}>{children}</GameContextUpdate.Provider>
    </GameContext.Provider>
  );
}
