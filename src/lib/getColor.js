export default function getColor(score) {
  if (score <= 5) {
    // Metal
    return '#7E7E7E';
  } else if (score <= 15) {
    // Copper
    return '#CD7F32';
  } else if (score <= 25) {
    // Silver
    return '#C0C0C0';
  } else {
    // Gold
    return '#FFD700';
  }
}
