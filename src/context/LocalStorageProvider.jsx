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

    // Check if there is an entry with the same name, timestamp, and score
    const existingEntryIndex = currentData.findIndex(
      (entry) => entry.name === newItem.name && entry.timestamp === newItem.timestamp && entry.score === newItem.score
    );

    if (existingEntryIndex !== -1) {
      // If an entry with the same properties exists, replace it only if the new score is higher
      currentData[existingEntryIndex] = newItem;
    } else {
      // Otherwise, add the new item to the data
      currentData.push(newItem);
    }

    // Sort the data based on score in descending order
    const updatedLabsGameData = currentData.sort((a, b) => b.score - a.score);

    // Update localStorage and state
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
