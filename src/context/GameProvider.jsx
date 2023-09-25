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
  const [scene, setScene] = useState('yard');
  const [inGame, setInGame] = useState(false);
  const [items, setItems] = useState([]);
  const [level, setLevel] = useState(0);
  const [numItems, setNumItems] = useState(0);
  const [status, setStatus] = useState('');
  const [revealItems, setRevealItems] = useState(false);

  const setStatusWrapper = (status) => {
    setStatus(status);
  };

  const getRandomItemsWrapper = (items) => {
    const newItems = getRandomItems(items, numItems);
    setItems(newItems);
  };

  const contextValue = { inGame, items, numItems, scene, level, status, revealItems };
  const contextUpdateValue = {
    setRandomItems: getRandomItemsWrapper,
    setStatus: setStatusWrapper,
    setNumItems,
    setInGame,
    setScene,
    setLevel,
    setRevealItems,
  };

  return (
    <GameContext.Provider value={contextValue}>
      <GameContextUpdate.Provider value={contextUpdateValue}>{children}</GameContextUpdate.Provider>
    </GameContext.Provider>
  );
}
