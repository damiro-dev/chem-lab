import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Retrieve the data from localStorage on component mount
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create a state variable to hold the current value
  const [value, setValue] = useState(initial);

  // Function to add a new item to the stored array
  const addItem = (newItem) => {
    const updatedValue = [...value, newItem];
    setValue(updatedValue);
    localStorage.setItem(key, JSON.stringify(updatedValue));
  };

  // Function to reset the stored data
  const reset = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, reset];
}
