export default function getTrophy(level) {
  if (level <= 5) {
    return 'Metal Test Tube';
  } else if (level <= 10) {
    return 'Copper Test Tube';
  } else if (level <= 15) {
    return 'Copper Round Flask';
  } else if (level <= 20) {
    return 'Silver Round Flask';
  } else if (level <= 25) {
    return 'Silver Angled Flask';
  } else {
    return 'Golden Angled Flask'; // 26 up
  }
}
