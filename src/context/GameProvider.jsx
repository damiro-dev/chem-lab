import { useState, createContext, useContext } from 'react';
import getRandomItems from '../lib/getRandomItems';
import levelsData from '../data/levels';

const GameContext = createContext();
const GameContextUpdate = createContext();

export function useGame() {
  return useContext(GameContext);
}

export function useGameUpdate() {
  return useContext(GameContextUpdate);
}

export default function GameProvider({ children }) {
  const [name, setName] = useState('');
  const [scene, setScene] = useState(4);
  const [inGame, setInGame] = useState(false);
  const [items, setItems] = useState([]);
  const [numItems, setNumItems] = useState(1);
  const [revealItems, setRevealItems] = useState(false);
  const [itemFound, setItemFound] = useState(1);
  const [levelTime, setLevelTime] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);

  const setLevelWrapper = (level) => {
    setLevel(level);
    const levelDetails = levelsData.find((levelData) => levelData.level === level);
    setScene(levelDetails ? levelDetails.scene : 4); // Default on the hardest scene
    setNumItems(levelDetails ? levelDetails.items : (prev) => prev + 1); // item+1 when lvl26 is reached
    setLevelTime(levelDetails ? levelDetails.time : 25);
  };

  const getRandomItemsWrapper = (items) => {
    const newItems = getRandomItems(items, numItems);
    setItems(newItems);
  };

  const contextValue = { inGame, items, numItems, scene, level, revealItems, levelTime, name, itemFound, score };
  const contextUpdateValue = {
    setLevel: setLevelWrapper,
    setItems: getRandomItemsWrapper,
    setInGame,
    setScene,
    setRevealItems,
    setName,
    setItemFound,
    setScore,
  };

  return (
    <GameContext.Provider value={contextValue}>
      <GameContextUpdate.Provider value={contextUpdateValue}>{children}</GameContextUpdate.Provider>
    </GameContext.Provider>
  );
}
