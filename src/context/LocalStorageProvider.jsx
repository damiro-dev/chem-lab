import { createContext, useContext, useState } from 'react';

const LocalStorageContext = createContext();

export function useLocalStorage() {
  return useContext(LocalStorageContext);
}

export default function LocalStorageProvider({ children }) {
  // Function to retrieve the 'labsGame' data and arrange it based on score (highest to lowest)
  const getLabsGameData = () => {
    const storedLabsGameData = localStorage.getItem('labsGame');
    if (storedLabsGameData) {
      const parsedLabsGameData = JSON.parse(storedLabsGameData);
      return parsedLabsGameData.sort((a, b) => b.score - a.score);
    }
    return [];
  };

  // Function to add a new 'labsGame' item
  const addLabsGameItem = (newItem) => {
    const currentData = getLabsGameData();
    const updatedLabsGameData = [...currentData, newItem].sort((a, b) => b.score - a.score);
    localStorage.setItem('labsGame', JSON.stringify(updatedLabsGameData));
    setLabsGameData(updatedLabsGameData);
  };

  // Function to reset the 'labsGame' data
  const resetLabsGame = () => {
    localStorage.removeItem('labsGame');
    setLabsGameData([]);
  };

  // Initialize labsGameData using localStorage or an empty array
  const [labsGameData, setLabsGameData] = useState(getLabsGameData());

  // Context value to provide functions and data to children
  const contextValue = {
    labsGameData,
    addLabsGameItem,
    resetLabsGame,
  };

  return <LocalStorageContext.Provider value={contextValue}>{children}</LocalStorageContext.Provider>;
}
