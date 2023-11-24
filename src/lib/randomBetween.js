// Return a random number between min (inclusive) and max (exclusive)
export default function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
