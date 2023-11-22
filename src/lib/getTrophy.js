export default function getTrophy(level) {
  if (level <= 5) {
    return 'Metal Test Tube';
  } else if (level <= 10) {
    return 'Copper Test Tube';
  } else if (level <= 15) {
    return 'Copper Florence Flask';
  } else if (level <= 20) {
    return 'Silver Florence Flask';
  } else if (level <= 25) {
    return 'Silver Erlenmeyer Flask';
  } else {
    return 'Golden Erlenmeyer Flask'; // 26 up
  }
}
