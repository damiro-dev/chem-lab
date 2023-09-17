// USAGE:
// const inputArray = ['Item 1', 'Item 2', 'Item 3', /* ... */ 'Item 20'];
// const numRandomItems = 4;
// const randomItems = getRandomItems(inputArray, numRandomItems);
// console.log(randomItems);

export default function getRandomItems(inputArray, numItems) {
  const shuffledArray = [...inputArray]; // Create a copy to avoid modifying the original array
  const randomItems = [];

  // Shuffle the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Select the first 4 elements from the shuffled array or all if inputArray length is less than 4
  for (let i = 0; i < Math.min(numItems, shuffledArray.length); i++) {
    randomItems.push(shuffledArray[i]);
  }

  // set tags to random items
  const additionalData = { tagged: false };
  for (let i = 0; i < randomItems.length; i++) {
    randomItems[i] = { ...randomItems[i], ...additionalData };
  }

  return randomItems;
}
