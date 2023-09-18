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
  const [inGame, setInGame] = useState(false);
  const [items, setItems] = useState([]);
  const [numItems, setNumItems] = useState(4);

  const getRandomItemsWrapper = (items) => {
    const newItems = getRandomItems(items, numItems);
    setItems(newItems);
  };

  const updateInGame = (bool) => {
    setInGame(bool);
  };

  const updateNumItems = (num) => {
    setNumItems(num);
  };

  const contextValue = { inGame, items, numItems };
  const contextUpdateValue = {
    setRandomItems: getRandomItemsWrapper,
    setNumItems: updateNumItems,
    setInGame: updateInGame,
  };

  return (
    <GameContext.Provider value={contextValue}>
      <GameContextUpdate.Provider value={contextUpdateValue}>{children}</GameContextUpdate.Provider>
    </GameContext.Provider>
  );
}
